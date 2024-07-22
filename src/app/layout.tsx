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
      <body className="bg-gradient-to-r from-slate-500 to-slate-800">{children}</body>
    </html>
  );
}
