# kendal-jacobsen-softball-2029

College softball recruiting page for Kendal Jacobsen (class of 2029). Built so more players can be added later.

All of a player's information lives in one file in `players/`. The page design reads from it, and nothing about a player is written into the HTML.

## Update after a tournament

1. Edit `players/kendal.yaml`: stats, `stats_as_of`, schedule, and `updated`.
2. Commit and push to `main`. The site rebuilds and goes live in about a minute.

This works from GitHub's website too: open the file, click the pencil, edit, then click **Commit changes**.

Leave a field blank to hide it. Past tournaments drop off the page on their own.

- The first three numbers of the first stats group are shown big at the top of the page, so list the best season and stats first.
- Event logos go in `src/assets/logos/`; add `logo: file.png` to the event.
- Photos go in `src/assets/photos/`. The photo fills the top of the page, so use a tall (4:5) crop about 1080×1350, with room at the bottom for the name.
- Colors are set at the top of `src/_includes/style.css` (`--ink`, `--gold`).

## Preview on your computer

```
npm install    # first time only
npm start      # then open http://localhost:8080/kendal/
```

The preview shows drafts (`published: false`) with a yellow banner. The live site only shows players with `published: true`.

## Add a teammate

Copy `players/kendal.yaml` to `players/<firstname>.yaml`, fill it in, and set `published: true`. Their page will be at `/<firstname>/`. Photos go in `src/assets/photos/`.

## Privacy

Email contact only. No phone numbers, home address, or school schedule. Tournament locations at the city or complex level. Anything committed here stays in the public git history, even if it's deleted later.
