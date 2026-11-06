# Handoff log

Newest first. One entry per session.

## 2026-11-01 (part 3)
- Filled in Kendal's profile by Q&A and published her page (d250e8c). Live and verified: assets load, og:image has the path prefix, sample stays 404.
- Split `jersey` into `club_jersey` and `hs_jersey`, each on its own row under its team (Erik rejected merging the number into the team name).
- Stats: Summer 2026 (Oregon Rebels 14U) first, Fall 2026 (Fireballs) second. Fielding left off on purpose (small sample, injury). MVP/Stayton pickup games skipped. GPA blank by choice.
- Redesigned to "athletic poster": full-bleed photo hero, outlined club number, stat spotlight (first 3 stats of the first group, computed in the loader), dark showcase/closing bands, black + gold, Barlow Condensed from Google Fonts. Colors at top of `style.css`.
- Added event `logo:` field (files in `src/assets/logos/`, shown on white tiles for dark mode). Colorado logo had its black background removed with PIL flood fill.
- Photos: crop with PIL and save without EXIF (strips metadata). Hero photo is 1080×1350 with dirt at the bottom for the name.
- Gotcha: headless Chrome won't render below ~500px wide; for phone screenshots, load the page in a 390px iframe. It also follows system dark mode; pass `--blink-settings=preferredColorScheme=1` for light.
- Gotcha: `ELEVENTY_RUN_MODE=serve` can't be forced on a plain build; to see drafts, run `eleventy --serve` on a spare port and curl it.

## 2026-11-01 (part 2)
- Committed and pushed the rebuild to main (31fe336). Pages not enabled yet, so the first deploy run is expected to fail; rerun it after enabling.
- A test build with a published player caught two bugs, both fixed before the push: the `htmlBaseUrl` filter needs `HtmlBasePlugin` added explicitly, and the home-page redirect has to be relative (`./kendal/`) because script and meta-refresh URLs don't get the path prefix.
- Gotcha: to test a live-style build, copy `sample.yaml` to a temp player with `published: true` and build with `--pathprefix=/kendal-jacobsen-softball-2029/ --output=<scratch dir>`, then delete the temp player.
- Phase 4 will be done by Q&A: Erik answers questions, Claude edits `kendal.yaml`.

## 2026-11-01
- Reviewed the repo (only a 2-line README). Decided to start fresh in the same repo and keep the GitHub remote.
- Chose Eleventy 3 + YAML data files + GitHub Pages via Actions. Rejected: page loading JSON in the browser (slower, blank link previews) and a custom Python script (more to maintain).
- Pages live at `/<slug>/` from day one, so links in emails and the QR code keep working once teammates are added. The main address redirects to `site.homePlayer`.
- Drafts (`published: false`) show only in `npm start`; the production build skips them.
- YAML is read with the FAILSAFE schema so values show exactly as typed (".412", "4.0", "07").
- Emails are assembled in the browser to keep plain addresses out of the page source. The YouTube player loads only when tapped. Past events are hidden both at build time and in the browser.
- Added the close/open session rule (same wording as tournament-copilot).
- `npm audit` flags minimatch inside Eleventy's copy tool. It only runs at build time on patterns we write, so it was left as is.
