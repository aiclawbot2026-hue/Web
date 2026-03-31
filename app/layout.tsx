import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hébergement Minecraft Premium",
  description:
    "Landing page premium pour une offre d’hébergement Minecraft sérieuse, rapide et propulsée par Ryzen 9 9950X3D.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
