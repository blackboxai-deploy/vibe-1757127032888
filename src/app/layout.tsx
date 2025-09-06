import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Umeed Foundation of India - Bringing Hope to Communities',
  description: 'Umeed Foundation of India is a non-profit organization dedicated to education, healthcare, community development, and empowering underprivileged communities across India.',
  keywords: 'NGO, charity, India, education, healthcare, community development, donation, volunteer, social work',
  authors: [{ name: 'Umeed Foundation of India' }],
  openGraph: {
    title: 'Umeed Foundation of India - Bringing Hope to Communities',
    description: 'Join us in making a difference. Support education, healthcare, and community development initiatives across India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Umeed Foundation of India',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umeed Foundation of India',
    description: 'Bringing hope and positive change to communities across India',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}