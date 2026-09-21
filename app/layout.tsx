import type { Metadata } from "next";
import { profile } from "@/content/resume";
import "./globals.css";

const SITE = "https://mohanlal.dev"; // ← change to your real domain after deploying

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: `${profile.name} — ${profile.role}`,
  description: profile.positioning,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.positioning,
    url: SITE,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.positioning,
  },
  robots: { index: true, follow: true },
};

// Applies the saved theme before first paint so there's no flash.
const themeScript = `
(function(){try{
  var t = localStorage.getItem('theme');
  if(!t){ t = matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'; }
  document.documentElement.setAttribute('data-theme', t);
}catch(e){ document.documentElement.setAttribute('data-theme','dark'); }})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
