const offers = [
  {
    name: "Starter",
    price: "$15.99/mo",
    cores: "2 vCores",
    ram: "4 Go RAM",
    storage: "40 Go NVMe",
    label: "Idéal pour serveur privé, survie entre amis ou petit projet",
  },
  {
    name: "Community",
    price: "$24.99/mo",
    cores: "3 vCores",
    ram: "6 Go RAM",
    storage: "60 Go NVMe",
    label: "Pensé pour les communautés qui veulent plus de marge",
    featured: true,
  },
  {
    name: "Performance",
    price: "$34.99/mo",
    cores: "4 vCores",
    ram: "8 Go RAM",
    storage: "90 Go NVMe",
    label: "Pour un gameplay plus fluide et des serveurs plus ambitieux",
  },
  {
    name: "Managed Modded",
    price: "$54.99/mo",
    cores: "6 vCores",
    ram: "12 Go RAM",
    storage: "140 Go NVMe",
    label: "Pour modpacks lourds, maps avancées et projets exigeants",
  },
];

const advantages = [
  {
    title: "Un hébergement premium soutenu par un vrai matériel",
    text: "Le Ryzen 9 9950X3D et le stockage NVMe rapide ne servent pas à impressionner sur une fiche technique. Ils soutiennent une promesse de performance plus stable et plus sérieuse.",
  },
  {
    title: "Une offre pensée pour vendre la tranquillité",
    text: "Ici, le but n’est pas d’empiler des promesses marketing. Le but est de proposer une expérience plus propre, plus claire et plus rassurante pour les serveurs qui comptent vraiment.",
  },
  {
    title: "Une montée en gamme naturelle",
    text: "Quand votre map grandit, que les plugins s’accumulent ou que les pics de joueurs deviennent réguliers, l’évolution se fait proprement, sans repartir de zéro.",
  },
  {
    title: "Un support humain qui inspire confiance",
    text: "La valeur premium ne repose pas uniquement sur les ressources. Elle repose aussi sur l’accompagnement, l’aide à la migration et des réponses concrètes quand vous en avez besoin.",
  },
];

const faq = [
  {
    q: "Pourquoi choisir cette offre plutôt qu’un hébergeur moins cher ?",
    a: "Parce que cette offre n’est pas conçue pour gagner une guerre des prix. Elle est conçue pour offrir une meilleure tenue dans le temps, une allocation plus propre des ressources et une expérience plus rassurante pour les projets sérieux.",
  },
  {
    q: "Est-ce adapté aux serveurs moddés ?",
    a: "Oui, surtout sur les formules supérieures. Managed Modded est pensée pour des environnements plus lourds, avec davantage de besoins en mémoire, en stockage et en accompagnement.",
  },
  {
    q: "Peux-tu garantir zéro lag ?",
    a: "Aucun hébergeur sérieux ne devrait promettre cela dans tous les cas. En revanche, l’objectif ici est de proposer un dimensionnement propre, un matériel solide et un accompagnement réel si votre configuration doit évoluer.",
  },
  {
    q: "Que se passe-t-il si mon serveur grandit ?",
    a: "C’est justement l’intérêt de l’approche premium. Vous démarrez avec une formule cohérente, puis vous ajoutez des ressources au bon moment, sans vous retrouver bloqué dans une offre mal pensée.",
  },
];

const proofPoints = [
  "Ryzen 9 9950X3D mis en avant comme preuve de sérieux",
  "Sauvegardes quotidiennes et logique d’exploitation propre",
  "Aide à la migration et accompagnement plus impliqué",
  "Évolution simple quand le serveur prend de l’ampleur",
];

const onboarding = [
  "Des offres claires au lieu d’un catalogue interminable",
  "Un accompagnement pour choisir la bonne formule dès le départ",
  "Un ton plus haut de gamme, plus sobre et plus crédible",
  "Une base déjà prête pour Vercel et les évolutions futures",
];

const comparison = [
  {
    label: "Positionnement",
    premium: "Un hébergement premium pensé pour les communautés qui privilégient la stabilité",
    budget: "Un hébergement de masse conçu d’abord pour rivaliser sur le prix",
  },
  {
    label: "Support",
    premium: "Un support humain, plus direct et plus impliqué",
    budget: "Un support souvent plus générique et plus standardisé",
  },
  {
    label: "Évolution",
    premium: "Une montée en gamme plus propre à mesure que les besoins augmentent",
    budget: "Une progression parfois plus rigide et moins accompagnée",
  },
  {
    label: "Promesse",
    premium: "Fiabilité, confiance et qualité d’exploitation",
    budget: "Prix d’entrée bas et commodité immédiate",
  },
];

