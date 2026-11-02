# Handoff log

Newest first. One entry per session.

## 2026-11-01
- Reviewed the repo (only a 2-line README). Decided to start fresh in the same repo and keep the GitHub remote.
- Chose Eleventy 3 + YAML data files + GitHub Pages via Actions. Rejected: page loading JSON in the browser (slower, blank link previews) and a custom Python script (more to maintain).
- Pages live at `/<slug>/` from day one, so links in emails and the QR code keep working once teammates are added. The main address redirects to `site.homePlayer`.
- Drafts (`published: false`) show only in `npm start`; the production build skips them.
- YAML is read with the FAILSAFE schema so values show exactly as typed (".412", "4.0", "07").
- Emails are assembled in the browser to keep plain addresses out of the page source. The YouTube player loads only when tapped. Past events are hidden both at build time and in the browser.
- Added the close/open session rule (same wording as tournament-copilot).
- `npm audit` flags minimatch inside Eleventy's copy tool. It only runs at build time on patterns we write, so it was left as is.
