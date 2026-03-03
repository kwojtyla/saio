import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/layout/footer";
import { siteConfig } from "@/config/siteConfig";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: "Karol Wojtyla", url: "https://www.linkedin.com/in/karolwojtyla" }],
  metadataBase: new URL(siteConfig.url),
  icons: "/favicon.ico",
  generator: "Next.js",
  category: "website",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable} font-sans antialiased`}>
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
