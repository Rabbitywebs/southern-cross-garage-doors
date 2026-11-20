# Southern Cross Garage Doors: website starter

A fast, mobile-first website built with plain HTML, CSS and JavaScript. There's nothing to install and no build step.

```
southern-cross-garage-doors/
├── index.html                                   ← Homepage (all sections)
├── services/garage-door-spring-repair-perth.html ← Service page TEMPLATE
├── areas/garage-door-repairs-joondalup.html      ← Suburb page TEMPLATE
├── css/styles.css                                ← All design (colours, fonts, layout)
├── js/main.js                                    ← Menu, tabs, animations, form
└── images/                                       ← Put your photos here later
```

---

## Step 1: Install the tools (once)

1. **VS Code**: https://code.visualstudio.com
2. **Git**: https://git-scm.com/downloads (on Mac, opening Terminal and typing `git` offers to install it)
3. **A GitHub account**: https://github.com/signup
4. In VS Code, open **Extensions** (the squares icon on the left), search **Live Server** (by Ritwick Dey) and click Install.

## Step 2: Open the project

1. Unzip `southern-cross-garage-doors.zip` somewhere easy, e.g. `Documents/`.
2. In VS Code: **File → Open Folder…** → choose the `southern-cross-garage-doors` folder.

## Step 3: Preview it live while you edit

1. In the file list, **right-click `index.html` → "Open with Live Server"**.
2. Your browser opens the site. Every time you **save** a file (Ctrl+S / Cmd+S), the page refreshes by itself.
3. **To see the mobile version on your computer:** in Chrome press `F12`, then the phone/tablet icon (or `Ctrl+Shift+M` / `Cmd+Shift+M`). Pick "iPhone 14" or drag the width.
4. **To see it on your real phone:** both devices on the same Wi-Fi. Live Server shows an address like `http://192.168.x.x:5500`. Type it into your phone's browser.

## Step 4: Make your first changes

| What you want to change | Where |
|---|---|
| Brand colours | `css/styles.css`, top block `:root` (`--navy`, `--gold`…) |
| Font | `--font` in `:root` + the Google Fonts `<link>` in each page |
| Phone number | Search everywhere (Ctrl+Shift+F) for `0000 0000` **and** `+61800000000` |
| Prices | Search for `$XXX` and `$X,XXX` |
| Anything still to finish | Search for `TODO` |
| Gold circle text | `index.html` → `hero-badge` |
| Problem tabs content | `index.html` → section "3. WHAT'S WRONG WITH YOUR DOOR?" |

Tip: **Ctrl+Shift+F / Cmd+Shift+F** searches every file at once, and you can replace in all files from the same panel.

## Step 5: Put it on GitHub (from inside VS Code)

1. Click the **Source Control** icon on the left (the branching icon).
2. Click **"Publish to GitHub"** (or "Initialize Repository" first, then publish).
3. Sign in to GitHub when asked and allow VS Code.
4. Choose **"Publish to GitHub public repository"** and name it `southern-cross-garage-doors`.
   *(Free GitHub accounts need a public repo for GitHub Pages.)*
5. If it asks which files to include, select all and press OK.

> If VS Code first asks you for a "commit message", type `first version` and press ✓ Commit.

## Step 6: Turn on the free preview link (GitHub Pages)

1. Go to your repo on github.com → **Settings** → **Pages** (left menu).
2. Under **Build and deployment → Source** choose **Deploy from a branch**.
3. Branch: **main**, folder **/ (root)** → **Save**.
4. Wait 1–2 minutes and refresh. Your link appears at the top:
   `https://YOUR-USERNAME.github.io/southern-cross-garage-doors/`
5. Open it on your phone and send it to anyone for feedback.

## Step 7: Your everyday editing routine

1. Edit in VS Code and check the result with Live Server.
2. Go to **Source Control**, type a short note (e.g. `updated prices`) and click **✓ Commit**.
3. Click **Sync Changes** (or the ↑ arrow).
4. About a minute later the GitHub Pages link shows the update.

## Step 8: Make the quote form send you emails

GitHub Pages can't send emails by itself. Use **Formspree** (free tier):

1. Sign up at https://formspree.io and create a form. You get a URL like `https://formspree.io/f/abcdwxyz`.
2. In `index.html`, find `<form class="quote-form" action="#"` and replace `#` with your Formspree URL.
3. Commit and sync, then send a test enquiry.

## Step 9: Adding photos (later, once the brand is ready)

1. Save photos into `images/` with descriptive names, e.g. `broken-spring-joondalup.jpg` (this helps SEO).
2. Shrink them first at https://squoosh.app (WebP, about 1600px wide for the hero, 1000px for cards, under 200 KB each).
3. Inside any grey `.ph` box, add:
   ```html
   <img src="images/broken-spring-joondalup.webp" alt="Broken torsion spring on a sectional garage door in Joondalup" loading="lazy">
   ```
   and delete the placeholder text. (Hero image: leave out `loading="lazy"`.)
4. Use **your own photos** from real jobs wherever possible. Google and customers both trust them more than stock photos.

## Step 10: Adding more pages

- **New service:** copy `services/garage-door-spring-repair-perth.html` → e.g. `garage-door-cable-repair-perth.html`. Rewrite the title, description, H1 and all the text.
- **New suburb:** copy `areas/garage-door-repairs-joondalup.html` → e.g. `garage-door-repairs-rockingham.html`. Write genuinely different content (nearby suburbs, real jobs, local reviews). Then on the homepage, turn that suburb's `<span>` into a link:
  `<li><a href="areas/garage-door-repairs-rockingham.html">Rockingham</a></li>`
- Suggested order: spring → cable → opener/motor → servicing → new sectional → new roller, then 2 suburbs a month, starting closest to your base.

## Launch checklist (when it's ready for real customers)

- [ ] Replace all `XXX`, `0000` and `TODO` items (phone, prices, warranty, ABN, email, address)
- [ ] **Delete the `<meta name="robots" content="noindex, nofollow">` line in every page**
- [ ] Buy the domain (e.g. `southerncrossgaragedoors.com.au`) → GitHub **Settings → Pages → Custom domain**
- [ ] Un-comment the `canonical` tag in `index.html` with the real domain
- [ ] Fill in the business details in the `application/ld+json` block (same as Google Business Profile)
- [ ] Add `sitemap.xml` and `robots.txt` (ask Claude, it takes 2 minutes)
- [ ] Google Search Console: add the site and submit the sitemap
- [ ] Google Business Profile: same name, address and phone as the website, and link to the site
- [ ] Paste your Google review link into the "Leave us a review" button
- [ ] Only show **real** reviews, and update the gold circle to your rating once you have them
