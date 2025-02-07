import Footer from './components/Footer';
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CleanEats',
  description: 'CleanEats application',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 