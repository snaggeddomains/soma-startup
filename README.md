# SOMA Startup

Marketing & registration site for **SOMA Startup** — a one-day youth entrepreneurship
event for students in South Orange & Maplewood, NJ (young kids through college).

Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, Nav + Footer
  page.tsx              Landing page (composed of sections)
  register/             Student registration
  get-involved/         Mentor / judge / sponsor recruitment
  resources/            Participant toolkit (worksheet, pitch template, rubric)
components/             Reusable UI (Nav, Footer, Button, forms, …)
lib/content.ts          ⭐ Single source of truth for all event content
app/globals.css         Design tokens (colors, fonts) + base styles
```

## Editing content

**Almost everything lives in [`lib/content.ts`](lib/content.ts)** — the event date,
location, divisions, schedule, prizes, judging criteria, FAQs, the competitions in the
"Where it leads" section, and more. Edit values there to update the whole site; no need
to touch the page components.

A few things still marked as first-draft assumptions (search for `TODO`):

- **Venue** — currently "to be announced." Strong local candidates: SOPAC, Seton Hall, the public libraries.
- **Contact email** — placeholder `hello@somastartup.org`.
- **Registration fees / spots** — copy says "to be announced."

## Forms & email

The registration and "get involved" forms POST to `app/api/submit/route.ts`, which emails
each submission to `CONTACT_EMAIL` (default `hello@somastartup.com`) via
[Resend](https://resend.com).

To enable it:

1. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` (from
   [resend.com/api-keys](https://resend.com/api-keys)).
2. Verify the `somastartup.com` domain in Resend, then set `RESEND_FROM` to a verified
   address (e.g. `"SOMA Startup <hello@somastartup.com>"`). Until then the code falls back
   to `onboarding@resend.dev`, which only delivers to the Resend account owner.
3. Add the same variables in **Vercel → Settings → Environment Variables**, then redeploy.

Submissions set `replyTo` to the submitter's email, so you can reply to the notification
directly. A hidden honeypot field drops basic bot spam.

## Deploying

This is a fully static-renderable Next.js app. The simplest path is
[Vercel](https://vercel.com/new) (connect the repo, accept the defaults). Netlify,
Cloudflare Pages, or any Node host also work.
