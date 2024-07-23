import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "LinkBio - Rodrigo Almeida",
  description: "Gerado por Nitcho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
