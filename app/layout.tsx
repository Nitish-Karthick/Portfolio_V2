import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

// Using Geist from Next.js 15 defaults or google font if available, but since Next.js 15 uses localFont for Geist, I'll use next/font/google if Geist is available, else import from google
// Actually, Geist is available in next/font/google now, but let's just use the CDN link in layout or localFont if we download it. Wait, the easiest is to add the Google Font link for Geist and Material Symbols to maintain exact fidelity without downloading.
// Since Next 15 comes with Geist local fonts in the template, I can use those if they exist, but it's simpler to just use Google Fonts as in the original html.

export const metadata: Metadata = {
  title: "Nitish Karthick",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-on-surface selection:bg-primary selection:text-on-primary`}
        style={{ '--font-geist-sans': '"Geist", sans-serif' } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
