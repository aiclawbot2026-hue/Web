const offers = [
  {
    name: "Starter",
    price: "$15.99/mo",
    cores: "2 vCores",
    ram: "4 GB RAM",
    storage: "40 GB NVMe",
    label: "For private worlds and smaller servers",
  },
  {
    name: "Community",
    price: "$24.99/mo",
    cores: "3 vCores",
    ram: "6 GB RAM",
    storage: "60 GB NVMe",
    label: "For growing communities that need headroom",
    featured: true,
  },
  {
    name: "Performance",
    price: "$34.99/mo",
    cores: "4 vCores",
    ram: "8 GB RAM",
    storage: "90 GB NVMe",
    label: "For smoother gameplay and busier setups",
  },
  {
    name: "Managed Modded",
    price: "$54.99/mo",
    cores: "6 vCores",
    ram: "12 GB RAM",
    storage: "140 GB NVMe",
    label: "For heavier modpacks and more involved projects",
  },
];

const advantages = [
  {
    title: "Premium positioning backed by real hardware",
    text: "Ryzen 9 9950X3D and fast NVMe storage are not there for decoration. They support a cleaner performance profile and a more credible premium offer.",
  },
  {
    title: "Built for people who want fewer headaches",
    text: "The offer is designed around stability, clean plan structure and direct help, instead of chasing the lowest possible price point.",
  },
  {
    title: "Upgrade paths that make sense",
    text: "As your map, plugins, backups and player count grow, the service is positioned to evolve cleanly instead of forcing a messy rebuild.",
  },
  {
    title: "Human support that feels real",
    text: "The value is not just specs on a page. It is responsive guidance, migration help, practical answers and a more hands-on relationship.",
  },
];

const faq = [
  {
    q: "Why would I choose this over a cheaper host?",
    a: "Because this is not built to win a race to the bottom. The value is in cleaner resource allocation, more direct help, a more serious presentation and a smoother upgrade path as your server grows.",
  },
  {
    q: "Is this a good fit for modded servers?",
    a: "Yes, especially on the higher plans. The Managed Modded offer is positioned for heavier setups, larger worlds and communities that need more breathing room.",
  },
  {
    q: "Can you promise zero lag?",
    a: "No honest host should promise that in every situation. What this offer does promise is more careful sizing, stronger foundations and real help when your server needs tuning or more headroom.",
  },
  {
    q: "What happens if my server grows?",
    a: "That is part of the premium promise. You start with a plan that fits today, then scale RAM and storage in a cleaner way when growth is actually justified.",
  },
];

const proofPoints = [
  "Ryzen 9 9950X3D hardware focus",
  "Daily backup positioning",
  "Migration help and hands-on support",
  "Simple upgrade path when your server grows",
];

const onboarding = [
  "Clear starting plans instead of a confusing catalog",
  "Help for server sizing, migrations and next steps",
  "A calmer, more serious premium tone for the US market",
  "Built on Vercel now, ready for stronger sales flow later",
];

const comparison = [
  {
    label: "Positioning",
    premium: "Premium boutique hosting for communities that value stability",
    budget: "Mass-market hosting built to compete mainly on price",
  },
  {
    label: "Support",
    premium: "Human, direct and more hands-on when you need help",
    budget: "Often more generic and volume-oriented",
  },
  {
    label: "Growth path",
    premium: "Cleaner upgrades as RAM, storage and usage grow",
    budget: "Can feel more rigid or less guided",
  },
  {
    label: "Sales promise",
    premium: "Reliability, trust and smoother operations",
    budget: "Cheap entry pricing and convenience first",
  },
];

