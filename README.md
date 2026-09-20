# Lions CT Scan & Diagnostic Centre — Karimnagar

Static website for the Lions CT Scan & Diagnostic Centre, a community service project of
Lions Clubs International District 320G, at the Indian Red Cross Bhavan, Ashok Nagar, Karimnagar.

Built as plain HTML/CSS/JS. No build step, no dependencies, no framework.

**Live:** https://lions-diagnostics-karimnagar.vercel.app
(Vercel project `rutha/lions-diagnostics-karimnagar`, already linked via `.vercel/`.)

**Repository:** https://github.com/krishnagalipelli/lions-diagnostics-karimnagar — **private**.

Keep it private unless the trust decides otherwise: it holds `CONTENT-TODO.md`
(internal notes, unconfirmed names, an open question about photo consent) and
photographs of identifiable students. To publish it anyway:

```bash
gh repo edit krishnagalipelli/lions-diagnostics-karimnagar --visibility public
```

Note that `git push` does **not** deploy. Pushing and deploying are separate
steps unless the repo is connected to Vercel (Vercel dashboard → the project →
Settings → Git), after which every push to `main` deploys automatically.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — what the centre is, sample charges, photos, how it works |
| `about.html` | About the centre, its principles, Lions Clubs / District 320G |
| `services.html` | CT scan department and pathology laboratory, preparation notes |
| `pricing.html` | All 69 charges, with live search and category filters |
| `camps.html` | The SHAKTHI girls' screening programme, camp report and photos, camps-held record |
| `contact.html` | Address, phone numbers, WhatsApp, Google Map, emergency notice |
| `privacy.html` | Privacy policy (incl. WhatsApp handling) — **required by Meta** |
| `terms.html` | Terms of service |
| `404.html` | Not-found page (served automatically by Vercel) |

Shared assets live in `assets/` — `css/style.css`, `js/main.js`, and the four images.

## Local preview

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173

## Deploying to Vercel

The project is already linked, so a redeploy is one command:

```bash
npx vercel deploy --prod
```

`.vercelignore` keeps internal files off the public site — `README.md`,
`CONTENT-TODO.md`, `.claude/` and `.env*.local`. **Anything added to this
directory is published unless it is listed there.** After any deploy, confirm
nothing internal leaked:

```bash
for u in /CONTENT-TODO.md /README.md /.env.local /vercel.json; do printf "%-24s " "$u"; curl -s -o /dev/null -w "%{http_code}\n" "https://lions-diagnostics-karimnagar.vercel.app$u"; done
```

All four must return 404.

## Changing the domain

The canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt` currently point at
`https://lions-diagnostics-karimnagar.vercel.app`. Once the real domain is known, replace it
everywhere in one command:

```bash
grep -rl 'lions-diagnostics-karimnagar.vercel.app' . --exclude-dir=.git | xargs sed -i '' 's|https://lions-diagnostics-karimnagar.vercel.app|https://YOUR-DOMAIN-HERE|g'
```

## Editing content

Everything is in plain HTML — open the file and edit the text.

- **Changing a price:** edit `pricing.html` (the full table) and `index.html` (the sample
  cards near the top and the short table in the middle of the page). Keep both in step.
- **Adding a test:** copy an existing `<tr>` row in `pricing.html`, change the name and
  amount, and update the `data-name` attribute — that attribute is what the search box
  matches against, so include common alternative names and misspellings there.
  Also bump the count in that table's `<span class="count">`.
- **Header, footer and nav** are duplicated in each file. If you change one, change all of them.

## Before going live

See `CONTENT-TODO.md`. Several real-world details still need confirming with the trust,
and a few of them materially affect the WhatsApp Business verification review.
