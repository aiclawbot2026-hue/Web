type Props = {
  eyebrow: string;
  title: string;
  intro: string;
};

export function PageHero({ eyebrow, title, intro }: Props) {
  return (
    <section className="relative z-10 py-24 md:py-28">
      <div className="section-shell">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.35em] text-primary">{eyebrow}</div>
          <h1 className="section-title mt-4">{title}</h1>
          <p className="section-copy mt-6 max-w-3xl">{intro}</p>
        </div>
      </div>
    </section>
  );
}
