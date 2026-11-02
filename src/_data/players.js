// Loads every players/*.yaml file into a list the page template loops over.
// The file name becomes the page address: players/kendal.yaml -> /kendal/
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const PLAYERS_DIR = "players";

// FAILSAFE keeps every value as typed text, so "4.0", ".412" and "07" show exactly as written.
function load(file) {
  const text = fs.readFileSync(path.join(PLAYERS_DIR, file), "utf8");
  return yaml.load(text, { schema: yaml.FAILSAFE_SCHEMA }) || {};
}

const isTrue = (v) => String(v).trim().toLowerCase() === "true";

// Drop blank entries so empty fields and sections hide themselves.
function compactMap(map) {
  const out = {};
  for (const [k, v] of Object.entries(map || {})) {
    if (v && String(v).trim()) out[k] = String(v).trim();
  }
  return out;
}

// Accepts a bare YouTube id or any youtube.com / youtu.be link.
function youtubeId(value) {
  if (!value) return "";
  const m = String(value).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  if (m) return m[1];
  return /^[\w-]{11}$/.test(value) ? value : "";
}

function normalize(slug, p) {
  const today = new Date().toISOString().slice(0, 10);
  const stats = {};
  for (const [group, items] of Object.entries(p.stats || {})) {
    const clean = compactMap(items);
    if (Object.keys(clean).length) stats[group] = clean;
  }
  const events = (p.schedule || [])
    .filter((e) => e && e.name && e.start)
    .map((e) => ({ ...e, end: e.end || e.start, featured: isTrue(e.featured) }))
    .filter((e) => e.end >= today)
    .sort((a, b) => a.start.localeCompare(b.start));
  const contact = compactMap(p.contact);
  const nameParts = String(p.name || "").trim().split(/\s+/);
  // The first three numbers of the first stats group are shown big at the top of the page.
  const [spotlightGroup, spotlightItems] = Object.entries(stats)[0] || [];
  const spotlight = Object.entries(spotlightItems || {}).slice(0, 3);

  return {
    ...p,
    slug,
    published: isTrue(p.published),
    searchable: p.searchable === undefined || isTrue(p.searchable),
    video: { youtube: youtubeId(p.video?.youtube), link: p.video?.link || "" },
    tests: compactMap(p.tests),
    stats,
    schedule: events,
    contact,
    mainEmail: Object.values(contact)[0] || "",
    firstName: nameParts[0],
    lastName: nameParts.slice(1).join(" "),
    spotlight,
    spotlightGroup: spotlightGroup || "",
    links: compactMap(p.links),
  };
}

export default function () {
  // `npm start` (local preview) shows drafts; the real build only includes published players.
  const showDrafts = process.env.ELEVENTY_RUN_MODE === "serve";
  return fs
    .readdirSync(PLAYERS_DIR)
    .filter((f) => /\.ya?ml$/.test(f))
    .map((f) => normalize(f.replace(/\.ya?ml$/, ""), load(f)))
    .filter((p) => p.published || showDrafts);
}
