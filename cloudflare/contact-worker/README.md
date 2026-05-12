# Contact Form Worker (Cloudflare)

Receives the contact form POST and sends a notification email via Resend.
**No database** — only the email to `NOTIFY_TO` is stored.

This makes the contact form independent of Lovable / Supabase. The
Lovable project can be deleted; as long as this Worker runs on Cloudflare
and `VITE_CONTACT_WORKER_URL` is set in the GitHub Pages build, the form
keeps working.

---

## One-time setup

### 1. Install Wrangler
```bash
npm i -g wrangler
wrangler login
```

### 2. Configure
Edit `wrangler.toml` if you want to change `NOTIFY_TO`, `NOTIFY_FROM` or
`ALLOWED_ORIGIN`.

The `NOTIFY_FROM` domain must be verified in Resend
(https://resend.com/domains).

### 3. Add Resend API key as secret
```bash
cd cloudflare/contact-worker
wrangler secret put RESEND_API_KEY
# paste the key from https://resend.com/api-keys
```

### 4. Deploy
```bash
wrangler deploy
```
You will get a URL like:
```
https://fels-coach-contact.<your-subdomain>.workers.dev
```

(Optional: bind a custom route like `https://fels-coach.de/api/contact`
in the Cloudflare dashboard.)

### 5. Tell the website to use it
Add to your GitHub Actions build env / `.env.production`:
```
VITE_CONTACT_WORKER_URL=https://fels-coach-contact.<your-subdomain>.workers.dev
```
Rebuild and deploy the site. Done.

---

## Updating
```bash
cd cloudflare/contact-worker
wrangler deploy
```

## Logs
```bash
wrangler tail
```
