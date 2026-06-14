# dengjing.io — Personal Portfolio

Personal portfolio site for Deng Jing, Technical PM based in Singapore.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion · PostHog · Vercel

---

## Local Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Fill in POSTHOG_PERSONAL_API_KEY and POSTHOG_PROJECT_ID (see below)

# 3. Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Description |
|---|---|
| `POSTHOG_PERSONAL_API_KEY` | PostHog personal API key (from posthog.com → Settings → Personal API Keys) |
| `POSTHOG_PROJECT_ID` | PostHog project ID (from the project URL: `app.posthog.com/project/{id}`) |

If these are not set, the site renders fine — project cards just won't show visitor stats.

---

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add environment variables in **Settings → Environment Variables**.
4. Deploy — Vercel detects Next.js automatically via `vercel.json`.

Build command: `pnpm build`
Install command: `pnpm install`
