import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { getEnvValue, mergeOutreachEnv } from '../lib/env.mjs';
import {
  buildMimeMessage,
  fetchGmailProfile,
  fileExists,
  readJson,
  renderTemplate,
  sendGmailMessage,
  writeJson
} from '../lib/gmail-api.mjs';
import { refreshGoogleAccessToken } from '../lib/google-oauth.mjs';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const envFile = resolve(projectRoot, '.env');
const env = mergeOutreachEnv(envFile);

for (const [key, value] of Object.entries(env)) {
  if (process.env[key] === undefined) {
    process.env[key] = value;
  }
}

function parseArgs(argv) {
  const args = {
    to: '',
    subject: '',
    text: '',
    html: '',
    textFile: '',
    htmlFile: '',
    varsFile: '',
    dryRun: false,
    replyTo: getEnvValue('OUTREACH_REPLY_TO', ''),
    fromName: getEnvValue('OUTREACH_FROM_NAME', '')
  };

  for (let index = 0; index < argv.length; index += 1) {
    const current = argv[index];
    const next = argv[index + 1];

    if (current === '--to') args.to = next || '';
    if (current === '--subject') args.subject = next || '';
    if (current === '--text') args.text = next || '';
    if (current === '--html') args.html = next || '';
    if (current === '--text-file') args.textFile = next || '';
    if (current === '--html-file') args.htmlFile = next || '';
    if (current === '--vars-file') args.varsFile = next || '';
    if (current === '--reply-to') args.replyTo = next || '';
    if (current === '--from-name') args.fromName = next || '';
    if (current === '--dry-run') args.dryRun = true;
  }

  return args;
}

const args = parseArgs(process.argv.slice(2));
if (!args.to || !args.subject) {
  console.error('Usage: npm run send --prefix marketing/email-outreach -- --to lead@example.com --subject "Subject" [--text "Body" | --text-file path] [--html-file path] [--vars-file path] [--dry-run]');
  process.exit(1);
}

const tokenFile = resolve(projectRoot, getEnvValue('GOOGLE_TOKEN_FILE', '.secrets/gmail-oauth.tokens.json'));
if (!fileExists(tokenFile)) {
  throw new Error(`Missing token file at ${tokenFile}. Run the connect script first.`);
}

const tokenData = readJson(tokenFile);
const clientId = getEnvValue('GOOGLE_CLIENT_ID');
const clientSecret = getEnvValue('GOOGLE_CLIENT_SECRET');

let accessToken = tokenData.access_token;
let refreshToken = tokenData.refresh_token;

if (!accessToken && !refreshToken) {
  throw new Error('Token file does not contain an access token or refresh token.');
}

if (tokenData.expiry_date && Date.now() >= Number(tokenData.expiry_date) - 60_000) {
  if (!refreshToken) {
    throw new Error('Access token expired and no refresh token is available.');
  }

  const refreshed = await refreshGoogleAccessToken({
    clientId,
    clientSecret,
    refreshToken
  });

  accessToken = refreshed.access_token;
  tokenData.access_token = refreshed.access_token;

  if (refreshed.refresh_token) {
    refreshToken = refreshed.refresh_token;
    tokenData.refresh_token = refreshed.refresh_token;
  }

  tokenData.expiry_date = Date.now() + Number(refreshed.expires_in || 0) * 1000;
  writeJson(tokenFile, tokenData);
}

const vars = args.varsFile ? readJson(args.varsFile) : {};
const textTemplate = args.textFile ? readFileSync(args.textFile, 'utf8') : args.text;
const htmlTemplate = args.htmlFile ? readFileSync(args.htmlFile, 'utf8') : args.html;
const subject = renderTemplate(args.subject, vars);
const text = renderTemplate(textTemplate, vars);
const html = htmlTemplate ? renderTemplate(htmlTemplate, vars) : '';
const fromName = renderTemplate(args.fromName, vars).trim();
const replyTo = renderTemplate(args.replyTo, vars).trim();

const profile = await fetchGmailProfile(accessToken);
const from = fromName ? `${fromName} <${profile.emailAddress}>` : profile.emailAddress;
const rawMessage = buildMimeMessage({
  from,
  to: args.to,
  subject,
  text,
  html: html || undefined,
  replyTo: replyTo || undefined
});

if (args.dryRun) {
  console.log(rawMessage);
  process.exit(0);
}

const result = await sendGmailMessage({
  accessToken,
  rawMessage
});

console.log(JSON.stringify(result, null, 2));
