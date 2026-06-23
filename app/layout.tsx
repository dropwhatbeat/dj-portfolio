import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { PostHogProvider } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Deng Jing — Product Manager & Builder',
  description:
    'Technical PM based in Singapore. Building things that should have existed already.',
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
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-ink antialiased">
        <PostHogProvider>
          {children}
        </PostHogProvider>
        <Analytics />
      </body>
    </html>
  )
}
