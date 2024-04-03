import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Top Listened',
  description: 'A simple app to show your top listened artists and tracks',
  openGraph: {
    title: 'Spotify Top Listened',
    description: 'A simple app to show your top listened artists and tracks',
    type: 'website',
    locale: 'en_GB',
    url: 'https://spotify.hjf.io',
    images: '/opengraph.jpeg',
  },
  metadataBase: new URL('https://spotify.hjf.io'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
