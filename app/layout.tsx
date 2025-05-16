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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="r6UvpAi_sOxqo2KPO1LByWNFE2v56FgnbKCnOWh3EyI" />
        {/* Favicons and icons for all platforms */}
        <link rel="apple-touch-icon" sizes="180x180" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="SR" />
        <meta name="theme-color" content="#461616" />
        <meta name="msapplication-TileColor" content="#461616" />
        <meta name="msapplication-TileImage" content="/web-app-manifest-192x192.png" />
        <meta name="description" content="Personal portfolio of Shivam Ramraika – Computer Science student, developer, and technology enthusiast." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:image" content="/og-image.jpg" />
      </head>
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

