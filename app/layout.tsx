import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import ForestBackground from '../components/forest-background'
import CursorEffect from '../components/cursor-effect'
import ThemeToggle from '../components/theme-toggle'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Shivam Ramraika's Portfolio",
  description: 'Computer Science Student at KIIT University',
  themeColor: "#461616",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon0.svg", type: "image/svg+xml" },
    ],
    apple: "/web-app-manifest-192x192.png",
  },
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "r6UvpAi_sOxqo2KPO1LByWNFE2v56FgnbKCnOWh3EyI",
    "msapplication-TileColor": "#461616",
    "msapplication-TileImage": "/web-app-manifest-192x192.png",
    "apple-mobile-web-app-title": "SR",
    "twitter:image": "/og-image.jpg",
    "og:image": "/og-image.jpg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider>
          <ForestBackground />
          <div className="relative z-10">
            <main className="container mx-auto px-4 py-24 max-w-7xl">
              {children}
            </main>
          </div>
          <CursorEffect />
          <ThemeToggle />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
