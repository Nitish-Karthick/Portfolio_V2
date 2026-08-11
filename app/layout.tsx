import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-inter", // Reusing the same variable name to avoid changing tailwind config, though it's technically Archivo now
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
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
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet" />
      </head>
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} antialiased bg-background text-on-surface selection:bg-primary selection:text-on-primary`}
      >
        {children}
      </body>
    </html>
  );
}
