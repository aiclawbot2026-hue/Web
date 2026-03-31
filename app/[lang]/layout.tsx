import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isValidLocale, Locale, locales } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!isValidLocale(params.lang)) {
    return {};
  }

  const dict = getDictionary(params.lang as Locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default function LocaleLayout({ children, params }: Props) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  return <>{children}</>;
}
