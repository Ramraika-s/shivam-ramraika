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

