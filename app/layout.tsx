import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FALCONHOST — Premium Minecraft Hosting",
  description:
    "Premium Minecraft hosting for communities that want stability, clear scaling, and real human support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
