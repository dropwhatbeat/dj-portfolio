import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Deng Jing — Product Manager & Builder',
  description:
    'Technical PM based in Singapore. I build side projects to scratch my own itches — usually things I wished existed but couldn\'t find.',
  openGraph: {
    title: 'Deng Jing — Product Manager & Builder',
    description:
      'Technical PM based in Singapore. Building things that should have existed already.',
    url: 'https://dengjing.io',
    siteName: 'Deng Jing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deng Jing — Product Manager & Builder',
    description: 'Technical PM based in Singapore. Building things that should have existed already.',
  },
  metadataBase: new URL('https://dengjing.io'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
