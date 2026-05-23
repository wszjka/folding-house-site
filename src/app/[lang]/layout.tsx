import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { locales, getDict } from '@/dictionaries'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  title: 'Miles Technology | Container House',
  description: 'Global modular house manufacturer with over 20 years of expertise in steel trade and container buildings.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDict(lang)
  const isRtl = lang === 'ar'

  return (
    <html lang={lang} dir={isRtl ? 'rtl' : 'ltr'}>
      <body className={`${inter.className} antialiased`} style={{ backgroundColor: '#3A3A3A' }}>
        <Navbar lang={lang} dict={dict} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
        <LanguageSwitcher currentLang={lang} dict={dict} />
      </body>
    </html>
  )
}