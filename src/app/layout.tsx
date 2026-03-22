import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://foundscape.ca"),
  title: {
    default: "Foundation Repair Calgary | Basement Waterproofing | Foundscape",
    template: "%s | Foundscape Calgary",
  },
  description:
    "Calgary's trusted foundation repair and basement waterproofing specialists. Fix foundation cracks, wet basements, and water damage fast. Free inspection. Call now.",
  keywords: [
    "foundation repair Calgary",
    "basement waterproofing Calgary",
    "foundation crack repair Calgary",
    "wet basement Calgary",
    "leaking basement Calgary",
    "sump pump installation Calgary",
    "basement water damage Calgary",
    "foundation inspection Calgary",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://foundscape.ca",
    siteName: "Foundscape",
    title: "Foundation Repair Calgary | Basement Waterproofing | Foundscape",
    description:
      "Calgary's trusted foundation repair and basement waterproofing specialists. Fix foundation cracks, wet basements, and water damage fast.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foundation Repair Calgary | Foundscape",
    description:
      "Calgary's trusted foundation repair and basement waterproofing specialists.",
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
    canonical: "https://foundscape.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Foundscape",
              description:
                "Calgary foundation repair and basement waterproofing specialists.",
              url: "https://foundscape.ca",
              telephone: "+1-403-555-0100",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Calgary",
                addressRegion: "AB",
                addressCountry: "CA",
              },
              areaServed: {
                "@type": "City",
                name: "Calgary",
              },
              serviceType: [
                "Foundation Repair",
                "Basement Waterproofing",
                "Foundation Crack Repair",
                "Sump Pump Installation",
                "Wet Basement Solutions",
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
