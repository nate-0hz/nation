import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/natepicone-favicon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
          storageKey="nation-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
