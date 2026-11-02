import { HtmlBasePlugin } from "@11ty/eleventy";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "2027-06-27" -> { y: "2027", m: "Jun", d: 27 }
function parts(iso) {
  const [y, m, d] = String(iso).split("-");
  return { y, m: MONTHS[Number(m) - 1], d: Number(d) };
}

export default function (eleventyConfig) {
  // Adds the GitHub Pages sub-path (--pathprefix) to links, and the htmlBaseUrl filter for full addresses.
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("players/");

  // "Nov 1, 2026"
  eleventyConfig.addFilter("longDate", (iso) => {
    const p = parts(iso);
    return `${p.m} ${p.d}, ${p.y}`;
  });

  // "Jun 27 – Jul 4, 2027", "Jan 15–18, 2027", or one day
  eleventyConfig.addFilter("dateRange", (start, end) => {
    const a = parts(start);
    const b = parts(end || start);
    if (start === end || !end) return `${a.m} ${a.d}, ${a.y}`;
    if (a.y !== b.y) return `${a.m} ${a.d}, ${a.y} – ${b.m} ${b.d}, ${b.y}`;
    if (a.m !== b.m) return `${a.m} ${a.d} – ${b.m} ${b.d}, ${a.y}`;
    return `${a.m} ${a.d}–${b.d}, ${a.y}`;
  });

  // Splits an email so the page source doesn't hold a plain address for spam bots.
  eleventyConfig.addFilter("emailParts", (email) => {
    const [user, domain] = String(email).split("@");
    return { user, domain };
  });
}

export const config = {
  dir: { input: "src", output: "_site" },
  templateFormats: ["njk"],
};
