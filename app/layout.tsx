import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata = {
  title: 'TechSolutions - Innovative Software House',
  description: 'We provide cutting-edge software solutions for businesses of all sizes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-background`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

