'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Dict } from '@/dictionaries'

interface NavbarProps {
  lang: string
  dict: Dict
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/products`, label: dict.nav.products },
    { href: `/${lang}/gallery`, label: dict.nav.gallery },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ]

  const basePath = `/${lang}`
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/') && href !== basePath || (pathname === href)

  return (
    <nav className="bg-[#1e1e1e] border-b border-[#333333] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href={`/${lang}`} 
            className="text-lg font-semibold tracking-tight text-white hover:text-blue-400 transition-colors"
          >
            MILES TECHNOLOGY
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}