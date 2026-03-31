type Item = {
  q: string;
  a: string;
};

type Props = {
  items: readonly Item[];
};

export function FaqAccordion({ items }: Props) {
  return (
    <div className="mt-10 grid gap-4">
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white marker:content-none">
            <span>{item.q}</span>
            <span className="text-xl text-slate-400 transition group-open:rotate-45 group-open:text-white">+</span>
          </summary>
          <p className="mt-4 max-w-4xl leading-7 text-slate-300">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
