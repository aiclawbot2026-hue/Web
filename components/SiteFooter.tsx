import { getDictionary, Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export function SiteFooter({ locale }: Props) {
  const dict = getDictionary(locale);

  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-bold tracking-[0.22em] text-white">{dict.brand.name}</div>
          <div className="mt-2 text-sm text-slate-400">{dict.footer.tagline}</div>
        </div>

        <div className="grid gap-2 text-sm text-slate-400 md:text-right">
          <div>{dict.footer.summary}</div>
          <div>{dict.footer.contact}</div>
        </div>
      </div>
    </footer>
  );
}
