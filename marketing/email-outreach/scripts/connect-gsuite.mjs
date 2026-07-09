import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { createPkcePair, buildGoogleAuthUrl, exchangeGoogleCode } from '../lib/google-oauth.mjs';
import { fetchGmailProfile, writeJson } from '../lib/gmail-api.mjs';
import { getEnvValue, mergeOutreachEnv } from '../lib/env.mjs';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const envFile = resolve(projectRoot, '.env');
const env = mergeOutreachEnv(envFile);

for (const [key, value] of Object.entries(env)) {
  if (process.env[key] === undefined) {
    process.env[key] = value;
  }
}

const clientId = getEnvValue('GOOGLE_CLIENT_ID');
const clientSecret = getEnvValue('GOOGLE_CLIENT_SECRET');
const redirectUri = getEnvValue('GOOGLE_REDIRECT_URI', 'http://localhost:8787/oauth2/callback');
const scopes = getEnvValue('GOOGLE_SCOPES', 'https://www.googleapis.com/auth/gmail.send')
  .split(',')
  .map((scope) => scope.trim())
  .filter(Boolean);
const tokenFile = resolve(projectRoot, getEnvValue('GOOGLE_TOKEN_FILE', '.secrets/gmail-oauth.tokens.json'));
const { verifier, challenge } = createPkcePair();

const authUrl = buildGoogleAuthUrl({
  clientId,
  redirectUri,
  scopes,
  codeChallenge: challenge
});

let resolveCode;
let rejectCode;
const codePromise = new Promise((resolve, reject) => {
  resolveCode = resolve;
  rejectCode = reject;
});

const redirectPath = new URL(redirectUri).pathname;
const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url || '/', redirectUri);

  if (requestUrl.pathname !== redirectPath) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
    return;
  }

  const error = requestUrl.searchParams.get('error');
  if (error) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end(`OAuth failed: ${error}`);
    rejectCode(new Error(`OAuth failed: ${error}`));
    return;
  }

  const code = requestUrl.searchParams.get('code');
  if (!code) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Missing code parameter');
    rejectCode(new Error('Missing code parameter'));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('OAuth complete. You can close this tab and return to the terminal.');
  resolveCode(code);
});

await new Promise((resolve) => {
  const port = Number(new URL(redirectUri).port || 8787);
  server.listen(port, resolve);
});

console.log('\nOpen this URL in your browser and approve access:\n');
console.log(authUrl);
console.log(`\nWaiting for the callback on ${redirectUri}\n`);

try {
  const code = await codePromise;
  const tokens = await exchangeGoogleCode({
    clientId,
    clientSecret,
    code,
    redirectUri,
    codeVerifier: verifier
  });

  const payload = {
    ...tokens,
    expiry_date: Date.now() + Number(tokens.expires_in || 0) * 1000
  };
  writeJson(tokenFile, payload);

  const profile = await fetchGmailProfile(tokens.access_token);
  console.log('Connected Gmail profile:');
  console.log(JSON.stringify(profile, null, 2));
  console.log(`\nTokens saved to ${tokenFile}\n`);
} finally {
  server.close();
}
