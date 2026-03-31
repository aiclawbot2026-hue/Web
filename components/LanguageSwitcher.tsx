"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: Props) {
  const items: Locale[] = ["en", "fr"];
  const pathname = usePathname();
  const currentPath = pathname || `/${locale}`;
  const suffix = currentPath.replace(/^\/(en|fr)/, "") || "";

  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300 backdrop-blur-md">
      {items.map((item) => {
        const active = item === locale;
        return (
          <Link
            key={item}
            href={`/${item}${suffix}`}
            className={`rounded-full px-3 py-2 transition ${
              active ? "bg-white text-[#07111f]" : "text-slate-300 hover:text-white"
            }`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
