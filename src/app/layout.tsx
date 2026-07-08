import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { t } from "@/lib/i18n";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: `${t.siteName} — ${t.siteTagline}`,
    template: `%s | ${t.siteName}`,
  },
  description: t.siteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-carta text-ink min-h-screen flex flex-col antialiased">
        <header className="bg-ink text-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-display font-bold tracking-tight">
              <span className="text-signal">◈</span> {t.siteName}
            </a>
            <span className="text-sm text-white/60 hidden sm:inline">
              {t.siteTagline}
            </span>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-ink text-white/60 text-xs">
          <div className="max-w-6xl mx-auto px-4 py-6 space-y-2">
            <p className="font-display font-semibold text-white/80">{t.footer}</p>
            <p>{t.footerDisclaimer}</p>
            <p className="text-white/40 border-t border-white/10 pt-3 mt-3">
              {t.disclaimer}
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
