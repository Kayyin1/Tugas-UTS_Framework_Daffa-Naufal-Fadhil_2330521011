import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CV Dark Mode',
  description: 'Curriculum Vitae Online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar dihapus agar tampilan bersih full dark mode */}
        {children}
      </body>
    </html>
  )
}