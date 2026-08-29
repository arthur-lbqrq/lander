import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  keywords: [
    "landing page",
    "landing pages",
    "criação de landing pages",
    "desenvolvimento web",
    "alta conversão",
    "pequenos negócios",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

const DIRECTION_CONTRACT = `
THESIS: The page reads as one industrial control-panel fascia — every metric, process step, and CTA is a labeled instrument or switch, not a stat, list, or link.
OWN-WORLD: Inherited Midnight Console tokens (ink/paper/accent/surface/line/muted; Space Grotesk/Inter/JetBrains Mono). One approved amendment: gauge and dial faces carry a 1px inset bezel, the system's only depth beyond the hero's existing lifted browser-mockup.
STORY: A visitor reads real performance off analog dials, then throws the switch-styled WhatsApp CTA to start.
FIRST VIEWPORT: Hero composition unchanged — the accent-lit "converter" already is the panel's indicator LED; the browser-mockup stays the one lifted object.
FORM: Painel de Controle Industrial — dealt lead of 7 derived structures, seed 2d0a930c, scope surface, mode persuade.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        {/* Static, hardcoded audit trail (no user input); dangerouslySetInnerHTML
            is the only way to emit a real HTML comment that survives the
            production build, since a JSX comment is stripped at compile time. */}
        <div
          style={{ display: "contents" }}
          dangerouslySetInnerHTML={{ __html: `<!--${DIRECTION_CONTRACT}-->` }}
        />
        {children}
      </body>
    </html>
  );
}
