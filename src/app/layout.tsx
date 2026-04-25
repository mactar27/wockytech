import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WockyTech | Technologies Souveraines",
  description: "Dossier Opérationnelle de l'Architecte Amadou Mactar Ndiaye. Architectures souveraines, systèmes sécurisés et solutions logicielles critiques.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "WockyTech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
