import type { Metadata } from 'next'
import './globals.css'
import { League_Spartan, Inter, Bricolage_Grotesque } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const roboto_mono = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-league-spartan'
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage-grotesque'
})

export const metadata: Metadata = {
  title: 'Carlson Technologies LLC',
  description: 'Creating tools to help people.',
  metadataBase: new URL('https://carlsontechnologies.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://carlsontechnologies.dev',
    siteName: 'Carlson Technologies LLC',
    title: 'Carlson Technologies LLC',
    description: 'Creating tools to help people.',
    images: [
      {
        url: 'https://carlsontechnologies.dev/images/logo.png',
        alt: 'Carlson Technologies LLC Logo'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} ${bricolage.variable}`}>
      <body className="cursor-dot">{children}</body>
    </html>
  )
}
