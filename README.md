# FALCONHOST

Landing page premium bilingue (EN / FR) pour un hébergeur Minecraft, construite avec Next.js et Tailwind, prête pour Vercel.

## Ce qui est en place

- design sombre premium et responsive
- routes i18n propres : `/en` et `/fr`
- redirection automatique depuis `/` via middleware
- switcher de langue visible
- pricing cards mises en avant
- FAQ en accordion simple
- section contact premium

## Lancer en local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Déploiement Vercel

Voir `DEPLOY.md`.

## Variables publiques recommandées

```bash
NEXT_PUBLIC_SITE_URL=https://votre-domaine-ou-url-vercel
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/falconhost
NEXT_PUBLIC_CONTACT_EMAIL=contact@falconhost.gg
NEXT_PUBLIC_BRAND_NAME=FALCONHOST
```

## Pistes de suite

- brancher le formulaire
- ajouter SEO multilingue complet
- connecter le domaine final
- ajouter analytics si utile
