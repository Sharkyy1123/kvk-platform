import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KVK – From Verified Farms to Your Table",
  description:
    "A government-backed platform connecting verified farmers with customers seeking organic and authentic produce. Farm-fresh, certified, trustworthy.",
  keywords: [
    "organic produce",
    "verified farmers",
    "farm to table",
    "KVK certified",
    "authentic agriculture",
    "fresh produce",
  ],
  openGraph: {
    title: "KVK – From Verified Farms to Your Table",
    description:
      "Connect with government-verified farmers for organic, authentic produce delivered fresh.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#fafdf8]">
        <Navbar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
