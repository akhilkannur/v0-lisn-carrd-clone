import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

function ensureParentDir(filePath) {
  mkdirSync(dirname(filePath), { recursive: true });
}

export function readJson(filePath) {
  return JSON.parse(readFileSync(resolve(filePath), 'utf8'));
}

export function writeJson(filePath, value) {
  const absolutePath = resolve(filePath);
  ensureParentDir(absolutePath);
  writeFileSync(absolutePath, `${JSON.stringify(value, null, 2)}\n`);
}

export function fileExists(filePath) {
  return existsSync(resolve(filePath));
}

export function buildMimeMessage({ from, to, subject, text, html, replyTo }) {
  const boundary = `outreach_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const lines = [];

  lines.push(`To: ${to}`);
  lines.push(`Subject: ${subject}`);
  lines.push('MIME-Version: 1.0');

  if (from) {
    lines.push(`From: ${from}`);
  }

  if (replyTo) {
    lines.push(`Reply-To: ${replyTo}`);
  }

  if (html) {
    lines.push(`Content-Type: multipart/alternative; boundary="${boundary}"`);
    lines.push('');
    lines.push(`--${boundary}`);
    lines.push('Content-Type: text/plain; charset="UTF-8"');
    lines.push('');
    lines.push(text || '');
    lines.push('');
    lines.push(`--${boundary}`);
    lines.push('Content-Type: text/html; charset="UTF-8"');
    lines.push('');
    lines.push(html);
    lines.push('');
    lines.push(`--${boundary}--`);
  } else {
    lines.push('Content-Type: text/plain; charset="UTF-8"');
    lines.push('');
    lines.push(text || '');
  }

  return lines.join('\r\n');
}

export function renderTemplate(template, vars = {}) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    const value = vars[key];
    return value === undefined || value === null ? '' : String(value);
  });
}

export function encodeRawMessage(rawMessage) {
  return Buffer.from(rawMessage).toString('base64url');
}

export async function fetchGmailProfile(accessToken) {
  const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const payload = await response.json();
  if (!response.ok) {
    const message = payload?.error?.message || response.statusText;
    throw new Error(`Gmail profile lookup failed: ${message}`);
  }

  return payload;
}

export async function sendGmailMessage({ accessToken, rawMessage }) {
  const response = await fetch(
    'https://gmail.googleapis.com/gmail/v1/users/me/messages/send',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ raw: encodeRawMessage(rawMessage) })
    }
  );

  const payload = await response.json();
  if (!response.ok) {
    const message = payload?.error?.message || response.statusText;
    throw new Error(`Gmail send failed: ${message}`);
  }

  return payload;
}
