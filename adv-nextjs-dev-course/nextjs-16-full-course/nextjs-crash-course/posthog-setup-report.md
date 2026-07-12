# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the DevEvent Next.js App Router application. Here is a summary of every change made:

- **`instrumentation-client.ts`** (new): Initialises `posthog-js` client-side using the Next.js 15.3+ `instrumentation-client` convention. PostHog is configured with a reverse proxy (`/ingest`), EU host, exception autocapture enabled, and debug mode in development.
- **`next.config.ts`** (edited): Added `rewrites` to proxy `/ingest/*` traffic to `eu.i.posthog.com` (and static/array assets to `eu-assets.i.posthog.com`), along with `skipTrailingSlashRedirect: true`.
- **`lib/posthog-server.ts`** (new): Server-side PostHog singleton client using `posthog-node` with `flushAt: 1` and `flushInterval: 0` for short-lived Next.js route handlers.
- **`components/ExploreBtn.tsx`** (edited): Added `posthog.capture("explore_events_clicked")` inside the `onClick` handler.
- **`components/EventCard.tsx`** (edited): Converted to a client component (`"use client"`) and added `posthog.capture("event_card_clicked", {...})` with contextual properties (title, slug, location, date) on link click.
- **`.env.local`** (created/updated): Added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST`.
- **`package.json`** (edited): Added `posthog-js` and `posthog-node` — **run `npm install` to complete the SDK installation**.

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicked the "Explore Events" CTA button on the homepage. | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on a featured event card to view event details. | `components/EventCard.tsx` |

## Next steps

We've built a dashboard and three insights to monitor user behaviour, based on the events we just instrumented:

- **Dashboard**: [Analytics basics (wizard)](https://eu.posthog.com/project/221945/dashboard/812242)
- **Explore Events clicks** (line trend, last 30 days): [View insight](https://eu.posthog.com/project/221945/insights/4rCXCSmC)
- **Most clicked events by title** (bar chart with event_title breakdown): [View insight](https://eu.posthog.com/project/221945/insights/Z2IhTyQX)
- **Homepage engagement funnel** (ordered, 14-day window): [View insight](https://eu.posthog.com/project/221945/insights/TmloLVdx)

## Verify before merging

- [ ] Run a full production build (`npm run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any onboarding scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.
- [ ] Run `npm install` to install `posthog-js` and `posthog-node` (the Bash sandbox prevented the wizard from running the install command).

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
