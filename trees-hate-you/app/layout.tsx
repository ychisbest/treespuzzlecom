import type { Metadata } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fredoka = Fredoka({ 
  subsets: ["latin"],
  variable: '--font-fredoka',
});

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Trees Hate You | Rage Comedy Game by Tykenn – Play Free Demo Now',
  description: 'Trees Hate You is the funniest rage game where the entire forest is out to get you. Play the free demo on itch.io, wishlist on Steam, watch gameplay, and join the chaos. The trees hate you – and you\'ll love it.',
  keywords: ['Trees Hate You', 'Trees Hate You game', 'Trees Hate You demo', 'Tykenn game', 'rage comedy trap game', 'funny forest game'],
  openGraph: {
    title: 'Trees Hate You – The Forest is Plotting Against You',
    description: 'Don\'t trust the trees. Hilarious deaths, troll traps, and non-stop laughs. Free demo available now.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trees Hate You – The Forest is Plotting Against You',
    description: 'Don\'t trust the trees. Hilarious deaths, troll traps, and non-stop laughs. Free demo available now.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${fredoka.variable} ${nunito.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
