'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import type { Dict } from '@/dictionaries'

interface LanguageSwitcherProps {
  currentLang: string
  dict: Dict
}

const langNames: Record<string, string> = {
  en: 'English',
  es: 'Español',
  ru: 'Русский',
  ar: 'العربية',
}

const langCodes: Record<string, string> = {
  en: 'EN',
  es: 'ES',
  ru: 'RU',
  ar: 'AR',
}

export default function LanguageSwitcher({ currentLang, dict }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const getLocalizedPath = (targetLang: string) => {
    const segments = pathname.split('/')
    segments[1] = targetLang
    return segments.join('/')
  }

  const langs = ['en', 'es', 'ru', 'ar']

  return (
    <div className="fixed top-16 right-6 z-50" style={{ transform: 'scale(1.3)', transformOrigin: 'top right' }}>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-3 bg-[#1e1e1e] border border-[#333333] rounded-xl shadow-2xl overflow-hidden min-w-[180px]">
          <div className="px-4 py-2 text-xs uppercase tracking-wider text-gray-500 border-b border-[#333333]">
            {dict.langSwitcher.label}
          </div>
          {langs.map((lang) => (
            <Link
              key={lang}
              href={getLocalizedPath(lang)}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                lang === currentLang
                  ? 'bg-blue-600/20 text-blue-400 font-medium'
                  : 'text-gray-300 hover:bg-[#2a2a2a] hover:text-white'
              }`}
            >
              <span className="text-xs font-bold bg-[#333] text-white w-6 h-6 rounded flex items-center justify-center">
                {langCodes[lang]}
              </span>
              <span>{langNames[lang]}</span>
              {lang === currentLang && (
                <svg className="w-4 h-4 ms-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </Link>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:shadow-blue-500/40"
        aria-label={dict.langSwitcher.label}
      >
        <span className="text-[10px] font-medium uppercase tracking-wider opacity-80 leading-none mb-1">Language</span>
        <span className="text-xs font-semibold leading-none">EN/ES/RU/AR</span>
      </button>
    </div>
  )
}
