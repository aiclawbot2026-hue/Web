import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function SiteShell({ children }: Props) {
  return (
    <main className="relative overflow-hidden bg-[#050b14] text-white">
      <div
        className="absolute inset-0 bg-cover bg-[center_right] bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg-generated-v2.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,16,0.95)_0%,rgba(4,9,18,0.78)_42%,rgba(3,8,16,0.93)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(92,138,255,0.14),transparent_24%)]" />
      <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-[-6%] top-[34%] h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      {children}
    </main>
  );
}
