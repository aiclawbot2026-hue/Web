export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const dictionary = {
  en: {
    meta: {
      title: "FALCONHOST — Premium Minecraft Hosting",
      description:
        "Premium Minecraft hosting for communities that want stability, clear scaling, and real human support.",
    },
    nav: {
      offers: "Plans",
      why: "Why choose us",
      advantage: "Premium advantage",
      faq: "FAQ",
      contact: "Contact",
      secondaryCta: "Talk about your server",
    },
    language: {
      label: "Language",
      en: "EN",
      fr: "FR",
    },
    hero: {
      badge: "Ryzen 9 9950X3D · NVMe · Human support · Daily backups",
      title:
        "Premium Minecraft hosting for communities that want stability and real support.",
      subtitle:
        "Clean resources, daily backups, responsive human support, and an easy upgrade path as your server grows.",
      primaryCta: "View plans",
      secondaryCta: "Talk about your server",
      panelLabel: "Built for serious communities",
      panelTitle:
        "A smoother experience for players, and a clearer foundation for the admin.",
      panelItems: [
        {
          label: "Performance",
          text: "Modern hardware and well-managed resources for a more stable everyday experience.",
        },
        {
          label: "Support",
          text: "Real people available when you need help, guidance, or the right next step.",
        },
        {
          label: "Growth",
          text: "Upgrade cleanly as your player base expands, without rebuilding everything from scratch.",
        },
      ],
      highlights: ["Ryzen 9 9950X3D", "NVMe storage", "Human support", "Daily backups"],
    },
    offers: {
      eyebrow: "Plans",
      title: "Four clear plans built around the way Minecraft servers actually grow.",
      subtitle:
        "Choose a starting point that fits your players, your plugins, and your ambitions — then scale up when you need to.",
      featured: "Most popular",
      cta: "Choose this plan",
      items: [
        {
          name: "Starter",
          price: "$15.99/mo",
          fit: "A clean base for a private world, a small survival server, or an early community.",
          specs: ["2 vCores", "4 GB RAM", "40 GB NVMe"],
          benefits: [
            "Stable resources for a smooth vanilla or light plugin setup",
            "Daily backups included from day one",
            "Easy step up when your server needs more room",
          ],
        },
        {
          name: "Community",
          price: "$24.99/mo",
          fit: "The right balance for active communities that need more headroom.",
          specs: ["3 vCores", "6 GB RAM", "60 GB NVMe"],
          benefits: [
            "More breathing room for plugins and regular player peaks",
            "Responsive human support when you need to adjust",
            "A stronger base for a growing public server",
          ],
          featured: true,
        },
        {
          name: "Performance",
          price: "$34.99/mo",
          fit: "For larger worlds, busier gameplay, and communities that expect consistency.",
          specs: ["4 vCores", "8 GB RAM", "90 GB NVMe"],
          benefits: [
            "More comfort under regular load",
            "Better fit for heavier setups and larger maps",
            "Simple upgrades as your server keeps growing",
          ],
        },
        {
          name: "Managed Modded",
          price: "$54.99/mo",
          fit: "For modded servers, heavier configurations, and projects that need closer support.",
          specs: ["6 vCores", "12 GB RAM", "140 GB NVMe"],
          benefits: [
            "More margin for modpacks and advanced server setups",
            "Better support for technical and evolving needs",
            "A plan designed to keep serious projects comfortable longer",
          ],
        },
      ],
    },
    why: {
      eyebrow: "Why choose us",
      title: "A premium host should make your server easier to run — not harder to trust.",
      items: [
        {
          title: "Cleanly allocated resources",
          text: "We do not rely on aggressive overselling. The goal is simple: keep your server consistent, not overcrowded.",
        },
        {
          title: "Responsive human support",
          text: "When you need help, you speak with someone who understands the admin side of Minecraft hosting and can guide you clearly.",
        },
        {
          title: "Daily backups",
          text: "World data matters. Daily backups are part of the baseline, not an optional extra hidden behind marketing.",
        },
        {
          title: "Simple upgrades",
          text: "As your community grows, you can move up cleanly without turning your server into a migration headache.",
        },
      ],
    },
    advantage: {
      eyebrow: "Premium advantage",
      title: "Premium, for practical reasons.",
      paragraphs: [
        "FALCONHOST is built for admins who want a serious foundation for their server and a smoother experience for their community.",
        "The premium difference is not just the CPU. It is the full package: better-kept resources, fast NVMe storage, daily backups, and real support when your project needs attention.",
        "For players, that means a server that feels more dependable. For admins, it means less improvisation, better clarity, and an easier path as the server evolves.",
      ],
      steps: [
        {
          step: "1",
          title: "We look at your real project",
          text: "Player count, plugin stack, modpack needs, and growth plans — we help you start with the right fit instead of guessing.",
        },
        {
          step: "2",
          title: "We set a clean foundation",
          text: "You start on serious hardware with a clear structure designed to keep the server stable from the beginning.",
        },
        {
          step: "3",
          title: "We stay available as you grow",
          text: "Maps expand, plugins multiply, communities become more active. We help you adjust at the right time, before things become messy.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Answers to the questions that matter before you choose.",
      items: [
        {
          q: "Why are you more expensive than a budget host?",
          a: "Because the offer is different. You are paying for better-kept resources, cleaner operations, daily backups, and real support that follows your project instead of treating it like a ticket number.",
        },
        {
          q: "Is this suitable for modded servers?",
          a: "Yes. Performance works well for lighter or mid-range modded setups, while Managed Modded is designed for heavier packs and projects that need more room and closer support.",
        },
        {
          q: "What happens if my server grows?",
          a: "You move to a higher plan cleanly. The idea is to let your server scale without forcing you into a painful rebuild too early.",
        },
        {
          q: "How do I get help quickly?",
          a: "Discord is the fastest route. You can also email us or use the contact form if you want to discuss a migration, a new setup, or the right plan for your project.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk to us about your server.",
      subtitle:
        "If you are choosing between plans, preparing a migration, or building a modded setup, we can point you toward the right starting point.",
      cards: [
        { label: "Discord", value: "discord.gg/falconhost" },
        { label: "Email", value: "contact@falconhost.gg" },
        { label: "Response", value: "Fast replies for project, upgrade, and migration requests" },
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
        serverType: "Survival, minigames, modded, private community...",
        message:
          "Tell us about your server, your player count, your plugin stack, or your migration needs.",
      },
      submit: "Send request",
    },
    footer: {
      tagline:
        "Premium Minecraft hosting for servers that need a clean, stable, and well-supported foundation.",
      summary: "Ryzen 9 9950X3D · NVMe · Human support · Daily backups",
      contact: "Discord: discord.gg/falconhost · contact@falconhost.gg",
    },
  },
  fr: {
    meta: {
      title: "FALCONHOST — Hébergement Minecraft premium",
      description:
        "Un hébergement Minecraft premium pour les communautés qui veulent de la stabilité, une montée en gamme claire et un vrai support humain.",
    },
    nav: {
      offers: "Offres",
      why: "Pourquoi nous choisir",
      advantage: "Notre avantage",
      faq: "FAQ",
      contact: "Contact",
      secondaryCta: "Parler de votre serveur",
    },
    language: {
      label: "Langue",
      en: "EN",
      fr: "FR",
    },
    hero: {
      badge: "Ryzen 9 9950X3D · NVMe · Support humain · Sauvegardes quotidiennes",
      title:
        "Hébergement Minecraft premium pour les communautés qui veulent de la stabilité et un vrai accompagnement.",
      subtitle:
        "Des ressources propres, des sauvegardes quotidiennes, un support humain réactif et une évolution simple quand votre serveur grandit.",
      primaryCta: "Voir les offres",
      secondaryCta: "Parler de votre serveur",
      panelLabel: "Pensé pour les serveurs sérieux",
      panelTitle:
        "Une expérience plus fluide pour les joueurs, et une base plus claire pour l’admin.",
      panelItems: [
        {
          label: "Performance",
          text: "Un matériel moderne et des ressources mieux tenues pour une expérience plus stable au quotidien.",
        },
        {
          label: "Support",
          text: "Un vrai interlocuteur quand vous avez besoin d’aide, d’un conseil ou d’un ajustement.",
        },
        {
          label: "Évolution",
          text: "Une montée en gamme propre quand la communauté prend de l’ampleur, sans tout reconstruire.",
        },
      ],
      highlights: ["Ryzen 9 9950X3D", "Stockage NVMe", "Support humain", "Sauvegardes quotidiennes"],
    },
    offers: {
      eyebrow: "Offres",
      title: "Quatre offres claires, pensées pour la vraie vie d’un serveur Minecraft.",
      subtitle:
        "Vous choisissez une base cohérente pour vos joueurs, vos plugins et votre rythme de croissance — puis vous évoluez simplement quand c’est nécessaire.",
      featured: "Le plus choisi",
      cta: "Choisir cette offre",
      items: [
        {
          name: "Starter",
          price: "$15.99/mo",
          fit: "Une base propre pour un monde privé, une survie entre amis ou le lancement d’une petite communauté.",
          specs: ["2 vCores", "4 Go RAM", "40 Go NVMe"],
          benefits: [
            "Des ressources stables pour une configuration vanilla ou légère",
            "Sauvegardes quotidiennes incluses dès le départ",
            "Montée en gamme simple quand le serveur a besoin de plus d’espace",
          ],
        },
        {
          name: "Community",
          price: "$24.99/mo",
          fit: "Le bon équilibre pour une communauté active qui a besoin d’un peu plus de marge.",
          specs: ["3 vCores", "6 Go RAM", "60 Go NVMe"],
          benefits: [
            "Plus d’aisance pour les plugins et les pics de fréquentation",
            "Support humain réactif quand il faut ajuster",
            "Une base plus solide pour un serveur public en croissance",
          ],
          featured: true,
        },
        {
          name: "Performance",
          price: "$34.99/mo",
          fit: "Pour les mondes plus lourds, un gameplay plus dense et des communautés qui attendent de la régularité.",
          specs: ["4 vCores", "8 Go RAM", "90 Go NVMe"],
          benefits: [
            "Davantage de confort sous charge régulière",
            "Mieux adapté aux configurations plus exigeantes",
            "Évolution simple si le serveur continue de grandir",
          ],
        },
        {
          name: "Managed Modded",
          price: "$54.99/mo",
          fit: "Pour les serveurs moddés, les configurations plus lourdes et les projets qui demandent un suivi plus proche.",
          specs: ["6 vCores", "12 Go RAM", "140 Go NVMe"],
          benefits: [
            "Plus de marge pour les modpacks et setups avancés",
            "Un accompagnement plus adapté aux besoins techniques",
            "Une offre pensée pour garder les projets sérieux confortables plus longtemps",
          ],
        },
      ],
    },
    why: {
      eyebrow: "Pourquoi nous choisir",
      title: "Un hébergeur premium doit vous simplifier la gestion du serveur, pas compliquer la confiance.",
      items: [
        {
          title: "Ressources propres",
          text: "Nous évitons l’oversell agressif. Le but est simple : garder un serveur cohérent, pas empiler les instances sur la même machine.",
        },
        {
          title: "Support humain réactif",
          text: "Quand vous avez besoin d’aide, vous échangez avec quelqu’un qui comprend la réalité d’un admin Minecraft et peut vous guider clairement.",
        },
        {
          title: "Sauvegardes quotidiennes",
          text: "Les données de votre monde comptent. Les sauvegardes quotidiennes font partie de la base, pas d’une option marketing ajoutée au dernier moment.",
        },
        {
          title: "Montée en gamme simple",
          text: "Quand votre communauté grossit, vous pouvez évoluer proprement sans transformer votre serveur en chantier de migration.",
        },
      ],
    },
    advantage: {
      eyebrow: "Notre avantage",
      title: "Premium, pour des raisons concrètes.",
      paragraphs: [
        "FALCONHOST s’adresse aux admins qui veulent une base sérieuse pour leur serveur et une expérience plus propre pour leur communauté.",
        "La différence premium ne tient pas seulement au processeur. Elle tient à l’ensemble : des ressources mieux tenues, du stockage NVMe rapide, des sauvegardes quotidiennes et un vrai support quand votre projet demande de l’attention.",
        "Pour les joueurs, cela veut dire un serveur plus fiable au quotidien. Pour l’admin, cela veut dire moins d’improvisation, plus de clarté et une évolution plus simple dans le temps.",
      ],
      steps: [
        {
          step: "1",
          title: "On regarde votre projet réel",
          text: "Nombre de joueurs, pile de plugins, besoins moddés, ambitions de croissance : on vous aide à partir sur la bonne base au lieu de vous laisser deviner.",
        },
        {
          step: "2",
          title: "On pose une base propre",
          text: "Vous démarrez sur un matériel sérieux, avec une structure claire pensée pour garder le serveur stable dès le début.",
        },
        {
          step: "3",
          title: "On reste là quand ça évolue",
          text: "Une map s’alourdit, les plugins s’accumulent, la communauté devient plus active. On vous aide à ajuster au bon moment, avant que ça se complique.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Les réponses aux questions qui comptent avant de choisir.",
      items: [
        {
          q: "Pourquoi êtes-vous plus cher qu’un host budget ?",
          a: "Parce que l’offre n’a pas le même objectif. Ici, vous payez pour des ressources mieux tenues, une exploitation plus propre, des sauvegardes quotidiennes et un support humain qui suit réellement votre projet.",
        },
        {
          q: "Est-ce adapté aux serveurs moddés ?",
          a: "Oui. Performance convient bien aux setups moddés légers à intermédiaires, tandis que Managed Modded est pensé pour les packs plus lourds et les projets qui demandent davantage de marge et de suivi.",
        },
        {
          q: "Que se passe-t-il si mon serveur grandit ?",
          a: "Vous passez simplement sur une offre supérieure. L’idée est de laisser votre serveur évoluer sans vous forcer trop tôt dans une reconstruction pénible.",
        },
        {
          q: "Comment obtenir de l’aide rapidement ?",
          a: "Discord reste le canal le plus direct. Vous pouvez aussi nous écrire par email ou utiliser le formulaire si vous voulez parler migration, nouvelle installation ou choix d’offre.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlez-nous de votre serveur.",
      subtitle:
        "Si vous hésitez entre deux offres, si vous préparez une migration ou si vous montez un projet moddé, on peut vous orienter vers une base cohérente.",
      cards: [
        { label: "Discord", value: "discord.gg/falconhost" },
        { label: "Email", value: "contact@falconhost.gg" },
        { label: "Réponse", value: "Retour rapide pour les projets, upgrades et migrations" },
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
        serverType: "Survie, mini-jeux, moddé, communauté privée...",
        message:
          "Parlez-nous de votre serveur, du nombre de joueurs, de vos plugins ou de votre besoin de migration.",
      },
      submit: "Envoyer la demande",
    },
    footer: {
      tagline:
        "Un hébergement Minecraft premium pour les serveurs qui ont besoin d’une base propre, stable et bien suivie.",
      summary: "Ryzen 9 9950X3D · NVMe · Support humain · Sauvegardes quotidiennes",
      contact: "Discord : discord.gg/falconhost · contact@falconhost.gg",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