const trust = [
  "Des sauvegardes quotidiennes présentées comme un standard de sérieux",
  "Une aide à la migration pour réduire les frictions de départ",
  "Une grille simple à comprendre, pensée pour convertir sans confusion",
  "Une communication premium qui rend le service crédible dès les premières secondes",
];

const infraBadges = [
  "Ryzen 9 9950X3D",
  "NVMe haute vitesse",
  "Déploiement premium",
  "Support humain",
];

const addons = [
  {
    name: "Sauvegardes renforcées",
    text: "Pour les serveurs qui veulent une stratégie de sauvegarde encore plus rassurante.",
  },
  {
    name: "Support prioritaire",
    text: "Pour les clients qui veulent des réponses plus rapides et un suivi plus direct.",
  },
  {
    name: "Accompagnement migration",
    text: "Pour déplacer un serveur existant avec moins de friction et plus de sérénité.",
  },
  {
    name: "Évolution RAM / stockage",
    text: "Pour accompagner la croissance sans casser l’existant ni repartir de zéro.",
  },
];

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#050b14] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg-generated.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,9,18,0.78)_0%,rgba(8,15,28,0.48)_36%,rgba(5,10,18,0.76)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,140,255,0.12),transparent_32%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px,48px_48px]" />
      <div className="absolute left-[-10%] top-[12%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-[-8%] top-[32%] h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <header className="relative z-10 border-b border-white/10 backdrop-blur-md">
        <div className="section-shell flex items-center justify-between py-5">
          <div>
            <div className="text-lg font-bold tracking-[0.22em] text-white">FALCONHOST</div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Hébergement Minecraft Premium</div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-200 md:flex">
            <a href="#home" className="hover:text-white">Accueil</a>
            <a href="#offers" className="hover:text-white">Offres</a>
            <a href="#comparison" className="hover:text-white">Comparer</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a href="#contact" className="cta-secondary">Parler de votre serveur</a>
        </div>
      </header>

      <section id="home" className="relative z-10">
        <div className="section-shell grid min-h-[92vh] items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary shadow-glow">
              Infrastructure premium · Ryzen 9 9950X3D
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] text-white md:text-7xl xl:text-[5.5rem]">
              Hébergement Minecraft premium conçu pour vendre la performance, la stabilité et la confiance.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Une offre pensée pour les communautés, serveurs privés et projets plus ambitieux qui veulent un matériel sérieux, une image haut de gamme et un service capable d’évoluer proprement.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#offers" className="cta-primary">Voir les offres</a>
              <a href="#comparison" className="cta-secondary">Comparer les offres</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {infraBadges.map((item) => (
                <div key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
              <div className="glass-card p-5">
                <div className="text-sm text-slate-400">Processeur mis en avant</div>
                <div className="mt-2 text-xl font-bold text-white">Ryzen 9 9950X3D</div>
              </div>
              <div className="glass-card p-5">
                <div className="text-sm text-slate-400">Stockage serveur</div>
                <div className="mt-2 text-xl font-bold text-white">NVMe rapide</div>
              </div>
              <div className="glass-card p-5">
                <div className="text-sm text-slate-400">Qualité de service</div>
                <div className="mt-2 text-xl font-bold text-white">Premium, propre, sérieux</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
            <div className="glass-card relative overflow-hidden p-6 shadow-glow md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(90,168,255,0.18),transparent_30%)]" />
              <div className="relative">
                <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Offre premium boutique</div>
                <h2 className="mt-4 text-3xl font-bold text-white">Pas l’option la moins chère. L’option qui donne à votre serveur une base plus propre et plus crédible.</h2>
                <p className="mt-4 leading-7 text-slate-300">
                  Le site est pensé comme une vraie page de vente de serveurs : des offres lisibles, une hiérarchie claire, un matériel mis en avant avec sérieux et une promesse commerciale qui rassure immédiatement.
                </p>

                <div className="mt-8 space-y-4">
                  {proofPoints.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                      <p className="text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-8">
        <div className="section-shell">
          <div className="glass-card grid gap-6 p-6 md:grid-cols-4 md:p-8">
            <div>
              <div className="text-sm text-slate-400">Performance</div>
              <div className="mt-2 text-lg font-semibold text-white">Des ressources propres pour une meilleure fluidité</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Support</div>
              <div className="mt-2 text-lg font-semibold text-white">Un accompagnement humain quand il faut avancer vite</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Positionnement</div>
              <div className="mt-2 text-lg font-semibold text-white">Une offre premium pensée pour inspirer confiance</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Évolution</div>
              <div className="mt-2 text-lg font-semibold text-white">Une base claire pour grandir sans friction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-8">
        <div className="section-shell">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="glass-card p-5">
              <div className="text-sm text-slate-400">Latence</div>
              <div className="mt-2 text-xl font-bold text-white">Infrastructure orientée fluidité</div>
            </div>
            <div className="glass-card p-5">
              <div className="text-sm text-slate-400">Backups</div>
              <div className="mt-2 text-xl font-bold text-white">Sauvegardes quotidiennes</div>
            </div>
            <div className="glass-card p-5">
              <div className="text-sm text-slate-400">Upgrade path</div>
              <div className="mt-2 text-xl font-bold text-white">Évolution simple</div>
            </div>
            <div className="glass-card p-5">
              <div className="text-sm text-slate-400">Support</div>
              <div className="mt-2 text-xl font-bold text-white">Aide humaine</div>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="relative z-10 py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.35em] text-primary">Nos offres</div>
            <h2 className="section-title mt-4">Des formules pensées pour vendre de vrais serveurs, pas juste des chiffres.</h2>
            <p className="section-copy mt-5">
              Chaque offre est construite pour être lisible, crédible et simple à comparer. L’objectif est de permettre au visiteur de se projeter immédiatement sur la bonne formule selon son type de serveur.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {offers.map((offer) => (
              <article
                key={offer.name}
                className={`glass-card relative flex flex-col overflow-hidden p-6 ${offer.featured ? "ring-1 ring-accent shadow-cta" : ""}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-accentSoft" />
                {offer.featured ? (
                  <div className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                    Recommandé
                  </div>
                ) : null}
                <h3 className="text-2xl font-bold text-white">{offer.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{offer.label}</p>

                <div className="mt-6 text-4xl font-black text-white">{offer.price}</div>

                <div className="mt-6 space-y-3 text-slate-200">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{offer.cores}</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{offer.ram}</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{offer.storage}</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Support humain & évolution simple</div>
                </div>

                <a href="#contact" className="cta-primary mt-8">Commander cette offre</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="relative z-10 py-24">
        <div className="section-shell">
          <div className="glass-card overflow-hidden p-8 md:p-10">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.35em] text-primary">Pourquoi cette offre se démarque</div>
              <h2 className="section-title mt-4">Un vrai site de vente de serveurs doit montrer tout de suite pourquoi l’offre mérite son prix.</h2>
              <p className="section-copy mt-5">
                Ici, la différence ne se joue pas uniquement sur les ressources affichées. Elle se joue sur la perception, la qualité d’exploitation, la lisibilité de l’offre et la confiance dégagée par l’ensemble du service.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[720px] rounded-3xl border border-white/10 bg-white/5">
                <div className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-white/10 text-sm uppercase tracking-[0.2em] text-slate-400">
                  <div className="p-5">Critère</div>
                  <div className="border-l border-white/10 p-5 text-white">Approche premium</div>
                  <div className="border-l border-white/10 p-5">Host budget classique</div>
                </div>
                {comparison.map((row) => (
                  <div key={row.label} className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-white/10 last:border-b-0">
                    <div className="p-5 font-semibold text-white">{row.label}</div>
                    <div className="border-l border-white/10 p-5 text-slate-200">{row.premium}</div>
                    <div className="border-l border-white/10 p-5 text-slate-400">{row.budget}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="relative z-10 py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-primary">L’ADN de l’offre</div>
            <h2 className="section-title mt-4">Une proposition plus forte pour les joueurs et communautés qui veulent un serveur traité sérieusement.</h2>
            <p className="section-copy mt-5">
              Le but n’est pas de parler à tout le marché. Le but est d’attirer les clients qui recherchent une vraie base technique, une image propre et une prestation capable d’accompagner un serveur dans le temps.
            </p>

            <div className="glass-card mt-8 p-6 md:p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Crédibilité matérielle</div>
              <div className="mt-3 text-3xl font-bold text-white">Ryzen 9 9950X3D + NVMe</div>
              <p className="mt-4 leading-7 text-slate-300">
                Le matériel est une preuve. Il montre que le service repose sur des bases sérieuses, avec de la marge de performance et une vraie logique premium derrière l’exploitation.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {advantages.map((item) => (
              <div key={item.title} className="glass-card p-6 md:p-7">
                <div className="text-xl font-bold text-white">{item.title}</div>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24">
        <div className="section-shell">
          <div className="mb-6 max-w-3xl">
            <div className="text-sm uppercase tracking-[0.35em] text-primary">Options & services</div>
            <h2 className="section-title mt-4">Une offre serveur qui peut évoluer avec votre projet.</h2>
            <p className="section-copy mt-5">
              Le site doit aussi montrer que le service n’est pas figé. Vous pouvez démarrer proprement, puis ajouter les options qui correspondent réellement à votre besoin.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {addons.map((item) => (
              <div key={item.name} className="glass-card p-6">
                <div className="text-xl font-bold text-white">{item.name}</div>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card p-8 md:p-10">
            <div className="text-sm uppercase tracking-[0.35em] text-primary">Preuves & confiance</div>
            <h2 className="section-title mt-4">Des éléments concrets qui donnent au site une vraie force commerciale.</h2>
            <p className="section-copy mt-5">
              Un site qui vend des serveurs doit inspirer confiance sans surjouer. Les bonnes preuves, les bons signaux et la bonne présentation rendent l’offre plus crédible et plus désirable dès les premières secondes.
            </p>
            <div className="mt-8 grid gap-4">
              {trust.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card grid gap-8 p-8 md:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-primary">Accompagnement & confiance</div>
              <h2 className="section-title mt-4">Pensé pour faciliter la décision et donner envie de commander.</h2>
              <p className="section-copy mt-5">
                Un bon site de vente de serveurs doit rassurer vite. Cela passe par des offres compréhensibles, une aide à la migration, des arguments concrets et un discours qui montre immédiatement le sérieux du service.
              </p>
            </div>

            <div className="grid gap-4">
              {onboarding.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24">
        <div className="section-shell">
          <div className="glass-card p-8 md:p-10">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.35em] text-primary">FAQ</div>
              <h2 className="section-title mt-4">Les réponses aux vraies objections d’un acheteur premium.</h2>
            </div>

            <div className="mt-10 grid gap-4">
              {faq.map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
                  <div className="text-lg font-semibold text-white">{item.q}</div>
                  <p className="mt-3 leading-7 text-slate-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24">
        <div className="section-shell">
          <div className="glass-card grid gap-6 p-8 md:grid-cols-3 md:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-primary">Infrastructure</div>
              <div className="mt-3 text-2xl font-bold text-white">Base matérielle haut de gamme</div>
              <p className="mt-4 leading-7 text-slate-300">
                Une présentation pensée pour montrer que le service repose sur un matériel sérieux et une logique d’exploitation propre.
              </p>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-primary">Usage</div>
              <div className="mt-3 text-2xl font-bold text-white">Survie, communauté, moddé</div>
              <p className="mt-4 leading-7 text-slate-300">
                Le site parle autant aux petits serveurs privés qu’aux projets plus ambitieux qui ont besoin d’une base plus rassurante.
              </p>
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-primary">Vente</div>
              <div className="mt-3 text-2xl font-bold text-white">Une vraie page de vente serveur</div>
              <p className="mt-4 leading-7 text-slate-300">
                La structure est désormais pensée pour vendre : offres claires, arguments visibles, comparaison, confiance et appel à l’action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-24">
        <div className="section-shell">
          <div className="glass-card grid gap-8 p-8 md:grid-cols-[1fr_1fr] md:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-primary">Contact</div>
              <h2 className="section-title mt-4">Prêt à transformer cette base en vraie marque d’hébergement ?</h2>
              <p className="section-copy mt-5">
                Cette version pose déjà le bon décor : une vraie page de vente orientée serveur, un ton premium et une structure pensée pour convaincre. Le nom, le Discord et les contacts pourront venir juste après.
              </p>

              <div className="mt-8 space-y-4 text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Nom de marque : placeholder pour l’instant</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Discord : à ajouter plus tard</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Email : à ajouter plus tard</div>
              </div>
            </div>

            <div className="glass-card border-white/10 bg-white/5 p-6">
              <div className="text-xl font-bold text-white">Prêt pour Git / Vercel</div>
              <div className="mt-6 space-y-4 text-slate-200">
                <div className="rounded-2xl border border-white/10 px-4 py-4">1. Finaliser plus tard le nom de marque</div>
                <div className="rounded-2xl border border-white/10 px-4 py-4">2. Ajouter le vrai Discord, le contact et les visuels finaux</div>
                <div className="rounded-2xl border border-white/10 px-4 py-4">3. Pousser les prochaines modifs sur Git et laisser Vercel redéployer</div>
                <div className="rounded-2xl border border-white/10 px-4 py-4">4. Ajouter ensuite checkout, emails et preuve sociale plus forte</div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#offers" className="cta-primary">Voir les offres</a>
                <a href="#home" className="cta-secondary">Retour en haut</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-bold tracking-[0.22em] text-white">FALCONHOST</div>
            <div className="mt-2 text-sm text-slate-400">Hébergement Minecraft premium pensé pour la performance, la stabilité et une image sérieuse.</div>
          </div>

          <div className="grid gap-2 text-sm text-slate-400 md:text-right">
            <div>Ryzen 9 9950X3D · NVMe · Support humain</div>
            <div>Nom, Discord et email à finaliser</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
