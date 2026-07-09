# GSuite Email Send

Minimal terminal tooling for sending email from a Google Workspace or Gmail account.

## Files

- `scripts/connect-gsuite.mjs` - one-time OAuth login and token capture
- `scripts/send-email.mjs` - send email from the connected account
- `lib/` - local helpers for OAuth, token storage, and Gmail API calls

## Setup

1. Copy `marketing/email-outreach/env.example` to `marketing/email-outreach/.env`
2. Fill in `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`
3. Enable the Gmail API in Google Cloud
4. Add this redirect URI to the OAuth client:
   - `http://localhost:8787/oauth2/callback`

## Connect

```bash
npm run connect --prefix marketing/email-outreach
```

That opens an OAuth URL in the terminal. Sign in with the GSuite account you want to send from, approve access, and the refresh token will be saved locally.

## Send

```bash
npm run send --prefix marketing/email-outreach -- \
  --to recipient@example.com \
  --subject "Hello" \
  --text "Plain text body"
```

Optional flags:

- `--html-file path`
- `--text-file path`
- `--vars-file path`
- `--reply-to someone@example.com`
- `--from-name "Display Name"`
- `--dry-run`

## Notes

- The send script uses the Gmail API directly.
- If you need Workspace domain-wide delegation instead of OAuth consent, I can add that later.
