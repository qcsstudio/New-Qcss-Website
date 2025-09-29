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
  weight: ["400", "700"], // jo weight chahiye uske according
  variable: "--font-unbounded",
});
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://qcsstudio.com"),
  title: {
    default: "QuantumCrafters Studio | AI-Powered Growth & Automation",
    template: "%s | QuantumCrafters Studio",
  },
  description:
    "QuantumCrafters Studio blends human creativity with intelligent automation to deliver high-impact marketing, AI SEO, and workflow solutions for modern teams.",
  keywords: [
    "QuantumCrafters Studio",
    "AI marketing",
    "AI SEO",
    "automation agency",
    "growth marketing",
    "digital transformation",
  ],
  openGraph: {
    title: "QuantumCrafters Studio | AI-Powered Growth & Automation",
    description:
      "Partner with QuantumCrafters Studio for AI-driven marketing, automation, and product growth strategies tailored to ambitious brands.",
    url: "https://qcsstudio.com",
    siteName: "QuantumCrafters Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumCrafters Studio | AI-Powered Growth & Automation",
    description:
      "AI-powered marketing and automation services that help ambitious teams scale fast and sustainably.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${unbounded.variable} ${montserrat.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
