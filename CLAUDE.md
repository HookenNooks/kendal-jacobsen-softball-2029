# Kendal Jacobsen Softball — Recruiting Page (Project Brief)

This file captures the planning discussion for this build. Read it before making changes.

## Purpose

A clean, fast, mobile-friendly recruiting page for Kendal (class of 2029, Fireballs 16U - Manley fastpitch). It is the **one link she controls**: the link at the bottom of every email she sends to college coaches and the target of a QR code at tournaments.

It is **not** a replacement for recruiting networks. It supports her own outreach and links out to any platform profiles she has.

## Background and reasoning

- **The team does not use a recruiting platform.** Recruiting setup is each family's job, so there's no shared team page and every family figures it out alone.
- **The big platforms are networks coaches already search.** A homemade site can't compete with that for discovery, so it shouldn't try.
  - **FieldLevel:** free, but athletes must be invited by their current club coach to be searchable. Not practical without the coach driving it.
  - **SportsRecruits:** free athlete profiles; powers coach evaluation at Alliance events.
  - **NCSA:** paid service; an official recruiting partner of Triple Crown Sports.
  - **Hudl:** mainly video hosting and editing.
  - **AthletesGoLive:** Triple Crown's live scoring and streaming platform; compiles stats and helps college coaches plan which games to watch.
- **The gap this fills:** after a coach notices her, there needs to be a quick place to go next. College softball coaches want to hear from the player, so the page backs up *her* emails.
- **Recruiting rules (NCAA Division I softball):** coaches can't have recruiting communication with a player or her family before **September 1 of her junior year**. Rules restrict colleges, not players; she can email coaches at any time. Before that date, the page is something coaches can look at quietly; after, it supports follow-up conversations.

## Scope

**Focus on Kendal first, but keep it flexible for the team.**

### Version 1 (her page)

1. Highlight video at the top (coaches decide in seconds)
2. Basics: grad year, positions, bats/throws, height, high school, club team, jersey number
3. Academics: GPA, test scores if available
4. Key stats (entered by hand from GameChanger for now)
5. Upcoming tournament schedule, with the Colorado Sparkler featured
6. Contact: her email and a parent email only
7. Links to other recruiting profiles (if/when set up)

### Later (do not build yet)

- Team page per tournament: roster with numbers, grad years, positions, links to each player page, game schedule, printable with a QR code
- A form families fill out instead of editing data files
- Automatic stat import
- A short family checklist (highlight reel, intro email to coaches, when contact rules open)

## Architecture

- **Separate data from design.** All of Kendal's information lives in **one data file** (e.g. `players/kendal.json` or `.yaml`). The page template reads from it.
- Adding a teammate later = add one data file using the same template.
- A team page later = a list of player data files.
- Design the page once. No player-specific info hardcoded in HTML.
- Static site only. No server code, no database, no login.
- Must load fast and look good on a phone (coaches open it from email or a QR code at the field).

## Hosting and cost

- **No-cost setup.** Free and open-source tools only.
- Host on a **free static host** (GitHub Pages, Cloudflare Pages, or Netlify).
- **Do not host on the home server (bearsserver).** Opening the home network to public traffic isn't worth the risk.
- Optional: custom domain (~$12/year) for a more polished link in coach emails.

## Privacy rules (she is a minor)

- Contact by email only: no phone numbers.
- No home address, no school class schedule, nothing that reveals where she is day-to-day.
- Tournament schedule is fine (it's public), but list event names, dates, and locations at the city or complex level.

## Timeline

- **Winter 2026–27:** build Kendal's page and use it as the test.
- **Spring 2027:** turn it into a reusable template for teammates if there's interest.
- **Before late June 2027:** have her page (and a team page, if the coach is on board) ready for the **Triple Crown Colorado Sparkler, Denver metro, June 27 – July 4, 2027 (Open division)**. This is a major recruiting event with hundreds of college coaches attending.

## Content to gather (this is most of the work)

- 2–3 best video clips (or a short highlight reel)
- Grad year, positions, bats/throws, height
- Current stats
- GPA (and test scores, if any)
- A good action photo
- Upcoming tournament schedule

## Open questions

- ~~**Overhaul or redo?**~~ Decided 2026-11-01: start fresh in this repo (it held only a README). Built with Eleventy; see README.
- **Coach buy-in:** would the head coach support a team page and encourage families to fill in player pages? If not, the project stays focused on Kendal's page.

## Related project

**Tournament Copilot** (separate project): a tournament-day app on the home server that shows game times and calculates "leave by" times with traffic. Both projects could share the same tournament schedule data later.

## Dev

- Eleventy 3 static site. Player data: `players/<slug>.yaml` → page at `/<slug>/`. Loader: `src/_data/players.js`; template: `src/player.njk`; styles: `src/_includes/style.css` (inlined).
- Preview: `npm start` (http://localhost:8080, shows drafts). Production build: `npm run build` (published players only).
- Deploy: push to `main`; `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.
- YAML is read with the FAILSAFE schema, so every value is text ("4.0" stays "4.0"); `true`/`false` are compared as strings in the loader.

## Sessions

Keep chat context small: a new session reads only `docs/session/NEXT.md`, and opens `docs/session/HANDOFF.md` only when it needs history.
- **"close session"**: overwrite `NEXT.md` (current state, next steps, open questions; under ~40 lines). Add a dated entry at the top of `HANDOFF.md` (what got done, decisions, gotchas; 3 to 8 bullets). Ask before committing. Then print the Open Session command in a code block:
  `Open session: read docs/session/NEXT.md and pick up where we left off.`
- **"open session"**: read `NEXT.md`, give a short summary of where things stand and the next step, then wait for a go-ahead.

## Working agreement for Claude

- Propose a plan and wait for approval before large changes.
- Keep it simple and maintainable: updating after a tournament should take minutes, not an hour. A stale profile looks worse than none.
- Explain choices in plain language.
