import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteShell } from "@/components/SiteShell";
import {
  getDictionary,
  getLocalizedHref,
  getPageFromSlug,
  isValidLocale,
  Locale,
  locales,
  routeSlugs,
} from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = {
  params: { lang: string; slug?: string[] };
};

export async function generateStaticParams() {
  const params: Array<{ lang: string; slug?: string[] }> = [];

  for (const lang of locales) {
    params.push({ lang });
    params.push({ lang, slug: [routeSlugs[lang].offers] });
    params.push({ lang, slug: [routeSlugs[lang].why] });
    params.push({ lang, slug: [routeSlugs[lang].support] });
    params.push({ lang, slug: [routeSlugs[lang].faq] });
    params.push({ lang, slug: [routeSlugs[lang].contact] });
  }

  return params;
}

export default function LocalizedPage({ params }: Props) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const locale = params.lang as Locale;
  const dict = getDictionary(locale);
  const slug = params.slug?.[0];
  const page = getPageFromSlug(locale, slug);

  if (page === null) {
    notFound();
  }

  const offersHref = getLocalizedHref(locale, "offers");
  const whyHref = getLocalizedHref(locale, "why");
  const supportHref = getLocalizedHref(locale, "support");
  const faqHref = getLocalizedHref(locale, "faq");
  const contactHref = getLocalizedHref(locale, "contact");

  const pricingGrid = (
    <div className="grid gap-6 lg:grid-cols-4">
      {dict.offers.items.map((offer) => {
        const isFeatured = offer.featured === true;

        return (
          <article
            key={offer.name}
            className={`pricing-card relative flex h-full flex-col overflow-hidden p-6 ${isFeatured ? "featured-card scale-[1.02]" : ""}`}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-accentSoft" />
            {isFeatured ? (
              <div className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">
                {dict.offers.featured}
              </div>
            ) : null}

            <div className="text-2xl font-bold text-white">{offer.name}</div>
            <div className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-400">{dict.offers.bestForLabel}</div>
            <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-300">{offer.fit}</p>
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

            <Link href={contactHref} className="cta-primary mt-8 w-full">{dict.offers.cta}</Link>
          </article>
        );
      })}
    </div>
  );

  return (
    <SiteShell>
      <SiteHeader locale={locale} />

      {page === "home" ? (
        <>
          <section className="relative z-10">
            <div className="section-shell grid min-h-[80vh] items-center gap-16 py-24 md:grid-cols-[1.08fr_0.92fr] md:py-36">
              <div>
                <div className="mb-5 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary shadow-glow backdrop-blur-md">
                  {dict.hero.badge}
                </div>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.94] text-white md:text-7xl xl:text-[5.2rem]">
                  {dict.hero.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                  {dict.hero.subtitle}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href={offersHref} className="cta-primary">{dict.hero.primaryCta}</Link>
                  <Link href={contactHref} className="cta-secondary">{dict.hero.secondaryCta}</Link>
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
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-accent/15 blur-2xl" />
                <div className="glass-card relative overflow-hidden p-8 shadow-glow md:p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(90,168,255,0.14),transparent_30%)]" />
                  <div className="relative">
                    <div className="text-sm uppercase tracking-[0.35em] text-primary">{dict.support.eyebrow}</div>
                    <h2 className="mt-4 text-3xl font-bold text-white">{dict.support.homeTitle}</h2>
                    <p className="mt-5 max-w-xl leading-7 text-slate-300">{dict.support.homePreview}</p>
                    <Link href={supportHref} className="cta-secondary mt-8 w-fit">{dict.home.supportCta}</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative z-10 py-32">
            <div className="section-shell">
              <div className="mx-auto max-w-2xl text-center">
                <div className="text-sm uppercase tracking-[0.35em] text-primary">{dict.offers.eyebrow}</div>
                <h2 className="section-title mt-4">{dict.offers.homeTitle}</h2>
              </div>
              <div className="mt-18 mt-16">{pricingGrid}</div>
            </div>
          </section>

          <section className="relative z-10 py-32">
            <div className="section-shell">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <div className="text-sm uppercase tracking-[0.35em] text-primary">{dict.why.eyebrow}</div>
                  <h2 className="section-title mt-4">{dict.why.homeTitle}</h2>
                </div>
                <Link href={whyHref} className="cta-secondary w-fit">{dict.home.whyCta}</Link>
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

          <section className="relative z-10 py-32">
            <div className="section-shell grid gap-6 lg:grid-cols-2">
              <div className="glass-card p-8 md:p-10">
                <div className="text-sm uppercase tracking-[0.35em] text-primary">{dict.faq.eyebrow}</div>
                <h2 className="section-title mt-4">{dict.faq.homeTitle}</h2>
                <FaqAccordion items={dict.faq.homeItems} />
                <Link href={faqHref} className="cta-secondary mt-8 w-fit">{dict.home.faqCta}</Link>
              </div>

              <div className="glass-card p-8 md:p-10">
                <div className="text-sm uppercase tracking-[0.35em] text-primary">{dict.contact.eyebrow}</div>
                <h2 className="section-title mt-4">{dict.contact.homePreviewTitle}</h2>
                <p className="section-copy mt-5 max-w-xl">{dict.contact.homePreviewText}</p>
                <div className="mt-8 grid gap-4">
                  {dict.contact.cards.slice(0, 2).map((card) => (
                    <div key={card.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="text-sm text-slate-400">{card.label}</div>
                      <div className="mt-2 text-lg font-semibold text-white">{card.value}</div>
                    </div>
                  ))}
                </div>
                <Link href={contactHref} className="cta-secondary mt-8 w-fit">{dict.home.contactCta}</Link>
              </div>
            </div>
          </section>

          <section className="relative z-10 py-32">
            <div className="section-shell">
              <div className="glass-card p-8 text-center md:p-12">
                <div className="mx-auto max-w-3xl">
                  <h2 className="section-title">{dict.home.finalTitle}</h2>
                  <p className="section-copy mt-5">{dict.home.finalText}</p>
                </div>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href={offersHref} className="cta-primary">{dict.home.finalPrimary}</Link>
                  <Link href={contactHref} className="cta-secondary">{dict.home.finalSecondary}</Link>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}

      {page === "offers" ? (
        <>
          <PageHero eyebrow={dict.offers.eyebrow} title={dict.offers.pageTitle} intro={dict.offers.pageIntro} />
          <section className="relative z-10 py-6 pb-28">
            <div className="section-shell">
              {pricingGrid}
              <div className="mt-16 grid gap-6 lg:grid-cols-2">
                {dict.offers.items.map((offer) => (
                  <div key={offer.name} className="glass-card p-6 md:p-7">
                    <div className="text-2xl font-bold text-white">{offer.name}</div>
                    <p className="mt-4 leading-7 text-slate-300">{offer.details}</p>
                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
                      <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Upgrade path</div>
                      <div className="mt-3 leading-7">{offer.upgrade}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card mt-16 grid gap-6 p-8 md:grid-cols-[1fr_auto_auto] md:items-center md:p-10">
                <div>
                  <div className="text-2xl font-bold text-white">{dict.offers.finalCtaTitle}</div>
                  <p className="mt-3 leading-7 text-slate-300">{dict.offers.finalCtaText}</p>
                </div>
                <Link href={contactHref} className="cta-primary">{dict.offers.finalPrimary}</Link>
                <a href="https://discord.gg/falconhost" className="cta-secondary">{dict.offers.finalSecondary}</a>
              </div>
            </div>
          </section>
        </>
      ) : null}

      {page === "why" ? (
        <>
          <PageHero eyebrow={dict.why.eyebrow} title={dict.why.pageTitle} intro={dict.why.pageIntro} />
          <section className="relative z-10 py-6 pb-28">
            <div className="section-shell">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {dict.why.items.map((item) => (
                  <div key={item.title} className="glass-card p-6 md:p-7">
                    <div className="text-xl font-bold text-white">{item.title}</div>
                    <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 grid gap-6 lg:grid-cols-2">
                {dict.why.deep.map((item) => (
                  <div key={item.title} className="glass-card p-6 md:p-8">
                    <div className="text-2xl font-bold text-white">{item.title}</div>
                    <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : null}

      {page === "support" ? (
        <>
          <PageHero eyebrow={dict.support.eyebrow} title={dict.support.pageTitle} intro={dict.support.pageIntro} />
          <section className="relative z-10 py-6 pb-28">
            <div className="section-shell">
              <div className="grid gap-5">
                {dict.support.items.map((item) => (
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

              <div className="mt-16 grid gap-6 lg:grid-cols-2">
                {dict.support.deep.map((item) => (
                  <div key={item.title} className="glass-card p-6 md:p-8">
                    <div className="text-2xl font-bold text-white">{item.title}</div>
                    <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : null}

      {page === "faq" ? (
        <>
          <PageHero eyebrow={dict.faq.eyebrow} title={dict.faq.pageTitle} intro={dict.contact.pageIntro} />
          <section className="relative z-10 py-6 pb-28">
            <div className="section-shell">
              <div className="glass-card p-8 md:p-10">
                <FaqAccordion items={dict.faq.items} />
              </div>
            </div>
          </section>
        </>
      ) : null}

      {page === "contact" ? (
        <>
          <PageHero eyebrow={dict.contact.eyebrow} title={dict.contact.pageTitle} intro={dict.contact.pageIntro} />
          <section className="relative z-10 py-6 pb-28">
            <div className="section-shell">
              <div className="glass-card grid gap-8 p-8 md:grid-cols-[0.88fr_1.12fr] md:p-10">
                <div>
                  <div className="grid gap-4">
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
                      <input type="text" placeholder={dict.contact.placeholders.name} className="field-input" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">{dict.contact.fields.email}</label>
                      <input type="email" placeholder={dict.contact.placeholders.email} className="field-input" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">{dict.contact.fields.serverType}</label>
                      <input type="text" placeholder={dict.contact.placeholders.serverType} className="field-input" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">{dict.contact.fields.message}</label>
                      <textarea rows={5} placeholder={dict.contact.placeholders.message} className="field-input min-h-[140px] resize-y" />
                    </div>
                    <button type="submit" className="cta-primary w-full sm:w-auto">
                      {dict.contact.submit}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}

      <SiteFooter locale={locale} />
    </SiteShell>
  );
}
