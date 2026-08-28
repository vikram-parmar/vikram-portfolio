/**
 * Build-time static content fallback.
 *
 * The site is a client-rendered SPA, so a plain `fetch` of any URL returns only
 * the empty shell — crawlers and AI assistants that don't run JavaScript see no
 * content. To fix that we inject a real, readable HTML version of the page
 * *inside* `<div id="root">`. React's `createRoot(...).render()` replaces those
 * children on mount, so JS visitors never see it; everyone else (and every text
 * extractor) gets the full content.
 *
 * Source of truth is `shared/profile.ts` — this file only formats it.
 */
import {
  identity,
  summary,
  stats,
  skills,
  experience,
  featuredProjects,
  additionalProjects,
  education,
} from "../shared/profile";

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const li = (items: string[]) =>
  `<ul>${items.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>`;

const contactLine = `<a href="mailto:${identity.email}">${esc(identity.email)}</a> &middot; ${esc(
  identity.phone,
)} &middot; <a href="${identity.linkedin}" rel="nofollow">LinkedIn</a> &middot; <a href="/resume.pdf">R&eacute;sum&eacute; (PDF)</a>`;

const style = `<style>
    .ssr-shell{max-width:768px;margin:0 auto;padding:56px 24px 80px;background:#0c0d10;color:#c7ccd3;font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,monospace;line-height:1.65;font-size:15px}
    .ssr-shell h1{font-size:1.9rem;line-height:1.15;margin:6px 0 6px;color:#edf0f3}
    .ssr-shell h2{font-size:.95rem;font-weight:700;text-transform:lowercase;letter-spacing:.05em;color:#e6a24d;margin:38px 0 12px}
    .ssr-shell h2::before{content:"$ ";color:#57b98a}
    .ssr-shell h3{font-size:.95rem;margin:20px 0 2px;color:#edf0f3}
    .ssr-shell p{margin:8px 0;color:#a7adb6}
    .ssr-shell ul{margin:8px 0;padding-left:20px}
    .ssr-shell li{margin:5px 0;color:#a7adb6}
    .ssr-shell a{color:#e6a24d}
    .ssr-shell .muted{color:#6c7684;font-size:.82rem}
    .ssr-shell hr{border:0;border-top:1px dashed #23272e;margin:30px 0}
  </style>`;

function summarySection() {
  return `<h2>summary</h2><p>${esc(summary.full)}</p>`;
}

function metricsSection() {
  return `<h2>metrics</h2><p>${stats
    .map((s) => `${esc(s.value)} ${esc(s.label.toLowerCase())}`)
    .join(" &middot; ")}</p>`;
}

function experienceSection() {
  return (
    `<h2>experience</h2>` +
    experience
      .map(
        (job) =>
          `<h3>${esc(job.role)} — ${esc(job.company)}</h3>` +
          `<p class="muted">${esc(job.period)} &middot; ${esc(job.location)}</p>` +
          li(job.highlights),
      )
      .join("")
  );
}

function workSection() {
  return (
    `<h2>selected work</h2>` +
    featuredProjects
      .map(
        (p) =>
          `<h3>${esc(p.title)} — ${esc(p.subtitle)}</h3>` +
          `<p class="muted">${esc(p.kicker)}</p>` +
          `<p>${esc(p.summary)}</p>` +
          li(p.points),
      )
      .join("") +
    `<h2>also shipped</h2><ul>` +
    additionalProjects
      .map(
        (p) =>
          `<li><strong>${esc(p.title)}</strong> (${esc(p.tag)}) — ${esc(
            p.description,
          )} <span class="muted">[${esc(p.stack)}]</span></li>`,
      )
      .join("") +
    `</ul>`
  );
}

function stackSection() {
  return (
    `<h2>stack</h2>` +
    Object.entries(skills)
      .map(
        ([cat, items]) =>
          `<p><strong>${esc(cat)}:</strong> ${esc(items.join(" · "))}</p>`,
      )
      .join("")
  );
}

function educationSection() {
  return `<h2>education</h2><p>${esc(education.degree)}, ${esc(
    education.institution,
  )} (${esc(education.year)})</p>`;
}

function shell(inner: string, prompt: string) {
  return (
    `<div class="ssr-shell">${style}` +
    `<p class="muted">vikram@portfolio:~$ ${prompt}</p>` +
    `<h1>${esc(identity.name)}</h1>` +
    `<p>${esc(identity.title)} — ${esc(identity.location)} &middot; ${esc(
      identity.availability,
    )}</p>` +
    `<p>${contactLine}</p>` +
    inner +
    `<hr><p class="muted">Text fallback of a JavaScript-rendered site. Enable JavaScript for the interactive version.</p>` +
    `</div>`
  );
}

const SITE = "https://vikramparmar.me";

export const fallbackPages = {
  home: {
    outFile: "index.html",
    title: "Vikram Parmar — Senior Backend Developer",
    description:
      "Vikram Parmar is a senior backend developer with 4.5+ years building and scaling Laravel/PHP production systems serving 50k+ users and handling 1M+ requests.",
    canonical: `${SITE}/`,
    html: shell(
      summarySection() +
        metricsSection() +
        experienceSection() +
        workSection() +
        stackSection() +
        educationSection(),
      "whoami",
    ),
  },
  resume: {
    outFile: "resume.html",
    title: "Résumé — Vikram Parmar, Senior Backend Developer",
    description:
      "Résumé of Vikram Parmar, senior backend developer: 4.5+ years with Laravel/PHP, REST API design, multi-tenant architecture, Redis, queues and database optimization. Experience at Vivansh Infotech and eSparkBiz.",
    canonical: `${SITE}/resume`,
    html: shell(
      summarySection() +
        stackSection() +
        experienceSection() +
        educationSection() +
        workSection(),
      "cat resume.md",
    ),
  },
} as const;

export const ROOT_PLACEHOLDER = '<div id="root"></div>';
export const rootWith = (html: string) => `<div id="root">${html}</div>`;
