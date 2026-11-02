# Next session

Updated 2026-11-01.

## Where things stand
- Phases 0 to 3 built and pushed (31fe336): Eleventy 3 site, `players/kendal.yaml` (real facts only, rest blank), `players/sample.yaml` (made-up, design preview, never published), template, styles, GitHub Pages workflow.
- Both players are `published: false`, so the live build shows only "Coming soon". Preview drafts: `npm start` → http://localhost:8080/kendal/ and /sample/.
- GitHub Pages is live (Source: GitHub Actions): https://hookennooks.github.io/kendal-jacobsen-softball-2029/ shows "Coming soon".
- Kendal is searchable (`searchable: true`); her softball Instagram is already public.

## Next: walk through her profile (phase 4)
Erik wants to be asked questions, not edit YAML. Go through `players/kendal.yaml` in small batches (2 to 4 questions at a time), fill the answers in, and show the preview:
1. Positions (primary first), bats/throws, height, jersey number, high school (name, city, state)
2. Headline: one line on what she does well (optional)
3. GPA (weighted/unweighted), any PSAT/SAT/ACT
4. Stats from GameChanger: which season, which numbers, date pulled. Pitcher or catcher stats?
5. Her email and a parent email (email only, no phone)
6. Links: softball Instagram, any SportsRecruits/NCSA/Hudl/GameChanger profiles
7. Video: YouTube (unlisted) link, if one exists yet
8. Photo: file in `src/assets/photos/` + one-line description
9. Schedule: 2026–27 events besides the Sparkler (Vegas Jan 15–18, 2027 from Tournament Copilot? event name?)
Then set `published: true` and `updated:` to today, then commit/push with Erik's OK.

## After that (phase 5)
QR code for the page link, link-preview check (photo shows when texted), print check, speed check.

## Open questions
- Custom domain (~$12/yr)? If yes: update `site.origin` in `src/_data/site.js` and drop `--pathprefix` in the workflow.
- Coach buy-in for a team page (spring 2027).
