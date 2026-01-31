import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const stormGust = localFont({
  src: "./assets/Storm Gust.otf",
  variable: "--font-storm-gust",
});

const styro = localFont({
  src: [
    {
      path: "./assets/fonts/Styro/Styro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/Styro/Styro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-styro",
});

const BASE_URL = "https://ikerguerra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Iker Guerra | Full Stack Developer Portfolio",
    template: "%s | Iker Guerra",
  },
  description: "Desarrollador Full Stack especializado en el desarrollo de plataformas multi-tenant, webapps corporativas y soluciones escalables con Next.js, React y Node.js.",
  keywords: ["Iker Guerra", "Full Stack Developer", "Next.js", "React", "TypeScript", "Node.js", "Portfolio", "Desarrollador Web", "España"],
  authors: [{ name: "Iker Guerra" }],
  creator: "Iker Guerra",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BASE_URL,
    title: "Iker Guerra | Full Stack Developer",
    description: "Explora los proyectos y la carrera de Iker Guerra, Desarrollador Full Stack experto en soluciones modernas y escalables.",
    siteName: "Iker Guerra Portfolio",
    images: [
      {
        url: "/iker-guerra-og.png",
        width: 1200,
        height: 630,
        alt: "Iker Guerra - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iker Guerra | Full Stack Developer",
    description: "Desarrollador Full Stack especializado en Next.js y React.",
    images: ["/iker-guerra-og.png"],
    creator: "@ikerguerra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "w6smJe1jzAywMG56URRibLgECL0A2ZUE2PsrDWTROlM",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Iker Guerra",
  url: BASE_URL,
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://www.linkedin.com/in/ikerguerra",
    "https://github.com/ikerguerra",
  ],
  description: "Desarrollador Full Stack especializado en Next.js, React y escalabilidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${stormGust.variable} ${styro.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
