import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { LocalBusinessSchema } from "@/components/local-business-schema";

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
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
        <LocalBusinessSchema />
        <Navbar />
        <main className="mx-auto min-h-[60vh] max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
