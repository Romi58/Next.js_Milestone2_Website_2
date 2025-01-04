'use client'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            TechSolutions
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className="md:hidden mt-4 space-y-2"
          >
            <NavLink href="/" mobile>Home</NavLink>
            <NavLink href="/services" mobile>Services</NavLink>
            <NavLink href="/portfolio" mobile>Portfolio</NavLink>
            <NavLink href="/about" mobile>About Us</NavLink>
            <NavLink href="/contact" mobile>Contact</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile = false }) => (
  <Link href={href} className={`text-gray-600 hover:text-primary transition-colors duration-200 ${mobile ? 'block py-2' : ''}`}>
    {children}
  </Link>
)

export default Header

