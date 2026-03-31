import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getDictionary, getLocalizedHref, Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export function SiteHeader({ locale }: Props) {
  const dict = getDictionary(locale);

  return (
    <header className="relative z-10 border-b border-white/10 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between gap-4 py-5">
        <Link href={`/${locale}`} className="block">
          <div className="text-lg font-bold tracking-[0.22em] text-white">{dict.brand.name}</div>
          <div className="text-xs uppercase tracking-[0.35em] text-slate-400">{dict.brand.tag}</div>
        </Link>

        <div className="flex items-center gap-3 md:gap-5">
          <nav className="hidden gap-7 text-sm text-slate-200 md:flex">
            <Link href={`/${locale}`} className="hover:text-white">{dict.nav.home}</Link>
            <Link href={getLocalizedHref(locale, "offers")} className="hover:text-white">{dict.nav.offers}</Link>
            <Link href={getLocalizedHref(locale, "why")} className="hover:text-white">{dict.nav.why}</Link>
            <Link href={getLocalizedHref(locale, "support")} className="hover:text-white">{dict.nav.support}</Link>
            <Link href={getLocalizedHref(locale, "faq")} className="hover:text-white">{dict.nav.faq}</Link>
            <Link href={getLocalizedHref(locale, "contact")} className="hover:text-white">{dict.nav.contact}</Link>
          </nav>
          <LanguageSwitcher locale={locale} />
          <Link href={getLocalizedHref(locale, "contact")} className="hidden md:inline-flex cta-secondary">
            {dict.nav.secondaryCta}
          </Link>
        </div>
      </div>
    </header>
  );
}
