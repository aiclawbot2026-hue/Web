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
        "Premium Minecraft hosting with clean resources, daily backups, and real human support.",
    },
    nav: {
      offers: "Plans",
      why: "Why choose us",
      support: "Support",
      faq: "FAQ",
      contact: "Contact",
      secondaryCta: "Talk about your server",
    },
    hero: {
      badge: "Ryzen 9 9950X3D · NVMe · Human support · Daily backups",
      title:
        "Premium Minecraft hosting for communities that want stability and real support.",
      subtitle:
        "Clean resources, daily backups, and a simple path to grow.",
      primaryCta: "View plans",
      secondaryCta: "Talk about your server",
      highlights: ["Ryzen 9 9950X3D", "NVMe storage", "Human support", "Daily backups"],
    },
    offers: {
      eyebrow: "Plans",
      title: "Choose the right plan for your server.",
      featured: "Most popular",
      cta: "Choose this plan",
      items: [
        {
          name: "Starter",
          price: "$15.99/mo",
          fit: "For a private world or a small server.",
          specs: ["2 vCores", "4 GB RAM", "40 GB NVMe"],
          benefits: [
            "Stable for vanilla or light plugins",
            "Daily backups included",
            "Easy upgrade path",
          ],
          featured: false,
        },
        {
          name: "Community",
          price: "$24.99/mo",
          fit: "For active servers that need more room.",
          specs: ["3 vCores", "6 GB RAM", "60 GB NVMe"],
          benefits: [
            "More headroom for regular player peaks",
            "Responsive human support",
            "Strong balance of power and value",
          ],
          featured: true,
        },
        {
          name: "Performance",
          price: "$34.99/mo",
          fit: "For heavier worlds and busier gameplay.",
          specs: ["4 vCores", "8 GB RAM", "90 GB NVMe"],
          benefits: [
            "More comfort under load",
            "Better for larger maps",
            "Simple scaling as you grow",
          ],
          featured: false,
        },
        {
          name: "Managed Modded",
          price: "$54.99/mo",
          fit: "For modded servers and demanding setups.",
          specs: ["6 vCores", "12 GB RAM", "140 GB NVMe"],
          benefits: [
            "More room for modpacks",
            "Better fit for advanced needs",
            "Built for long-term projects",
          ],
          featured: false,
        },
      ],
    },
    why: {
      eyebrow: "Why choose us",
      title: "Built for admins. Better for players.",
      items: [
        {
          title: "Clean resources",
          text: "No aggressive overselling. Your server gets room to stay consistent.",
        },
        {
          title: "Human support",
          text: "Fast, clear help from someone who understands Minecraft hosting.",
        },
        {
          title: "Daily backups",
          text: "Your world is backed up every day as a standard, not an add-on.",
        },
        {
          title: "Simple upgrades",
          text: "Move up cleanly as your community grows.",
        },
      ],
    },
    support: {
      eyebrow: "How we support your server",
      title: "Clear help, from setup to growth.",
      items: [
        {
          step: "1",
          title: "We size it properly",
          text: "We help you choose the right plan for your players, plugins, and goals.",
        },
        {
          step: "2",
          title: "We keep it clean",
          text: "Serious hardware, fast storage, and a setup built for stability.",
        },
        {
          step: "3",
          title: "We help you scale",
          text: "When your server grows, you can upgrade without starting over.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions, answered.",
      items: [
        {
          q: "Why are you more expensive than a budget host?",
          a: "Because you are paying for cleaner resource allocation, daily backups, and real support — not just a low entry price.",
        },
        {
          q: "Is this suitable for modded servers?",
          a: "Yes. Performance fits lighter modded setups. Managed Modded is built for heavier packs and more demanding projects.",
        },
        {
          q: "What happens if my server grows?",
          a: "You move to a higher plan cleanly, without having to rebuild everything too early.",
        },
        {
          q: "How do I get help quickly?",
          a: "Discord is the fastest way to reach us. Email works too for projects and migrations.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk to us about your server.",
      subtitle: "For plan advice, migrations, or modded setups, we can help.",
      cards: [
        { label: "Discord", value: "discord.gg/falconhost" },
        { label: "Email", value: "contact@falconhost.gg" },
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
      tagline: "Premium Minecraft hosting with clean resources and real support.",
      summary: "Ryzen 9 9950X3D · NVMe · Human support · Daily backups",
      contact: "Discord: discord.gg/falconhost · contact@falconhost.gg",
    },
  },
  fr: {
    meta: {
      title: "FALCONHOST — Hébergement Minecraft premium",
      description:
        "Un hébergement Minecraft premium avec des ressources propres, des sauvegardes quotidiennes et un vrai support humain.",
    },
    nav: {
      offers: "Offres",
      why: "Pourquoi nous choisir",
      support: "Accompagnement",
      faq: "FAQ",
      contact: "Contact",
      secondaryCta: "Parler de votre serveur",
    },
    hero: {
      badge: "Ryzen 9 9950X3D · NVMe · Support humain · Sauvegardes quotidiennes",
      title:
        "Hébergement Minecraft premium pour les communautés qui veulent de la stabilité et un vrai accompagnement.",
      subtitle:
        "Des ressources propres, des sauvegardes quotidiennes et une montée en gamme simple.",
      primaryCta: "Voir les offres",
      secondaryCta: "Parler de votre serveur",
      highlights: ["Ryzen 9 9950X3D", "Stockage NVMe", "Support humain", "Sauvegardes quotidiennes"],
    },
    offers: {
      eyebrow: "Offres",
      title: "Choisissez la bonne offre pour votre serveur.",
      featured: "Le plus choisi",
      cta: "Choisir cette offre",
      items: [
        {
          name: "Starter",
          price: "$15.99/mo",
          fit: "Pour un monde privé ou un petit serveur.",
          specs: ["2 vCores", "4 Go RAM", "40 Go NVMe"],
          benefits: [
            "Stable pour du vanilla ou des plugins légers",
            "Sauvegardes quotidiennes incluses",
            "Montée en gamme simple",
          ],
          featured: false,
        },
        {
          name: "Community",
          price: "$24.99/mo",
          fit: "Pour les serveurs actifs qui ont besoin de marge.",
          specs: ["3 vCores", "6 Go RAM", "60 Go NVMe"],
          benefits: [
            "Plus d’aisance en cas de pics réguliers",
            "Support humain réactif",
            "Excellent équilibre entre puissance et valeur",
          ],
          featured: true,
        },
        {
          name: "Performance",
          price: "$34.99/mo",
          fit: "Pour les mondes plus lourds et un gameplay plus dense.",
          specs: ["4 vCores", "8 Go RAM", "90 Go NVMe"],
          benefits: [
            "Plus de confort sous charge",
            "Mieux adapté aux grandes maps",
            "Évolution simple dans le temps",
          ],
          featured: false,
        },
        {
          name: "Managed Modded",
          price: "$54.99/mo",
          fit: "Pour les serveurs moddés et les setups exigeants.",
          specs: ["6 vCores", "12 Go RAM", "140 Go NVMe"],
          benefits: [
            "Plus de marge pour les modpacks",
            "Mieux adapté aux besoins avancés",
            "Pensé pour les projets durables",
          ],
          featured: false,
        },
      ],
    },
    why: {
      eyebrow: "Pourquoi nous choisir",
      title: "Pensé pour l’admin. Meilleur pour les joueurs.",
      items: [
        {
          title: "Ressources propres",
          text: "Pas d’oversell agressif. Votre serveur garde de l’espace pour rester cohérent.",
        },
        {
          title: "Support humain",
          text: "Une aide claire et rapide par quelqu’un qui comprend l’hébergement Minecraft.",
        },
        {
          title: "Sauvegardes quotidiennes",
          text: "Votre monde est sauvegardé chaque jour, sans option cachée.",
        },
        {
          title: "Montée en gamme simple",
          text: "Vous évoluez proprement quand votre communauté grandit.",
        },
      ],
    },
    support: {
      eyebrow: "Comment on accompagne votre serveur",
      title: "Un accompagnement clair, du lancement à la montée en charge.",
      items: [
        {
          step: "1",
          title: "On calibre la bonne offre",
          text: "On vous aide à choisir selon vos joueurs, vos plugins et vos objectifs.",
        },
        {
          step: "2",
          title: "On garde une base propre",
          text: "Matériel sérieux, stockage rapide et environnement pensé pour la stabilité.",
        },
        {
          step: "3",
          title: "On vous aide à évoluer",
          text: "Quand le serveur grossit, vous pouvez monter en gamme sans repartir de zéro.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Les réponses essentielles.",
      items: [
        {
          q: "Pourquoi êtes-vous plus cher qu’un host budget ?",
          a: "Parce que vous payez des ressources mieux tenues, des sauvegardes quotidiennes et un vrai support — pas seulement un prix d’entrée bas.",
        },
        {
          q: "Est-ce adapté aux serveurs moddés ?",
          a: "Oui. Performance convient aux setups moddés légers. Managed Modded est prévu pour les packs plus lourds et les projets plus exigeants.",
        },
        {
          q: "Que se passe-t-il si mon serveur grandit ?",
          a: "Vous passez sur une offre supérieure proprement, sans devoir tout reconstruire trop tôt.",
        },
        {
          q: "Comment obtenir de l’aide rapidement ?",
          a: "Discord reste le moyen le plus rapide. L’email fonctionne aussi pour les projets et migrations.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlez-nous de votre serveur.",
      subtitle: "Pour une offre, une migration ou un projet moddé, on vous répond vite.",
      cards: [
        { label: "Discord", value: "discord.gg/falconhost" },
        { label: "Email", value: "contact@falconhost.gg" },
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
      tagline: "Un hébergement Minecraft premium avec des ressources propres et un vrai support.",
      summary: "Ryzen 9 9950X3D · NVMe · Support humain · Sauvegardes quotidiennes",
      contact: "Discord : discord.gg/falconhost · contact@falconhost.gg",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
