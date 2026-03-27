import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { LocalBusinessSchema } from "@/components/local-business-schema";
import { SplashScreen } from "@/components/splash-screen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sunshines Handy Gal Services | Professional Cleaning in Orlando, FL",
  description:
    "Women-owned cleaning and organizing service in Orlando, FL. Trusted for detail-oriented deep cleaning, move-out cleaning, and personalized recurring care.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://sunshineshandygalservices.com"),
  openGraph: {
    title: "Sunshines Handy Gal Services",
    description:
      "Trusted local cleaning services in Orlando and nearby Central Florida communities.",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Sunshines Handy Gal Services logo",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-clean-white text-charcoal">
        <SplashScreen />
        <LocalBusinessSchema />
        <Navbar />
        <main className="mx-auto min-h-[60vh] max-w-6xl px-3 pb-[calc(5rem+env(safe-area-inset-bottom,0px))] pt-6 sm:px-6 sm:pb-24 sm:pt-8 md:pt-10 lg:px-8 lg:pb-12">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <ChatWidget />
      </body>
    </html>
  );
}
