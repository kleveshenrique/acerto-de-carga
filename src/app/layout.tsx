import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from './Header/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Acerto de Carga',
  description: 'Acerto de Carga',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
