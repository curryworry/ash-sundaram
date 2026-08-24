# Migration Plan: WordPress → Astro + Sveltia on Cloudflare Pages

**Goal:** Move my personal blog (ashsundaram.com) off SiteGround WordPress to a free
static Astro site hosted on Cloudflare Pages, with Sveltia CMS providing a
WordPress-like editing experience. End state: I write posts in a rich editor at
ashsundaram.com/admin, and posts publish automatically.

**Who does what:** Claude Code handles all file, code, and terminal work. I handle
the steps that require logging into my accounts or moving money/domains — these are
marked **[ME]** below. Pause and tell me clearly when you hit one.

---

## Step 1 — Scaffold the Astro blog
- Confirm Node is installed (install/guide me if not).
- Create a new Astro blog from the blog template:
  `npm create astro@latest -- --template blog`
- Get it previewing locally (`npm run dev`, localhost:4321) so we know it works
  before touching anything else.

## Step 2 — Import my WordPress content
- My exported WordPress XML is in this folder (I downloaded it from
  wp-admin → Tools → Export). If it's missing, stop and remind me to add it.
- Convert the posts to Markdown (e.g. `wordpress-export-to-markdown`).
- Place the resulting `.md` files in `src/content/blog/`.
- Put any images in `public/`. Fix up image paths in the posts if needed.
- Verify the imported post(s) render correctly in the local preview.

## Step 3 — Set up the Git repo
- Initialize git, sensible `.gitignore`, commit the project.
- **[ME]** I'll create an empty GitHub repo and give you the URL.
- Push the project to that repo. Keep it public (free-tier friendly).

## Step 4 — Deploy to Cloudflare Pages
- **[ME]** I'll sign up at Cloudflare (free, no card) and connect my GitHub repo
  via Workers & Pages → Create → Pages.
- Cloudflare should auto-detect Astro (build: `npm run build`, output: `dist`).
  Help me confirm those settings are right.
- **[ME]** I deploy; site goes live at a `*.pages.dev` URL. Confirm it looks right.

## Step 5 — Point my domain at the new site
- **[ME]** In Cloudflare Pages → Custom domains, I add ashsundaram.com and follow
  the DNS instructions.
- **[ME] IMPORTANT:** Before I cancel SiteGround, check whether my domain is
  registered *through* SiteGround. If it is, transfer it out first (Cloudflare
  Registrar sells at cost) or I risk losing the domain.
- Once DNS propagates and HTTPS is live, I can cancel SiteGround.

## Step 6 — Add Sveltia CMS (the WordPress-like editor)
- Create `public/admin/index.html` (loads Sveltia CMS).
- Create `public/admin/config.yml` pointing at my repo, branch, and the
  `src/content/blog/` collection. Match the fields to the Astro blog template's
  frontmatter (title, date, description, etc.).
- Use the **GitHub Personal Access Token** auth method (I'm the sole user — this
  avoids setting up an OAuth proxy).
- Commit and deploy.
- **[ME]** I generate a GitHub PAT and log into ashsundaram.com/admin with it.
- Test: create a draft post in the editor, publish, confirm it commits to the repo,
  Cloudflare rebuilds, and the post goes live.
- Note for later: PATs expire (default ~90 days) — I'll regenerate when needed.

---

## Notes
- Do NOT ask me for passwords, tokens, or card details, and don't enter them
  yourself — hand those steps to me.
- The only ongoing cost after this is the domain registration (~$10–15/yr).
- If a build breaks, fix it and re-run before moving on.
