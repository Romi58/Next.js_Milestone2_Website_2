import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          TechNova Solutions
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Services</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
        </nav>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-primary transition-colors">Services</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header

