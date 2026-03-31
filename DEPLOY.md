# Git / Vercel deployment notes

## 1. Initialize git if needed

```bash
git init
git add .
git commit -m "Initial premium Minecraft hosting landing page"
```

## 2. Push to GitHub / GitLab / Bitbucket

Create a repo, then:

```bash
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## 3. Import in Vercel

- New Project
- Import the repository
- Framework preset: Next.js
- Build command: auto-detected
- Output: auto-detected

## 4. Optional future env vars

- NEXT_PUBLIC_DISCORD_URL
- NEXT_PUBLIC_CONTACT_EMAIL
- NEXT_PUBLIC_BRAND_NAME

## 5. Recommended next steps

- add final brand name
- add real background visuals
- add Discord/contact links
- add domain
- later: Stripe, forms, analytics, social proof
