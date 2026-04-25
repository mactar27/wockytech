import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WockyTech | Technologies Souveraines",
  description: "Dossier Opérationnelle de l'Architecte Amadou Mactar Ndiaye. Architectures souveraines, systèmes sécurisés et solutions logicielles critiques.",
  metadataBase: new URL("https://wockytech.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WockyTech | Technologies Souveraines",
    description: "Architectures souveraines, systèmes sécurisés et solutions logicielles critiques par Amadou Mactar Ndiaye.",
    url: "https://wockytech.xyz",
    siteName: "WockyTech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WockyTech - Technologies Souveraines",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WockyTech | Technologies Souveraines",
    description: "Architectures souveraines, systèmes sécurisés et solutions logicielles critiques.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
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
