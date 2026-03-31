import { FaqAccordion } from "@/components/FaqAccordion";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getDictionary, isValidLocale, Locale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = {
  params: { lang: string };
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function LocalizedPage({ params }: Props) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const locale = params.lang as Locale;
  const dict = getDictionary(locale);

  return (
    <main className="relative overflow-hidden bg-[#050b14] text-white">
      <div
        className="absolute inset-0 bg-cover bg-[center_right] bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg-generated-v2.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,16,0.94)_0%,rgba(4,9,18,0.74)_42%,rgba(3,8,16,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(92,138,255,0.16),transparent_24%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px,56px_56px]" />
      <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-[-6%] top-[34%] h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <header className="relative z-10 border-b border-white/10 backdrop-blur-md">
        <div className="section-shell flex items-center justify-between gap-4 py-5">
          <div>
            <div className="text-lg font-bold tracking-[0.22em] text-white">FALCONHOST</div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Minecraft Hosting</div>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <nav className="hidden gap-7 text-sm text-slate-200 md:flex">
              <a href="#offers" className="hover:text-white">{dict.nav.offers}</a>
              <a href="#why" className="hover:text-white">{dict.nav.why}</a>
              <a href="#advantage" className="hover:text-white">{dict.nav.advantage}</a>
              <a href="#faq" className="hover:text-white">{dict.nav.faq}</a>
              <a href="#contact" className="hover:text-white">{dict.nav.contact}</a>
            </nav>
            <LanguageSwitcher locale={locale} />
            <a href="#contact" className="hidden md:inline-flex cta-secondary">
              {dict.nav.secondaryCta}
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-10">
        <div className="section-shell grid min-h-[88vh] items-center gap-14 py-20 md:grid-cols-[1.06fr_0.94fr] md:py-28">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary shadow-glow backdrop-blur-md">
              {dict.hero.badge}
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.94] text-white md:text-7xl xl:text-[5.3rem]">
              {dict.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              {dict.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#offers" className="cta-primary">{dict.hero.primaryCta}</a>
              <a href="#contact" className="cta-secondary">{dict.hero.secondaryCta}</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {dict.hero.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />
            <div className="glass-card relative overflow-hidden p-6 shadow-glow md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(90,168,255,0.16),transparent_30%)]" />
              <div className="relative">
                <div className="text-sm uppercase tracking-[0.3em] text-slate-400">{dict.hero.panelLabel}</div>
                <h2 className="mt-4 text-3xl font-bold text-white">{dict.hero.panelTitle}</h2>

                <div className="mt-8 grid gap-4">
                  {dict.hero.panelItems.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                      <div className="text-sm text-slate-400">{item.label}</div>
                      <div className="mt-2 text-lg font-semibold text-white">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="relative z-10 py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm uppercase tracking-[0.35em] text-primary">{dict.offers.eyebrow}</div>
            <h2 className="section-title mt-4">{dict.offers.title}</h2>
            <p className="section-copy mt-5">{dict.offers.subtitle}</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {dict.offers.items.map((offer) => (
              <article
                key={offer.name}
                className={`pricing-card relative flex h-full flex-col overflow-hidden p-6 ${offer.featured ? "featured-card" : ""}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-accentSoft" />
                {offer.featured ? (
                  <div className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                    {dict.offers.featured}
                  </div>
                ) : null}

                <div className="text-2xl font-bold text-white">{offer.name}</div>
                <p className="mt-3 min-h-[84px] text-sm leading-6 text-slate-300">{offer.fit}</p>

                <div className="mt-5 text-4xl font-black text-white">{offer.price}</div>

                <div className="mt-6 space-y-3">
                  {offer.specs.map((spec) => (
                    <div key={spec} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  {offer.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <div>{benefit}</div>
                    </div>
                  ))}
                </div>

                <a href="#contact" className="cta-primary mt-8 w-full">{dict.offers.cta}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="relative z-10 py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.35em] text-primary">{dict.why.eyebrow}</div>
            <h2 className="section-title mt-4">{dict.why.title}</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {dict.why.items.map((item) => (
              <div key={item.title} className="glass-card p-6 md:p-7">
                <div className="text-xl font-bold text-white">{item.title}</div>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantage" className="relative z-10 py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-primary">{dict.advantage.eyebrow}</div>
            <h2 className="section-title mt-4">{dict.advantage.title}</h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-slate-300 md:text-lg">
              {dict.advantage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {dict.advantage.steps.map((item) => (
              <div key={item.step} className="glass-card flex gap-5 p-6 md:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <div className="text-xl font-bold text-white">{item.title}</div>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-10 py-24">
        <div className="section-shell">
          <div className="glass-card p-8 md:p-10">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.35em] text-primary">{dict.faq.eyebrow}</div>
              <h2 className="section-title mt-4">{dict.faq.title}</h2>
            </div>

            <FaqAccordion items={dict.faq.items} />
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 py-24">
        <div className="section-shell">
          <div className="glass-card grid gap-8 p-8 md:grid-cols-[0.95fr_1.05fr] md:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-primary">{dict.contact.eyebrow}</div>
              <h2 className="section-title mt-4">{dict.contact.title}</h2>
              <p className="section-copy mt-5">{dict.contact.subtitle}</p>

              <div className="mt-8 grid gap-4">
                {dict.contact.cards.map((card) => (
                  <div key={card.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm text-slate-400">{card.label}</div>
                    <div className="mt-2 text-lg font-semibold text-white">{card.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card border-white/10 bg-white/5 p-6 md:p-7">
              <div className="text-xl font-bold text-white">{dict.contact.formTitle}</div>
              <form className="mt-6 space-y-4">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">{dict.contact.fields.name}</label>
                  <input
                    type="text"
                    placeholder={dict.contact.placeholders.name}
                    className="field-input"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">{dict.contact.fields.email}</label>
                  <input
                    type="email"
                    placeholder={dict.contact.placeholders.email}
                    className="field-input"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">{dict.contact.fields.serverType}</label>
                  <input
                    type="text"
                    placeholder={dict.contact.placeholders.serverType}
                    className="field-input"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300">{dict.contact.fields.message}</label>
                  <textarea
                    rows={5}
                    placeholder={dict.contact.placeholders.message}
                    className="field-input min-h-[140px] resize-y"
                  />
                </div>
                <button type="submit" className="cta-primary w-full sm:w-auto">
                  {dict.contact.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="section-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-bold tracking-[0.22em] text-white">FALCONHOST</div>
            <div className="mt-2 text-sm text-slate-400">{dict.footer.tagline}</div>
          </div>

          <div className="grid gap-2 text-sm text-slate-400 md:text-right">
            <div>{dict.footer.summary}</div>
            <div>{dict.footer.contact}</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
