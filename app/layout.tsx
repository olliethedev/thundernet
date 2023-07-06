import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thundernet | AI agent marketplace',
  description: 'A marketplace where developers can easily list AI Agents and Vector Stores for others to discover and utilize.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dracula">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
