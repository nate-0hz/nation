import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nation',
  description: 'Better, faster work with Nation',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/natepicone-favicon.png",
        href: "/natepicone-favicon.png",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/natepicone-favicon.png",
        href: "/natepicone-favicon.png",
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/natepicone-favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
