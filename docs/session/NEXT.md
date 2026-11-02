# Next session

Updated 2026-11-01.

## Where things stand
- Phases 0 to 3 built, not yet committed or deployed: Eleventy 3 site, `players/kendal.yaml` (real facts only, rest blank), `players/sample.yaml` (made-up values, design preview), template, styles, GitHub Pages workflow.
- Both players are `published: false`, so a live build shows only "Coming soon". `npm start` previews drafts at http://localhost:8080/kendal/ and /sample/.
- Search indexing is on for Kendal (`searchable: true`); Erik was neutral, and her softball Instagram is already public.

## Next steps
1. Commit, push, then Erik sets GitHub → Settings → Pages → Source: **GitHub Actions**. Check that the deploy runs and "Coming soon" loads at https://hookennooks.github.io/kendal-jacobsen-softball-2029/.
2. Phase 4 (Erik): fill in `kendal.yaml`: positions, bats/throws, height, high school, jersey, GPA, stats from GameChanger, emails, Instagram link, YouTube highlight link, action photo. Add other 2026–27 tournaments (Vegas Jan 15–18, 2027 per Tournament Copilot?). Then `published: true`.
3. Phase 5: QR code for the page link, link-preview check (photo shows when texted), print check, speed check.

## Open questions
- Custom domain (~$12/yr)? If yes: update `site.origin` in `src/_data/site.js` and drop `--pathprefix` in the workflow.
- Coach buy-in for a team page (spring 2027).
