# Déploiement Vercel — FALCONHOST

## Prérequis

- dépôt GitHub déjà connecté à Vercel
- branche principale : `main`
- projet Next.js détecté automatiquement

## Variables d’environnement recommandées

Ajoute ces variables dans **Vercel → Project Settings → Environment Variables** :

```bash
NEXT_PUBLIC_SITE_URL=https://votre-domaine-ou-url-vercel
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/falconhost
NEXT_PUBLIC_CONTACT_EMAIL=contact@falconhost.gg
NEXT_PUBLIC_BRAND_NAME=FALCONHOST
```

## Création du projet Vercel

1. Ouvrir Vercel
2. Cliquer sur **Add New → Project**
3. Importer le repo GitHub `aiclawbot2026-hue/Web`
4. Vérifier que le framework détecté est **Next.js**
5. Laisser les réglages de build par défaut
6. Ajouter les variables d’environnement ci-dessus
7. Déployer

## Réglages recommandés après le premier déploiement

### 1. Domaine

Dans **Settings → Domains** :
- ajouter le domaine final si tu en as un
- garder l’URL `.vercel.app` comme fallback

### 2. Production branch

Dans **Settings → Git** :
- vérifier que la branche de production est bien `main`

### 3. Fonctionnement i18n

Le site fonctionne avec :
- `/en` → anglais
- `/fr` → français
- `/` → redirection automatique selon la langue navigateur ou le cookie `falconhost_locale`

### 4. Vérifications à faire après mise en ligne

Tester :
- l’arrivée sur `/` avec navigateur FR puis EN
- le switcher `EN | FR`
- les ancres `#offers`, `#why`, `#advantage`, `#faq`, `#contact`
- l’affichage mobile
- les performances Lighthouse

## Commandes utiles en local

```bash
npm install
npm run dev
npm run build
```

## Suite recommandée

- brancher le formulaire sur Resend, Formspree ou un endpoint maison
- ajouter les métadonnées SEO complètes par langue
- connecter un vrai domaine
- ajouter analytics si besoin