const trust = [
  "Daily backups positioned as standard operational discipline",
  "Migration help to reduce switching friction",
  "Clear plan structure without bloated checkout confusion",
  "Premium tone that makes the service feel serious from first contact",
];

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#050b14] text-white">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,122,24,0.18),transparent_20%),radial-gradient(circle_at_80%_15%,rgba(90,168,255,0.2),transparent_24%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:auto,auto,48px_48px,48px_48px]" />
      <div className="absolute left-[-10%] top-[12%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-[-8%] top-[32%] h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <header className="relative z-10 border-b border-white/10 backdrop-blur-md">
        <div className="section-shell flex items-center justify-between py-5">
          <div>
            <div className="text-lg font-bold tracking-[0.22em] text-white">FALCONHOST</div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Premium Minecraft Hosting</div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-200 md:flex">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#offers" className="hover:text-white">Plans</a>
            <a href="#comparison" className="hover:text-white">Compare</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a href="#contact" className="cta-secondary">Talk about your server</a>
        </div>
      </header>

      <section id="home" className="relative z-10">
        <div className="section-shell grid min-h-[92vh] items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary shadow-glow">
              Premium hosting infrastructure · Ryzen 9 9950X3D
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] text-white md:text-7xl xl:text-[5.5rem]">
              Premium Minecraft hosting with serious hardware, calmer operations and real human support.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Built for communities that want more than a cheap panel and a generic support queue. This is a cleaner, more premium hosting experience with room to grow.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#offers" className="cta-primary">View plans</a>
              <a href="#comparison" className="cta-secondary">See the difference</a>
            </div>

            <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
              <div className="glass-card p-5">
                <div className="text-sm text-slate-400">Hardware focus</div>
                <div className="mt-2 text-xl font-bold text-white">Ryzen 9 9950X3D</div>
              </div>
              <div className="glass-card p-5">
                <div className="text-sm text-slate-400">Storage</div>
                <div className="mt-2 text-xl font-bold text-white">Fast NVMe</div>
              </div>
              <div className="glass-card p-5">
                <div className="text-sm text-slate-400">Operating style</div>
                <div className="mt-2 text-xl font-bold text-white">Premium, clean, serious</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
            <div className="glass-card relative overflow-hidden p-6 shadow-glow md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(90,168,255,0.18),transparent_30%)]" />
              <div className="relative">
                <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Premium sales angle</div>
                <h2 className="mt-4 text-3xl font-bold text-white">Not the cheapest host. Built to feel more stable, more serious and easier to trust.</h2>
                <p className="mt-4 leading-7 text-slate-300">
                  The page leans into premium boutique hosting: better perception, better support language, stronger trust cues and a hardware story that reinforces the offer instead of replacing it.
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
              <div className="text-sm text-slate-400">Promise</div>
              <div className="mt-2 text-lg font-semibold text-white">Cleaner performance with room to grow</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Support</div>
              <div className="mt-2 text-lg font-semibold text-white">Human help instead of generic replies</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Sales angle</div>
              <div className="mt-2 text-lg font-semibold text-white">Premium service, not price war hosting</div>
            </div>
            <div>
              <div className="text-sm text-slate-400">Launch path</div>
              <div className="mt-2 text-lg font-semibold text-white">Simple start, clear next step later</div>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="relative z-10 py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.35em] text-primary">Plans</div>
            <h2 className="section-title mt-4">Start with a clean setup. Upgrade only when your server really needs it.</h2>
            <p className="section-copy mt-5">
              A premium offer does not need ten confusing plans. It needs a structure that feels clear, scalable and reassuring for people who care about long-term server quality.
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
                    Most balanced
                  </div>
                ) : null}
                <h3 className="text-2xl font-bold text-white">{offer.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{offer.label}</p>

                <div className="mt-6 text-4xl font-black text-white">{offer.price}</div>

                <div className="mt-6 space-y-3 text-slate-200">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{offer.cores}</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{offer.ram}</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{offer.storage}</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Human support & clean upgrades</div>
                </div>

                <a href="#contact" className="cta-primary mt-8">Choose this plan</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="relative z-10 py-24">
        <div className="section-shell">
          <div className="glass-card overflow-hidden p-8 md:p-10">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.35em] text-primary">Comparison</div>
              <h2 className="section-title mt-4">A premium host should feel different before the customer even checks out.</h2>
              <p className="section-copy mt-5">
                This is the positioning difference: not cheaper, but cleaner. Not louder, but more trustworthy. Not overloaded with gimmicks, but easier to understand and easier to grow with.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[720px] rounded-3xl border border-white/10 bg-white/5">
                <div className="grid grid-cols-[0.9fr_1fr_1fr] border-b border-white/10 text-sm uppercase tracking-[0.2em] text-slate-400">
                  <div className="p-5">Area</div>
                  <div className="border-l border-white/10 p-5 text-white">Premium approach</div>
                  <div className="border-l border-white/10 p-5">Typical budget host</div>
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
            <div className="text-sm uppercase tracking-[0.35em] text-primary">Why this premium angle works</div>
            <h2 className="section-title mt-4">A stronger offer for buyers who care more about reliability than cheap pricing.</h2>
            <p className="section-copy mt-5">
              The point is not to attract everyone. The point is to attract server owners, communities and modded projects that want cleaner operations, more trust and a host that feels more involved.
            </p>

            <div className="glass-card mt-8 p-6 md:p-8">
              <div className="text-sm uppercase tracking-[0.3em] text-slate-400">Hardware credibility</div>
              <div className="mt-3 text-3xl font-bold text-white">Ryzen 9 9950X3D + NVMe</div>
              <p className="mt-4 leading-7 text-slate-300">
                The hardware is a proof point. It shows the service is built on serious foundations, with performance headroom and a more premium operating philosophy behind it.
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
        <div className="section-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card p-8 md:p-10">
            <div className="text-sm uppercase tracking-[0.35em] text-primary">Proof & trust</div>
            <h2 className="section-title mt-4">Trust cues that make premium believable.</h2>
            <p className="section-copy mt-5">
              Premium hosting is not just a design style. It needs visible operational signals that tell the buyer this service is cared for, structured properly and ready to support a serious server.
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
              <div className="text-sm uppercase tracking-[0.35em] text-primary">Onboarding & trust</div>
              <h2 className="section-title mt-4">Made to reduce buying friction.</h2>
              <p className="section-copy mt-5">
                Premium only works if the customer feels guided. That means clear plans, migration help, backup language that feels concrete and support that sounds human from the first message.
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
              <h2 className="section-title mt-4">Answers for the objections premium buyers actually have.</h2>
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

      <section id="contact" className="relative z-10 py-24">
        <div className="section-shell">
          <div className="glass-card grid gap-8 p-8 md:grid-cols-[1fr_1fr] md:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-primary">Contact</div>
              <h2 className="section-title mt-4">Ready to turn this into a real premium brand?</h2>
              <p className="section-copy mt-5">
                This version is built to sell the right positioning first. The brand name, Discord and email can be added later without changing the overall premium sales structure.
              </p>

              <div className="mt-8 space-y-4 text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Brand name: placeholder for now</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Discord: to be added later</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Email: to be added later</div>
              </div>
            </div>

            <div className="glass-card border-white/10 bg-white/5 p-6">
              <div className="text-xl font-bold text-white">Ready for Git / Vercel</div>
              <div className="mt-6 space-y-4 text-slate-200">
                <div className="rounded-2xl border border-white/10 px-4 py-4">1. Finalize the placeholder brand later</div>
                <div className="rounded-2xl border border-white/10 px-4 py-4">2. Add real Discord, contact path and final assets</div>
                <div className="rounded-2xl border border-white/10 px-4 py-4">3. Push to Git and import into Vercel</div>
                <div className="rounded-2xl border border-white/10 px-4 py-4">4. Add checkout, email flows and stronger social proof later</div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#offers" className="cta-primary">View plans</a>
                <a href="#home" className="cta-secondary">Back to top</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
