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
      why: "Why choose us",
      support: "Support",
      faq: "FAQ",
      contact: "Contact",
      primaryCta: "View plans",
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
      homeTitle: "Choose the right plan for your server.",
      pageTitle: "Plans built for the way Minecraft servers grow.",
      pageIntro:
        "Start with the right amount of room, then scale cleanly as your players, plugins, and worlds get heavier.",
      featured: "Most popular",
      bestForLabel: "Best for",
      cta: "Choose this plan",
      finalCtaTitle: "Not sure which plan fits your server?",
      finalCtaText: "Tell us about your project and we will point you to the right starting point.",
      finalPrimary: "Talk about your server",
      finalSecondary: "Join Discord",
      items: [
        {
          name: "Starter",
          price: "$15.99/mo",
          fit: "For a private world or a small server.",
          details: "A clean starting point for a few players, a private world, or a lightweight survival setup.",
          upgrade: "Move up when your player count or plugin stack starts asking for more headroom.",
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
          details: "A strong balance for public survival servers and growing communities that want more breathing room.",
          upgrade: "A natural next step for smaller servers becoming more active and more demanding.",
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
          details: "For larger maps, denser gameplay, and servers that need more comfort under regular load.",
          upgrade: "A good fit when your world, plugins, and concurrency are no longer light.",
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
          details: "Designed for modpacks, advanced setups, and communities that need more room and closer support.",
          upgrade: "Ideal when a standard setup is no longer enough and stability matters more than keeping costs minimal.",
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
      homeTitle: "Built for admins. Better for players.",
      pageTitle: "Premium, for practical reasons.",
      pageIntro:
        "We do not compete on the lowest possible price. We focus on clean performance, stable operations, and real support when your server matters.",
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
      deep: [
        {
          title: "We are not trying to be the cheapest host",
          text: "Budget hosting often wins on entry price by packing machines harder and keeping support thinner. That is not the model here.",
        },
        {
          title: "Load per machine matters",
          text: "When a host pushes too many servers onto the same machine, consistency suffers first. We prefer cleaner allocation and a calmer operating margin.",
        },
        {
          title: "Support should feel human",
          text: "When you need guidance, migration help, or a better fit, you should be able to talk to someone who understands what your server actually needs.",
        },
        {
          title: "A premium server should stay easy to run",
          text: "Backups, clear upgrade paths, and predictable support reduce friction for admins and make the server easier to trust over time.",
        },
      ],
    },
    support: {
      eyebrow: "How we support your server",
      homeTitle: "Clear help, from setup to growth.",
      homePreview:
        "Choosing the right plan, starting clean, and scaling without rebuilding everything.",
      pageTitle: "A cleaner path from setup to growth.",
      pageIntro:
        "Good hosting is not only about hardware. It is also about starting clean, moving cleanly, and scaling without creating avoidable problems later.",
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
      deep: [
        {
          title: "Choosing the right plan",
          text: "Player count, plugin stack, world size, and modded needs all matter. We help you avoid starting too small or paying for far too much too early.",
        },
        {
          title: "Starting clean",
          text: "A good launch begins with a stable setup, fast storage, and a clear structure that keeps the server easier to manage over time.",
        },
        {
          title: "Migration help when needed",
          text: "If you already run a server elsewhere, we can help you approach the move more cleanly and with less friction.",
        },
        {
          title: "Growing without rebuilding everything",
          text: "As your community grows, the goal is to scale in a way that keeps your world, files, and admin workflow intact.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      homeTitle: "Questions, answered.",
      pageTitle: "Questions before you choose.",
      homeItems: [
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
      ],
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
      homePreviewTitle: "Talk to us about your server.",
      homePreviewText: "For plan advice, migrations, or modded setups, we can help quickly.",
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
    home: {
      whyCta: "Why choose us",
      supportCta: "See how we help",
      faqCta: "Read FAQ",
      contactCta: "Contact us",
      finalTitle: "Ready for a cleaner hosting experience?",
      finalText: "Choose a plan or tell us about your server.",
      finalPrimary: "View plans",
      finalSecondary: "Contact us",
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
      homeTitle: "Choisissez la bonne offre pour votre serveur.",
      pageTitle: "Des offres pensées pour la vraie vie d’un serveur Minecraft.",
      pageIntro:
        "Commencez avec une base cohérente, puis montez en gamme proprement quand les joueurs, les plugins et les mondes deviennent plus exigeants.",
      featured: "Le plus choisi",
      bestForLabel: "Idéal pour",
      cta: "Choisir cette offre",
      finalCtaTitle: "Pas certain de l’offre qui vous convient ?",
      finalCtaText: "Parlez-nous de votre projet et on vous oriente vers la bonne base.",
      finalPrimary: "Parler de votre serveur",
      finalSecondary: "Rejoindre Discord",
      items: [
        {
          name: "Starter",
          price: "$15.99/mo",
          fit: "Pour un monde privé ou un petit serveur.",
          details: "Une base propre pour quelques joueurs, un monde privé ou une survie légère.",
          upgrade: "Passez à l’offre au-dessus quand le nombre de joueurs ou les plugins demandent plus de marge.",
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
          details: "Un excellent équilibre pour les serveurs publics et les communautés en croissance.",
          upgrade: "L’étape naturelle pour un petit serveur qui devient plus vivant et plus exigeant.",
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
          details: "Pour les grandes maps, les setups plus chargés et les serveurs qui veulent plus de confort sous charge.",
          upgrade: "Le bon choix quand le monde, les plugins et la fréquentation ne sont plus vraiment légers.",
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
          details: "Pensé pour les modpacks, les configs avancées et les projets qui demandent plus de marge et plus de suivi.",
          upgrade: "Idéal quand une configuration standard ne suffit plus et que la stabilité passe avant l’économie maximale.",
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
      homeTitle: "Pensé pour l’admin. Meilleur pour les joueurs.",
      pageTitle: "Premium, pour des raisons concrètes.",
      pageIntro:
        "Nous ne cherchons pas à être l’hébergeur le moins cher. Nous privilégions une performance propre, une exploitation stable et un support réel quand votre serveur compte vraiment.",
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
      deep: [
        {
          title: "Nous ne jouons pas la carte du moins cher",
          text: "L’hébergement budget gagne souvent sur le prix d’appel en chargeant davantage les machines et en gardant un support plus léger. Ce n’est pas le choix ici.",
        },
        {
          title: "La charge par machine compte vraiment",
          text: "Quand trop de serveurs partagent la même machine, la régularité est la première à souffrir. Nous préférons une allocation plus propre et plus sereine.",
        },
        {
          title: "Le support doit rester humain",
          text: "Quand vous avez besoin d’un conseil, d’une migration ou d’un meilleur dimensionnement, vous devez pouvoir parler à quelqu’un qui comprend réellement votre besoin.",
        },
        {
          title: "Un serveur premium doit rester simple à exploiter",
          text: "Sauvegardes, évolution claire et support prévisible réduisent la friction côté admin et rendent le service plus rassurant dans le temps.",
        },
      ],
    },
    support: {
      eyebrow: "Comment on accompagne votre serveur",
      homeTitle: "Un accompagnement clair, du lancement à la montée en charge.",
      homePreview:
        "Choisir la bonne offre, partir sur une base propre, puis évoluer sans tout reconstruire.",
      pageTitle: "Une trajectoire plus propre, du setup à la croissance.",
      pageIntro:
        "Un bon hébergement ne se limite pas au matériel. Il faut aussi un départ propre, une migration claire si besoin, et une montée en charge sans créer de problèmes évitables.",
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
      deep: [
        {
          title: "Choisir la bonne offre",
          text: "Nombre de joueurs, pile de plugins, taille du monde et besoins moddés : on vous aide à éviter une base trop faible ou inutilement surdimensionnée.",
        },
        {
          title: "Partir proprement",
          text: "Un bon lancement repose sur une base stable, un stockage rapide et une structure claire qui reste simple à gérer dans le temps.",
        },
        {
          title: "Aide à la migration si nécessaire",
          text: "Si votre serveur tourne déjà ailleurs, on peut vous aider à préparer un passage plus propre et moins pénible.",
        },
        {
          title: "Grandir sans tout reconstruire",
          text: "Quand la communauté grandit, l’objectif est d’évoluer sans casser votre monde, vos fichiers ou vos habitudes d’administration.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      homeTitle: "Les réponses essentielles.",
      pageTitle: "Les questions à se poser avant de choisir.",
      homeItems: [
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
      ],
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
      homePreviewTitle: "Parlez-nous de votre serveur.",
      homePreviewText: "Pour une offre, une migration ou un projet moddé, on vous répond vite.",
      pageTitle: "Parlez-nous de votre serveur.",
      pageIntro:
        "Pour une offre, une migration ou un projet moddé, on peut vous aider à avancer rapidement dans la bonne direction.",
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
    home: {
      whyCta: "Pourquoi nous choisir",
      supportCta: "Voir notre accompagnement",
      faqCta: "Lire la FAQ",
      contactCta: "Nous contacter",
      finalTitle: "Prêt pour un hébergement plus propre ?",
      finalText: "Choisissez une offre ou parlez-nous de votre serveur.",
      finalPrimary: "Voir les offres",
      finalSecondary: "Nous contacter",
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
