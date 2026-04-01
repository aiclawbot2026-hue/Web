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
      offersTitle: "A clear preview of our plans",
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
      pageTitle: "Premium plans built for launch and long-term stability",
      pageIntro:
        "A clear premium grid built for a reliable launch, with enough room to grow as your server becomes more active.",
      featured: "Recommended",
      processorLabel: "Processor",
      processorValue: "AMD Ryzen 9 9950X3D high frequency",
      contactCta: "Contact us",
      addonsTitle: "Options & add-ons",
      addons: [
        "Migration assistance",
        "Priority support",
        "Additional backups",
        "Extra storage or RAM upgrades",
      ],
      playerNote:
        "Recommended player counts depend on exploration, plugins, mods, and new chunk generation.",
      items: [
        {
          name: "Starter",
          price: "$15.99",
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
          price: "$24.99",
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
          price: "$34.99",
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
          price: "$54.99",
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
      pageTitle: "Why premium hosting makes sense",
      intro:
        "Infrastructure, performance, support, and philosophy all matter when you want a hosting service that stays credible over time.",
      items: [
        {
          title: "Infrastructure",
          text: "Serious hardware, NVMe storage, and placement near Miami for low latency across North America and the Caribbean.",
        },
        {
          title: "Performance",
          text: "Clean resource allocation helps maintain stable performance instead of chasing the lowest possible density.",
        },
        {
          title: "Support",
          text: "When you need help, you speak with a real person who understands Minecraft hosting.",
        },
        {
          title: "Philosophy",
          text: "The goal is not to be the cheapest. The goal is to stay reliable, clear, and premium.",
        },
      ],
    },
    support: {
      pageTitle: "Migration, setup, optimization, and support",
      intro:
        "This page is here to reassure hesitant clients: we help before launch, during setup, and as your server evolves.",
      items: [
        {
          title: "Migration",
          text: "Move from another host more cleanly with help planning the transition.",
        },
        {
          title: "Installation",
          text: "Start with a cleaner setup and a clearer foundation from day one.",
        },
        {
          title: "Optimization",
          text: "Choose a better fit for your plugins, gameplay, and real-world player load.",
        },
        {
          title: "Support",
          text: "Get human help when you need an answer, an adjustment, or a next step.",
        },
      ],
    },
    faq: {
      pageTitle: "Frequently asked questions",
      items: [
        { q: "What latency can I expect?", a: "Latency depends on your location, but hosting near Miami is designed to provide a strong experience for North America and the Caribbean." },
        { q: "Is this good for modded servers?", a: "Yes. Managed Modded is built for heavier projects, while other plans fit lighter setups depending on your needs." },
        { q: "Are backups included?", a: "Yes. Automatic backups are part of the service." },
        { q: "Can I upgrade later?", a: "Yes. Plans are designed to scale cleanly as your server grows." },
        { q: "How do I get support?", a: "Discord is the fastest route, with email also available for project discussions." },
        { q: "Do you guarantee zero lag?", a: "No serious host should promise that. The goal is stable performance with clean resource allocation." },
        { q: "Is the hardware shared?", a: "Resources are allocated carefully to maintain a more predictable experience under load." },
        { q: "Can you help me choose a plan?", a: "Yes. Tell us about your server and we can guide you toward the right option." },
        { q: "What payment options do you support?", a: "Contact us for current payment details during launch setup." },
        { q: "Can I run plugins?", a: "Yes, depending on the plan and the weight of your setup." },
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
      pageTitle: "Des offres premium crédibles pour le lancement",
      pageIntro:
        "Une grille claire, cohérente et pensée pour offrir une base sérieuse dès le départ.",
      featured: "Offre recommandée",
      processorLabel: "Processeur",
      processorValue: "AMD Ryzen 9 9950X3D haute fréquence",
      contactCta: "Nous contacter",
      addonsTitle: "Options & add-ons",
      addons: [
        "Migration assistée",
        "Support prioritaire",
        "Sauvegardes renforcées",
        "Upgrade RAM ou stockage",
      ],
      playerNote:
        "Le nombre de joueurs recommandé dépend de l’exploration, des plugins, des mods et de la génération de nouveaux chunks.",
      items: [
        {
          name: "Starter",
          price: "$15.99",
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
          price: "$24.99",
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
          price: "$34.99",
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
          price: "$54.99",
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
      pageTitle: "Pourquoi notre positionnement est premium",
      intro:
        "Infrastructure, performance, support et philosophie forment un ensemble cohérent pour rendre le service crédible et justifier son prix.",
      items: [
        {
          title: "Infrastructure",
          text: "Matériel sérieux, stockage NVMe et proximité Miami pour une latence basse et un service plus cohérent.",
        },
        {
          title: "Performance",
          text: "Des ressources mieux tenues pour garder de meilleures performances au lieu de pousser la densité au maximum.",
        },
        {
          title: "Support",
          text: "Quand vous avez besoin d’aide, vous échangez avec une vraie personne qui comprend votre besoin.",
        },
        {
          title: "Philosophie",
          text: "Le but n’est pas d’être le moins cher. Le but est d’être fiable, clair et crédible dans le temps.",
        },
      ],
    },
    support: {
      pageTitle: "Migration, installation, optimisation et support",
      intro:
        "Cette page sert à rassurer les clients hésitants : nous aidons avant le lancement, pendant l’installation et quand le serveur évolue.",
      items: [
        {
          title: "Migration",
          text: "Passer depuis un autre host plus proprement, avec une aide pour organiser la transition.",
        },
        {
          title: "Installation",
          text: "Démarrer sur une base plus propre et plus claire dès le premier jour.",
        },
        {
          title: "Optimisation",
          text: "Mieux dimensionner l’offre selon les plugins, le gameplay et la vraie charge côté joueurs.",
        },
        {
          title: "Support",
          text: "Obtenir une aide humaine quand il faut une réponse, un ajustement ou un prochain pas clair.",
        },
      ],
    },
    faq: {
      pageTitle: "Questions fréquentes",
      items: [
        { q: "Quelle latence puis-je attendre ?", a: "La latence dépend de votre position, mais l’infrastructure proche de Miami vise une bonne expérience pour l’Amérique du Nord et la Caraïbe." },
        { q: "Est-ce adapté aux mods ?", a: "Oui. Managed Modded est prévu pour les projets plus exigeants, tandis que les autres offres conviennent à des setups plus légers selon vos besoins." },
        { q: "Les sauvegardes sont-elles incluses ?", a: "Oui. Les sauvegardes automatiques font partie de la base du service." },
        { q: "Puis-je upgrade plus tard ?", a: "Oui. Les offres sont pensées pour évoluer proprement avec votre serveur." },
        { q: "Comment obtenir du support ?", a: "Discord reste le canal le plus rapide, avec l’email disponible pour les échanges plus posés." },
        { q: "Promettez-vous zéro lag ?", a: "Non. Aucun hébergeur sérieux ne devrait le promettre. L’objectif est une performance stable avec des ressources mieux tenues." },
        { q: "Le matériel est-il partagé ?", a: "Les ressources sont allouées avec une logique de stabilité pour garder une expérience plus prévisible en charge." },
        { q: "Pouvez-vous m’aider à choisir une offre ?", a: "Oui. Présentez-nous votre serveur et nous vous orienterons vers la bonne formule." },
        { q: "Quels moyens de paiement acceptez-vous ?", a: "Contactez-nous pour connaître les modalités de paiement disponibles au lancement." },
        { q: "Puis-je utiliser des plugins ?", a: "Oui, selon l’offre et le poids réel de votre configuration." },
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
