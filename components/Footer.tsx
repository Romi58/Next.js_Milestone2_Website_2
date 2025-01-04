'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              TechNova Solutions
            </Link>
            <p className="text-gray-400">Innovative software solutions for your business</p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={<Facebook size={20} />} />
              <SocialIcon href="#" icon={<Twitter size={20} />} />
              <SocialIcon href="#" icon={<Linkedin size={20} />} />
              <SocialIcon href="#" icon={<Instagram size={20} />} />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Tech Street, Silicon Valley</p>
              <p>CA 94000, USA</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@technova.com</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-md sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-md sm:rounded-l-none hover:bg-primary/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-sm text-center mb-4">Trusted by industry leaders:</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Image src="https://media.istockphoto.com/id/2157394121/photo/portrait-of-confident-businesswoman-standing-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=eK6hSqdHlfABi60Ipge_SkS1NsHGNf8Lnm0WSrZFGgA=" alt="Client Logo 1" width={100} height={40} className="h-8 w-auto object-contain" />
            <Image src="https://media.istockphoto.com/id/1419539600/photo/business-presentation-and-man-on-a-laptop-in-a-corporate-conference-or-office-collaboration.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZYbTZ0tdL9A7HsGOrkxaZ94v6EdNESNMJmF931BE8kg=" alt="Client Logo 2" width={100} height={40} className="h-8 w-auto object-contain" />
            <Image src="https://media.istockphoto.com/id/1783743772/photo/female-speaker-giving-a-presentation-during-business-seminar-at-convention-center.webp?a=1&b=1&s=612x612&w=0&k=20&c=FjhrzpJnI2FXNc3yHDyK0c-adWFauZlTUfQYFolTWgs=" alt="Client Logo 3" width={100} height={40} className="h-8 w-auto object-contain" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 text-center text-gray-400">
        <p>&copy; {currentYear} TechNova Solutions. All rights reserved.</p>
      </div>
    </footer>
  )
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </Link>
  </li>
)

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors"
  >
    {icon}
  </a>
)

export default Footer

