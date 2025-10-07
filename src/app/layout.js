import Script from "next/script";
import { Geist, Geist_Mono, Montserrat, Unbounded } from "next/font/google";
import "./globals.css";
import ChatBotComponent from "@/components/ChatBotComponent/ChatBotComponent";
import { BotProvider } from "@/context/Bot.context";
import CalendlyBadge from "@/components/CalendlyBadge/CalendlyBadge";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700"], // jo weight chahiye uske according
  variable: "--font-unbounded",
});
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://www.qcsstudio.com"),
  title: {
    default: "QuantumCrafters Studio | AI Growth, SEO & Automation Agency",
    template: "%s | QuantumCrafters Studio"
  },
  description:
    "QuantumCrafters Studio helps SaaS and eCommerce teams compound growth with AI-powered SEO, high-performing campaigns, chatbots and automation playbooks.",
  keywords: [
    "QuantumCrafters Studio",
    "AI growth agency",
    "AI SEO",
    "marketing automation",
    "performance marketing",
    "chatbot development"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "QuantumCrafters Studio | AI Growth, SEO & Automation Agency",
    description:
      "Accelerate revenue with QuantumCrafters Studio's AI-driven SEO, ads, chatbots and automation services tailored to startups and scaleups.",
    url: "https://www.qcsstudio.com/",
    siteName: "QuantumCrafters Studio",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumCrafters Studio | AI Growth, SEO & Automation Agency",
    description:
      "Partner with QuantumCrafters Studio for AI-fuelled marketing, automation and chatbot solutions.",
    creator: "@qcsstudio"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  category: "technology"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${montserrat.variable}`}>
      <head>
         <link
          rel="canonical"
          href="https://qcsstudio.com/"
          key="canonical"
        />
         <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TGNFYNFQQ2');
          `}
        </Script>
        <Script
          id="spline-viewer"
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.71/build/spline-viewer.js"
          strategy="beforeInteractive"
        />
        <Script id="org-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'QuantumCrafters Studio',
            url: 'https://www.qcsstudio.com/',
            logo: 'https://www.qcsstudio.com/HeroImages/NavbarLogo.svg',
            sameAs: [
              'https://www.linkedin.com/company/qcsstudio',
              'https://www.facebook.com/qcsstudio',
              'https://www.instagram.com/qcsstudio',
              'https://www.youtube.com/@qcsstudio',
              'https://in.pinterest.com/qcsstudio'
            ],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                contactType: 'sales',
                telephone: '+91 8264017346',
                email: 'info@qcsstudio.com',
                areaServed: 'IN'
              }
            ],
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'D266 (C), 203, Second Floor, Ram Hari Tower, Phase 8B, Industrial Area, Sector 74',
              addressLocality: 'Mohali',
              postalCode: '160055',
              addressCountry: 'IN'
            }
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BotProvider>
          <ChatBotComponent>{children}</ChatBotComponent>
        </BotProvider>
        <CalendlyBadge />

      </body>
    </html>
  );
}
