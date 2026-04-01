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
        "Premium Minecraft hosting with clean resources, stable performance, and real human support.",
    },
    brand: {
      name: "FALCONHOST",
      tag: "Minecraft Hosting",
    },
    nav: {
      home: "Home",
      offers: "Plans",
      why: "Why choose us",
      support: "Support",
      faq: "FAQ",
      contact: "Contact",
      primaryCta: "View plans",
      secondaryCta: "Contact us",
    },
    hero: {
      badge: "Stable performance · Clean resource allocation · Human support",
      title: "Premium Minecraft hosting with stable performance",
      subtitle:
        "Cleanly allocated resources for a smoother experience, even as your server grows.",
      intro:
        "High-performance infrastructure, controlled capacity, and human support. Built to stay reliable in real use, not only on paper.",
      primaryCta: "View plans",
      secondaryCta: "Contact us",
      highlights: ["Ryzen 9 9950X3D", "NVMe storage", "Daily backups", "Human support"],
    },
    differentiation: {
      eyebrow: "Why us",
      title: "Why our servers stay stable",
      intro:
        "We size our servers to keep performance headroom and reduce slowdowns as activity increases. The priority is simple: a reliable, predictable experience.",
      items: [
        {
          title: "Cleanly allocated resources",
          text: "Each server gets resources designed to stay consistent in real use.",
        },
        {
          title: "Controlled capacity",
          text: "We deliberately limit load per machine to preserve stability.",
        },
        {
          title: "Human support",
          text: "You speak with a real person when you need help.",
        },
        {
          title: "Simple growth",
          text: "Your server can evolve easily as your community grows.",
        },
      ],
    },
    offers: {
      eyebrow: "Plans",
      homeTitle: "Simple, clear plans built to last",
      homeSubtitle:
        "Cleanly allocated resources for a smoother experience and stable long-term performance.",
      pageTitle: "Simple, clear plans built to last",
      pageIntro:
        "Choose a plan that fits your server today, then scale cleanly when you need more room.",
      featured: "Recommended",
      bestForLabel: "Best for",
      cta: "Get started",
      trustLineTitle: "High-performance infrastructure optimized for Minecraft",
      trustLineText: "Built to stay smooth as your server grows.",
      finalCtaTitle: "Need help choosing the right plan?",
      finalCtaText: "Tell us about your server and we will help you choose the right starting point.",
      finalPrimary: "Contact us",
      finalSecondary: "Join Discord",
      items: [
        {
          name: "Starter",
          price: "$12.99 / month",
          fit: "A small private server or a group of friends.",
          details: "A clean base for light use and a simple way to start with reliable performance.",
          upgrade: "Scale up easily when your player count or usage becomes more demanding.",
          specs: ["2 vCores", "4 GB RAM", "35 GB NVMe"],
          profile: ["Vanilla · Light plugins", "5 to 15 recommended players", "Stable performance"],
          benefits: [
            "Cleanly allocated resources",
            "Automatic backups",
            "Human support",
            "Simple upgrades",
          ],
          button: "Get started",
          featured: false,
        },
        {
          name: "Community",
          price: "$19.99 / month",
          fit: "A small community that wants more headroom and stability.",
          details: "More room for regular activity, with a stronger balance of power and predictability.",
          upgrade: "A natural step up when your server becomes more active and needs more margin.",
          specs: ["3 vCores", "6 GB RAM", "50 GB NVMe"],
          profile: ["Vanilla · Moderate plugins", "10 to 25 recommended players", "Enhanced performance"],
          benefits: [
            "More resources for regular use",
            "Stable performance under load",
            "Responsive human support",
            "Easy upgrade path",
          ],
          button: "Choose this plan",
          featured: false,
        },
        {
          name: "Performance",
          price: "$28.99 / month",
          fit: "More active servers with plugins or regular players.",
          details: "Built for busier servers that need stronger headroom and more consistency over time.",
          upgrade: "Ideal when your server is becoming more active and you want stability without interruption.",
          specs: ["4 vCores", "8 GB RAM", "80 GB NVMe"],
          profile: ["Active plugins · Regular community", "20 to 40 recommended players", "High performance"],
          benefits: [
            "More headroom for activity peaks",
            "Stronger stability",
            "Automatic backups",
            "Upgrade without interruption",
          ],
          button: "Choose this plan",
          featured: true,
        },
        {
          name: "Managed Modded",
          price: "$44.99 / month",
          fit: "Modded or more demanding projects.",
          details: "For heavier workloads, modded environments, and servers that need closer technical support.",
          upgrade: "A strong fit when your setup needs more technical room and smoother long-term scaling.",
          specs: ["6 vCores", "12 GB RAM", "120 GB NVMe"],
          profile: ["Light to moderate modded", "25 to 50 recommended players", "Advanced performance"],
          benefits: [
            "Resources for heavier workloads",
            "Technical guidance",
            "Stable performance",
            "Easy scaling",
          ],
          button: "Choose this plan",
          featured: false,
        },
      ],
    },
    conclusion: {
      eyebrow: "Approach",
      title: "A more serious approach to hosting",
      text:
        "We focus on cleaner resource management to deliver more stable performance and a better long-term experience.",
      closing: "Built to stay smooth as your server grows.",
    },
    contact: {
      eyebrow: "Contact",
      pageTitle: "Talk to us about your server.",
      pageIntro:
        "For plan advice, migrations, or modded setups, we can help you move in the right direction quickly.",
      cards: [
        { label: "Discord", value: "discord.gg/falconhost" },
        { label: "Email", value: "contact@falconhost.gg" },
        { label: "Response", value: "Clear replies for projects, upgrades, and migrations" },
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
      tagline: "Premium Minecraft hosting with stable performance and human support.",
      summary: "Stable performance · Clean resources · Human support",
      contact: "Discord: discord.gg/falconhost · contact@falconhost.gg",
      cta: "Contact us",
    },
  },
  fr: {
    meta: {
      title: "FALCONHOST — Hébergement Minecraft premium",
      description:
        "Un hébergement Minecraft premium avec des performances stables, des ressources propres et un vrai support humain.",
    },
    brand: {
      name: "FALCONHOST",
      tag: "Minecraft Hosting",
    },
    nav: {
      home: "Accueil",
      offers: "Offres",
      why: "Pourquoi nous choisir",
      support: "Accompagnement",
      faq: "FAQ",
      contact: "Contact",
      primaryCta: "Voir les offres",
      secondaryCta: "Nous contacter",
    },
    hero: {
      badge: "Performances stables · Ressources propres · Support humain",
      title: "Hébergement Minecraft premium avec des performances stables",
      subtitle:
        "Des ressources allouées proprement pour une expérience plus fluide, même lorsque votre serveur grandit.",
      intro:
        "Infrastructure performante, capacité maîtrisée et support humain. Pensé pour rester fiable en usage réel, pas seulement sur le papier.",
      primaryCta: "Voir les offres",
      secondaryCta: "Nous contacter",
      highlights: ["Ryzen 9 9950X3D", "Stockage NVMe", "Sauvegardes quotidiennes", "Support humain"],
    },
    differentiation: {
      eyebrow: "Pourquoi nous choisir",
      title: "Pourquoi nos serveurs restent stables",
      intro:
        "Nous dimensionnons nos serveurs pour conserver une marge de performance et éviter les ralentissements lorsque l’activité augmente. Notre priorité est simple : offrir une expérience fiable et prévisible.",
      items: [
        {
          title: "Ressources allouées proprement",
          text: "Chaque serveur dispose de ressources pensées pour rester performantes en usage réel.",
        },
        {
          title: "Capacité maîtrisée",
          text: "Nous limitons volontairement la charge sur nos serveurs pour préserver la stabilité.",
        },
        {
          title: "Support humain",
          text: "Vous échangez avec une vraie personne lorsque vous avez besoin d’aide.",
        },
        {
          title: "Évolution simple",
          text: "Votre serveur peut évoluer facilement lorsque votre communauté grandit.",
        },
      ],
    },
    offers: {
      eyebrow: "Offres",
      homeTitle: "Des offres simples, claires et pensées pour durer",
      homeSubtitle:
        "Des ressources allouées proprement pour une expérience plus fluide et des performances stables dans le temps.",
      pageTitle: "Des offres simples, claires et pensées pour durer",
      pageIntro:
        "Choisissez une base adaptée à votre serveur aujourd’hui, puis montez en gamme proprement quand vous avez besoin de plus de marge.",
      featured: "Offre recommandée",
      bestForLabel: "Idéal pour",
      cta: "Commencer",
      trustLineTitle: "Infrastructure haute performance optimisée pour Minecraft",
      trustLineText: "Pensé pour rester fluide, même lorsque votre serveur grandit.",
      finalCtaTitle: "Besoin d’aide pour choisir la bonne offre ?",
      finalCtaText: "Parlez-nous de votre serveur et nous vous orienterons vers la formule la plus cohérente.",
      finalPrimary: "Nous contacter",
      finalSecondary: "Rejoindre Discord",
      items: [
        {
          name: "Starter",
          price: "$12.99 / mois",
          fit: "Parfait pour un petit serveur privé ou un groupe d’amis.",
          details: "Une base propre pour démarrer avec de bonnes performances sur un serveur léger et privé.",
          upgrade: "Montez facilement en gamme lorsque votre utilisation devient plus régulière ou plus exigeante.",
          specs: ["2 vCores", "4 GB RAM", "35 GB NVMe"],
          profile: ["Vanilla · Plugins légers", "5 à 15 joueurs recommandés", "Performance stable"],
          benefits: [
            "Ressources allouées proprement",
            "Sauvegardes automatiques",
            "Support humain",
            "Évolution simple",
          ],
          button: "Commencer",
          featured: false,
        },
        {
          name: "Community",
          price: "$19.99 / mois",
          fit: "Pour une petite communauté qui veut plus de marge et de stabilité.",
          details: "Plus d’espace pour un usage régulier, avec un meilleur équilibre entre confort et stabilité.",
          upgrade: "L’étape naturelle quand un petit serveur devient plus actif et demande plus de marge.",
          specs: ["3 vCores", "6 GB RAM", "50 GB NVMe"],
          profile: ["Vanilla · Plugins modérés", "10 à 25 joueurs recommandés", "Performance renforcée"],
          benefits: [
            "Plus de ressources pour une utilisation régulière",
            "Performances stables en charge",
            "Support humain réactif",
            "Upgrade simple",
          ],
          button: "Choisir cette offre",
          featured: false,
        },
        {
          name: "Performance",
          price: "$28.99 / mois",
          fit: "Pour des serveurs plus actifs avec plugins ou joueurs réguliers.",
          details: "Pensé pour les serveurs plus sollicités qui ont besoin d’une vraie marge et d’une meilleure stabilité dans le temps.",
          upgrade: "Le bon choix quand votre serveur devient plus vivant et que vous voulez évoluer sans interruption.",
          specs: ["4 vCores", "8 GB RAM", "80 GB NVMe"],
          profile: ["Plugins actifs · Communauté régulière", "20 à 40 joueurs recommandés", "Haute performance"],
          benefits: [
            "Plus de marge pour les pics d’activité",
            "Stabilité renforcée",
            "Sauvegardes automatiques",
            "Évolution sans interruption",
          ],
          button: "Choisir cette offre",
          featured: true,
        },
        {
          name: "Managed Modded",
          price: "$44.99 / mois",
          fit: "Pour les projets moddés ou plus exigeants.",
          details: "Une offre pensée pour les charges plus lourdes, les environnements moddés et les besoins plus techniques.",
          upgrade: "Idéal lorsque votre projet demande plus de marge technique et une évolution plus fluide sur la durée.",
          specs: ["6 vCores", "12 GB RAM", "120 GB NVMe"],
          profile: ["Modded léger à modéré", "25 à 50 joueurs recommandés", "Performance avancée"],
          benefits: [
            "Ressources adaptées aux charges plus lourdes",
            "Accompagnement technique",
            "Performances stables",
            "Évolutions faciles",
          ],
          button: "Choisir cette offre",
          featured: false,
        },
      ],
    },
    conclusion: {
      eyebrow: "Notre approche",
      title: "Une approche plus sérieuse du hosting",
      text:
        "Nous privilégions une gestion propre des ressources pour offrir des performances plus stables et une meilleure expérience sur la durée.",
      closing: "Pensé pour rester fluide, même lorsque votre serveur grandit.",
    },
    contact: {
      eyebrow: "Contact",
      pageTitle: "Parlez-nous de votre serveur.",
      pageIntro:
        "Pour une offre, une migration ou un projet moddé, nous pouvons vous aider à avancer rapidement dans la bonne direction.",
      cards: [
        { label: "Discord", value: "discord.gg/falconhost" },
        { label: "Email", value: "contact@falconhost.gg" },
        { label: "Réponse", value: "Des retours clairs pour projets, upgrades et migrations" },
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
      tagline: "Un hébergement Minecraft premium avec des performances stables et un vrai support humain.",
      summary: "Performances stables · Ressources propres · Support humain",
      contact: "Discord : discord.gg/falconhost · contact@falconhost.gg",
      cta: "Nous contacter",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
