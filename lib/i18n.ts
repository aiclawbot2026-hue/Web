export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const routeSlugs = {
  en: {
    offers: "offers",
    why: "why-us",
    support: "support",
    faq: "faq",
    contact: "contact",
  },
  fr: {
    offers: "offres",
    why: "pourquoi-nous",
    support: "accompagnement",
    faq: "faq",
    contact: "contact",
  },
} as const;

export function getLocalizedHref(locale: Locale, page: keyof typeof routeSlugs.en) {
  return `/${locale}/${routeSlugs[locale][page]}`;
}

export function getPageFromSlug(locale: Locale, slug?: string) {
  if (!slug) return "home" as const;

  const entries = Object.entries(routeSlugs[locale]) as Array<
    [keyof typeof routeSlugs.en, string]
  >;

  const match = entries.find(([, value]) => value === slug);
  return match?.[0] ?? null;
}

export const dictionary = {
  en: {
    meta: {
      title: "FALCONHOST — Premium Minecraft Hosting",
      description:
        "Premium Minecraft hosting with clean resources, daily backups, and real human support.",
    },
    brand: {
      name: "FALCONHOST",
      tag: "Minecraft Hosting",
    },
    nav: {
      home: "Home",
      offers: "Plans",
      why: "Why us",
      support: "Support",
      faq: "FAQ",
      contact: "Contact",
      primaryCta: "View plans",
      secondaryCta: "Contact us",
    },
    home: {
      title: "Premium Minecraft hosting with stable performance",
      subtitle:
        "Clean resources, daily backups, and a simple upgrade path.",
      infra:
        "High-performance infrastructure based on AMD Ryzen 9 9950X3D, near Miami, with fast NVMe storage and human support.",
      trustTitle: "Built for reliable performance",
      trustPoints: [
        "Cleanly allocated resources",
        "Infrastructure near Miami",
        "Human support",
        "Daily backups",
      ],
      offersTitle: "Simple plans, clearly structured",
      offersCta: "View all plans",
      whyTitle: "Why choose us",
      whyCta: "Learn more",
      finalTitle: "Need a cleaner hosting experience?",
      finalText: "Tell us about your server and we will help you choose the right starting point.",
      finalPrimary: "Contact us",
      finalSecondary: "View plans",
    },
    offers: {
      eyebrow: "Plans",
      pageTitle: "Plans built to stay clear and reliable",
      pageIntro:
        "Choose the level of resources that fits your server today, then scale cleanly as your needs evolve.",
      featured: "Recommended",
      processorLabel: "Processor",
      processorValue: "AMD Ryzen 9 9950X3D high frequency",
      contactCta: "Contact us",
      playerNote:
        "Recommended player counts depend on exploration, plugins, mods, and new chunk generation.",
      items: [
        {
          name: "Starter",
          price: "$12.99 / month",
          cores: "2 vCores",
          ram: "4 GB RAM",
          storage: "35 GB NVMe",
          usage: "Vanilla · Light plugins",
          players: "5 to 12 recommended players",
          fit: "Perfect for a small private server or a group of friends.",
          featured: false,
        },
        {
          name: "Community",
          price: "$19.99 / month",
          cores: "3 vCores",
          ram: "6 GB RAM",
          storage: "50 GB NVMe",
          usage: "Vanilla · Moderate plugins",
          players: "10 to 20 recommended players",
          fit: "For a small community that wants more headroom and stability.",
          featured: false,
        },
        {
          name: "Performance",
          price: "$28.99 / month",
          cores: "4 vCores",
          ram: "8 GB RAM",
          storage: "80 GB NVMe",
          usage: "Active plugins · Regular community",
          players: "15 to 30 recommended players",
          fit: "For more active servers with plugins or regular players.",
          featured: true,
        },
        {
          name: "Managed Modded",
          price: "$44.99 / month",
          cores: "6 vCores",
          ram: "12 GB RAM",
          storage: "120 GB NVMe",
          usage: "Light to moderate modded",
          players: "20 to 40 recommended players",
          fit: "For modded or more demanding projects.",
          featured: false,
        },
      ],
    },
    why: {
      pageTitle: "A premium approach for serious servers",
      intro:
        "We focus on clean infrastructure, human support, and stable long-term performance rather than competing on the lowest possible price.",
      items: [
        {
          title: "Clean resources",
          text: "We allocate resources with enough room to keep your server more consistent in real use.",
        },
        {
          title: "Human support",
          text: "When you need help, you talk to someone who understands Minecraft hosting.",
        },
        {
          title: "Daily backups",
          text: "Your server data is protected with daily backups as a standard part of the service.",
        },
        {
          title: "Simple upgrades",
          text: "As your server grows, you can move up cleanly without rebuilding everything.",
        },
        {
          title: "Serious infrastructure",
          text: "Ryzen 9 9950X3D, NVMe storage, and infrastructure placed for low latency across North America and the Caribbean.",
        },
      ],
    },
    support: {
      pageTitle: "Support that stays practical and clear",
      intro:
        "The goal is simple: help you start clean, stay stable, and evolve without unnecessary friction.",
      items: [
        {
          title: "We size the right plan",
          text: "We help you choose the right offer based on your server, your plugins, and your player count.",
        },
        {
          title: "We keep a clean base",
          text: "A clean foundation makes long-term hosting more stable, simpler to manage, and easier to trust.",
        },
        {
          title: "We help you grow",
          text: "As your community grows, we help you upgrade cleanly without disrupting the server.",
        },
      ],
    },
    faq: {
      pageTitle: "Frequently asked questions",
      items: [
        {
          q: "Why are you more expensive than a budget host?",
          a: "Because the focus is on cleaner resource allocation, daily backups, and a more reliable long-term experience.",
        },
        {
          q: "Is this suitable for modded servers?",
          a: "Yes. Managed Modded is built for more demanding projects, while the other plans fit lighter setups depending on your usage.",
        },
        {
          q: "What happens if my server grows?",
          a: "You can move to a higher plan cleanly as your needs evolve.",
        },
        {
          q: "How do I get help quickly?",
          a: "Discord is the fastest way. You can also contact us by email through the contact page.",
        },
      ],
    },
    contact: {
      pageTitle: "Talk to us about your server",
      intro:
        "Discord, email, or the contact form — choose the easiest way to tell us about your project.",
      cards: [
        { label: "Discord", value: "discord.gg/falconhost" },
        { label: "Email", value: "contact@falconhost.gg" },
        { label: "Response", value: "Short, clear, human replies" },
      ],
      formTitle: "Tell us about your project",
      fields: {
        name: "Name",
        email: "Email",
        serverType: "Server type",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        serverType: "Survival, minigames, modded...",
        message: "Tell us about your server and what you need.",
      },
      submit: "Send request",
    },
    footer: {
      tagline: "Premium Minecraft hosting with clean resources and human support.",
      summary: "Ryzen 9 9950X3D · NVMe · Daily backups · Human support",
      contact: "Discord: discord.gg/falconhost · contact@falconhost.gg",
      cta: "Contact us",
    },
  },
  fr: {
    meta: {
      title: "FALCONHOST — Hébergement Minecraft premium",
      description:
        "Un hébergement Minecraft premium avec des ressources propres, des sauvegardes quotidiennes et un vrai support humain.",
    },
    brand: {
      name: "FALCONHOST",
      tag: "Minecraft Hosting",
    },
    nav: {
      home: "Accueil",
      offers: "Offres",
      why: "Pourquoi nous",
      support: "Accompagnement",
      faq: "FAQ",
      contact: "Contact",
      primaryCta: "Voir les offres",
      secondaryCta: "Nous contacter",
    },
    home: {
      title: "Hébergement Minecraft premium avec des performances stables",
      subtitle:
        "Des ressources propres, des sauvegardes quotidiennes et une montée en gamme simple.",
      infra:
        "Infrastructure haute performance basée sur AMD Ryzen 9 9950X3D, proche de Miami, avec stockage NVMe rapide et support humain.",
      trustTitle: "Un cadre fiable pour votre serveur",
      trustPoints: [
        "Ressources allouées proprement",
        "Infrastructure proche de Miami",
        "Support humain",
        "Sauvegardes quotidiennes",
      ],
      offersTitle: "Un aperçu clair de nos offres",
      offersCta: "Voir toutes les offres",
      whyTitle: "Pourquoi nous choisir",
      whyCta: "Découvrir",
      finalTitle: "Besoin d’un hosting plus propre et plus stable ?",
      finalText: "Parlez-nous de votre serveur et nous vous aidons à choisir la bonne base.",
      finalPrimary: "Nous contacter",
      finalSecondary: "Voir les offres",
    },
    offers: {
      eyebrow: "Offres",
      pageTitle: "Des offres plus lisibles, pensées pour durer",
      pageIntro:
        "Choisissez le niveau de ressources adapté à votre serveur aujourd’hui, puis évoluez proprement quand vos besoins augmentent.",
      featured: "Offre recommandée",
      processorLabel: "Processeur",
      processorValue: "AMD Ryzen 9 9950X3D haute fréquence",
      contactCta: "Nous contacter",
      playerNote:
        "Le nombre de joueurs recommandé dépend de l’exploration, des plugins, des mods et de la génération de nouveaux chunks.",
      items: [
        {
          name: "Starter",
          price: "$12.99 / mois",
          cores: "2 vCores",
          ram: "4 GB RAM",
          storage: "35 GB NVMe",
          usage: "Vanilla · Plugins légers",
          players: "5 à 12 joueurs recommandés",
          fit: "Parfait pour un petit serveur privé ou un groupe d’amis.",
          featured: false,
        },
        {
          name: "Community",
          price: "$19.99 / mois",
          cores: "3 vCores",
          ram: "6 GB RAM",
          storage: "50 GB NVMe",
          usage: "Vanilla · Plugins modérés",
          players: "10 à 20 joueurs recommandés",
          fit: "Pour une petite communauté qui veut plus de marge et de stabilité.",
          featured: false,
        },
        {
          name: "Performance",
          price: "$28.99 / mois",
          cores: "4 vCores",
          ram: "8 GB RAM",
          storage: "80 GB NVMe",
          usage: "Plugins actifs · Communauté régulière",
          players: "15 à 30 joueurs recommandés",
          fit: "Pour des serveurs plus actifs avec plugins ou joueurs réguliers.",
          featured: true,
        },
        {
          name: "Managed Modded",
          price: "$44.99 / mois",
          cores: "6 vCores",
          ram: "12 GB RAM",
          storage: "120 GB NVMe",
          usage: "Modded léger à modéré",
          players: "20 à 40 joueurs recommandés",
          fit: "Pour les projets moddés ou plus exigeants.",
          featured: false,
        },
      ],
    },
    why: {
      pageTitle: "Un positionnement premium, clair et sérieux",
      intro:
        "Nous privilégions une infrastructure propre, un support humain et des performances stables dans le temps plutôt qu’un simple prix d’appel.",
      items: [
        {
          title: "Ressources propres",
          text: "Nous allouons les ressources avec une vraie logique de stabilité pour garder de bonnes performances en usage réel.",
        },
        {
          title: "Support humain",
          text: "Quand vous avez besoin d’aide, vous échangez avec une vraie personne qui comprend l’hébergement Minecraft.",
        },
        {
          title: "Sauvegardes quotidiennes",
          text: "Les données de votre serveur sont protégées par des sauvegardes quotidiennes incluses dans la base du service.",
        },
        {
          title: "Montée en gamme simple",
          text: "Quand votre serveur grandit, vous pouvez évoluer proprement sans repartir de zéro.",
        },
        {
          title: "Infrastructure sérieuse",
          text: "Ryzen 9 9950X3D, stockage NVMe, localisation proche de Miami et infrastructure pensée pour une faible latence.",
        },
      ],
    },
    support: {
      pageTitle: "Un accompagnement simple, clair et utile",
      intro:
        "Le but est simple : vous aider à partir sur une base cohérente, à rester stable, puis à évoluer sans friction inutile.",
      items: [
        {
          title: "On calibre la bonne offre",
          text: "On vous aide à choisir la bonne formule selon votre serveur, vos plugins et votre nombre de joueurs.",
        },
        {
          title: "On garde une base propre",
          text: "Une base propre rend l’hébergement plus stable, plus simple à gérer et plus crédible dans le temps.",
        },
        {
          title: "On vous aide à évoluer",
          text: "Quand votre communauté grandit, on vous aide à monter en gamme proprement sans perturber le serveur.",
        },
      ],
    },
    faq: {
      pageTitle: "Questions fréquentes",
      items: [
        {
          q: "Pourquoi êtes-vous plus cher qu’un host budget ?",
          a: "Parce que l’objectif est d’offrir des ressources mieux tenues, des sauvegardes quotidiennes et une meilleure stabilité dans le temps.",
        },
        {
          q: "Est-ce adapté aux serveurs moddés ?",
          a: "Oui. Managed Modded est prévu pour les projets plus exigeants, tandis que les autres offres conviennent à des besoins plus légers selon l’usage.",
        },
        {
          q: "Que se passe-t-il si mon serveur grandit ?",
          a: "Vous pouvez passer sur une offre supérieure proprement à mesure que vos besoins évoluent.",
        },
        {
          q: "Comment obtenir de l’aide rapidement ?",
          a: "Discord reste le canal le plus rapide. Vous pouvez aussi utiliser l’email via la page contact.",
        },
      ],
    },
    contact: {
      pageTitle: "Parlez-nous de votre serveur",
      intro:
        "Discord, email ou formulaire : choisissez le canal le plus simple pour nous présenter votre projet.",
      cards: [
        { label: "Discord", value: "discord.gg/falconhost" },
        { label: "Email", value: "contact@falconhost.gg" },
        { label: "Réponse", value: "Des réponses courtes, claires et humaines" },
      ],
      formTitle: "Présentez votre projet",
      fields: {
        name: "Nom",
        email: "Email",
        serverType: "Type de serveur",
        message: "Message",
      },
      placeholders: {
        name: "Votre nom",
        email: "vous@exemple.com",
        serverType: "Survie, mini-jeux, moddé...",
        message: "Parlez-nous de votre serveur et de votre besoin.",
      },
      submit: "Envoyer la demande",
    },
    footer: {
      tagline: "Un hébergement Minecraft premium avec des ressources propres et un vrai support humain.",
      summary: "Ryzen 9 9950X3D · NVMe · Sauvegardes quotidiennes · Support humain",
      contact: "Discord : discord.gg/falconhost · contact@falconhost.gg",
      cta: "Nous contacter",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
