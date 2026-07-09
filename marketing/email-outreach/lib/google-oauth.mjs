import crypto from 'node:crypto';

export function createPkcePair() {
  const verifier = crypto.randomBytes(32).toString('base64url');
  const challenge = crypto
    .createHash('sha256')
    .update(verifier)
    .digest('base64url');

  return { verifier, challenge };
}

export function buildGoogleAuthUrl({
  clientId,
  redirectUri,
  scopes,
  codeChallenge
}) {
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', redirectUri);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', scopes.join(' '));
  url.searchParams.set('access_type', 'offline');
  url.searchParams.set('prompt', 'consent');
  url.searchParams.set('include_granted_scopes', 'true');
  url.searchParams.set('code_challenge', codeChallenge);
  url.searchParams.set('code_challenge_method', 'S256');
  return url.toString();
}

async function postJson(url, body) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(body)
  });

  const payload = await response.json();
  if (!response.ok) {
    const message = payload?.error_description || payload?.error || response.statusText;
    throw new Error(`${url} failed: ${message}`);
  }

  return payload;
}

export async function exchangeGoogleCode({
  clientId,
  clientSecret,
  code,
  redirectUri,
  codeVerifier
}) {
  return postJson('https://oauth2.googleapis.com/token', {
    client_id: clientId,
    client_secret: clientSecret,
    code,
    code_verifier: codeVerifier,
    grant_type: 'authorization_code',
    redirect_uri: redirectUri
  });
}

export async function refreshGoogleAccessToken({
  clientId,
  clientSecret,
  refreshToken
}) {
  return postJson('https://oauth2.googleapis.com/token', {
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token'
  });
}

