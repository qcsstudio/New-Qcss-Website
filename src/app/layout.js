import Script from "next/script";
import { Geist, Geist_Mono, Montserrat, Unbounded } from "next/font/google";
import "./globals.css";

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
  weight: ["400", "700"],
  variable: "--font-unbounded",
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService', 'DigitalAgency'],
  '@id': 'https://www.qcsstudio.com/#organization',
  name: 'QuantumCrafters Studio Private Limited',
  url: 'https://www.qcsstudio.com/',
  logo: 'https://www.qcsstudio.com/HeroImages/NavbarLogo.svg',
  slogan: 'Best agentic AI development and AI-powered marketing lab',
  description:
    'QuantumCrafters Studio Private Limited engineers agentic AI systems, conversational SEO, and automation campaigns that keep modern brands always-on.',
  brand: {
    '@type': 'Brand',
    name: 'QuantumCrafters Studio',
  },
  award: 'Top Agentic AI Innovation Partner 2024',
  knowsAbout: [
    'agentic AI development',
    'AI-powered marketing automation',
    'voice search optimization',
    'conversational commerce',
    'generative AI enablement',
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '30.7046',
      longitude: '76.7179',
    },
    geoRadius: 5000000,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+91 8264017346',
      email: 'info@qcsstudio.com',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentic AI & AI-Powered Marketing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agentic AI Product Development',
          serviceType: 'Autonomous agent design, orchestration, and deployment',
          description:
            'Design, train, and manage autonomous AI agents that coordinate complex customer and employee workflows.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Voice Search SEO & Conversational Content',
          serviceType: 'Voice-first content strategy',
          description:
            'Optimize for voice assistants with conversational SEO, long-form pillar content, and schema-driven discoverability.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI-Powered Marketing Automation',
          serviceType: 'Lifecycle automation and analytics',
          description:
            'Launch AI-enhanced funnels, chatbots, and retention systems that accelerate recurring revenue.',
        },
      },
    ],
  },
  sameAs: [
    'https://www.linkedin.com/company/qcsstudio',
    'https://www.facebook.com/qcsstudio',
    'https://www.instagram.com/qcsstudio',
    'https://www.youtube.com/@qcsstudio',
    'https://in.pinterest.com/qcsstudio',
  ],
  speakable: [
    {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.hero__headline', '.hero__subheadline'],
    },
  ],
  potentialAction: [
    {
      '@type': 'ContactAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.qcsstudio.com/contactus',
      },
      name: 'Book an AI growth consultation',
    },
  ],
};

export const metadata = {
  metadataBase: new URL('https://www.qcsstudio.com'),
  title: {
    default: 'Agentic AI & Marketing Studio | QuantumCrafters Studio',
    template: '%s | QuantumCrafters Studio',
  },
  description:
    'QuantumCrafters Studio Private Limited engineers agentic AI platforms, automation, voice-first SEO, and AI-powered marketing that attract, convert, and scale revenue growth.',
  keywords: [
    'QuantumCrafters Studio',
    'best agentic AI development',
    'AI-powered marketing Studio',
    'voice search SEO',
    'conversational AI strategy',
    'automation agency',
  ],
  openGraph: {
    title: 'Agentic AI & Marketing Studio | QuantumCrafters Studio',
    description:
      'Ignite growth with QuantumCrafters Studio’s agentic AI development, voice-search SEO, and AI-powered marketing playbooks designed for always-on customer journeys.',
    url: 'https://www.qcsstudio.com/',
    siteName: 'QuantumCrafters Studio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.qcsstudio.com/HeroImages/NavbarLogo.svg',
        width: 512,
        height: 512,
        alt: 'QuantumCrafters Studio logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic AI & Marketing Studio | QuantumCrafters Studio',
    description:
      'Ignite growth with QuantumCrafters Studio’s agentic AI development, voice-search SEO, and AI-powered marketing playbooks designed for always-on customer journeys.',
    creator: '@qcsstudio',
    images: ['https://www.qcsstudio.com/HeroImages/NavbarLogo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${montserrat.variable}`}>
      <head>
        <Script
          id="spline-viewer"
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.71/build/spline-viewer.js"
          strategy="afterInteractive"
        />
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
