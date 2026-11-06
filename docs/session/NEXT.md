# Next session

Updated 2026-11-01.

## Where things stand
- Kendal's page is **live**: https://hookennooks.github.io/kendal-jacobsen-softball-2029/kendal/ (main address redirects there). Commit d250e8c.
- Content is complete except GPA (Erik chose to leave it blank for now) and test scores (none yet).
- Design: "athletic poster" (full-bleed photo hero, stat spotlight, black/gold). Erik likes it.
- Video is a single clip (a double), unlisted on her YouTube channel; description already links her page.
- She has SportsRecruits, NCSA, FieldLevel, GameChanger, and Instagram profiles (all linked).

## Next steps
1. **QR code** for her page link, printable for tournaments (offered; ~5 min).
2. **Platform setup pass** (to-do): Claude writes bio/profile text for SportsRecruits, NCSA, FieldLevel; each bio links her page ("current stats, video and schedule"). Optionally try Claude in Chrome on one site (fill fields, Erik reviews before saving).
3. Print check and speed check.
4. Before Vegas (Jan 15, 2027): confirm everything is current.

## Later
- Full highlight reel (infield defense first, then hitting, 2–3 min, no music) to replace the single clip.
- Update stats/schedule after spring and summer seasons: Erik sends GameChanger screenshots or event links; Claude edits YAML, commits, pushes.
- GPA / test scores when Erik decides.

## Update routine (agreed)
Her page is the source of truth. Platforms get stable basics + video link + her page link, updated a few times a year with copy-paste text Claude prepares. GameChanger updates itself. No tool can push to all platforms (no public APIs).

## Open questions
- Custom domain (~$12/yr)? If yes: update `site.origin` in `src/_data/site.js` and drop `--pathprefix` in the workflow.
- Coach buy-in for a team page (spring 2027).
