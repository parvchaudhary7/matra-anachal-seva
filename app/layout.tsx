import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Matra Anchal Sewa Sansthan Trust | Serving Humanity Since 2000",
  description:
    "Empowering Your Journey with Precision and Care. Join our mission to build the Matra-Anchal Sewa Dham - a three-floor humanitarian complex providing shelter for elderly, education for children, and empowerment for women. 80G Tax Exempt, NITI Aayog Registered NGO in Faridabad.",
  keywords: [
    "NGO in Faridabad",
    "80G tax exemption",
    "elderly care India",
    "women empowerment",
    "charity organization",
    "donate India",
    "NITI Aayog",
    "Matra Anchal",
  ],
  authors: [{ name: "Matra Anchal Sewa Sansthan Trust" }],
  creator: "Matra Anchal Sewa Sansthan Trust",
  publisher: "Matra Anchal Sewa Sansthan Trust",
  metadataBase: new URL("https://matraanchal1.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Matra Anchal Sewa Sansthan Trust | Serving Humanity Since 2000",
    description:
      "Empowering Your Journey with Precision and Care. Join our mission to build a three-floor humanitarian complex providing shelter, education, and empowerment.",
    url: "https://matraanchal1.netlify.app",
    siteName: "Matra Anchal Sewa Sansthan Trust",
    images: [
      {
        url: "/mata-ji.png",
        width: 1200,
        height: 630,
        alt: "Sadhvi Kamlesh Bharti - Founder of Matra Anchal Sewa Sansthan Trust",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matra Anchal Sewa Sansthan Trust | Serving Humanity Since 2000",
    description:
      "Empowering Your Journey with Precision and Care. Join our mission to build the Matra-Anchal Sewa Dham.",
    images: ["/mata-ji.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
