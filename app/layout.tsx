import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import ForestBackground from '../components/forest-background'
import CursorEffect from '../components/cursor-effect'
import ThemeToggle from '../components/theme-toggle'

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
        <meta name="msvalidate.01" content="https://shivam-ramraika.vercel.app/" />
        <meta property="og:title" content="Shivam Ramraika's Portfolio" />
        <meta property="og:description" content="Computer Science Student at KIIT University" />
        <meta property="og:url" content="https://shivam-ramraika.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://shivam-ramraika.vercel.app/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://shivam-ramraika.vercel.app",
            "name": "Shivam Ramraika's Portfolio",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://shivam-ramraika.vercel.app/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Shivam Ramraika",
            "url": "https://shivam-ramraika.vercel.app",
            "sameAs": [
              "https://www.linkedin.com/in/shivam-ramraika",
              "https://github.com/shivam-ramraika"
            ]
          })}
        </script>
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
      </body>
    </html>
  )
}

