import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from './Header/page'
import { PedidoProvider } from './contexts/PedidosContext'
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
        <PedidoProvider>
          <Header />
          {children}
        </PedidoProvider>
      </body>
    </html>
  )
}
