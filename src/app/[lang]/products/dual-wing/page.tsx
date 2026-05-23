import Image from 'next/image'
import Link from 'next/link'
import { getDict } from '@/dictionaries'

export default async function DualWingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = getDict(lang)

  return (
    <div className="content-backdrop">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Link href={`/${lang}/products`} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          {dict.products.backToProducts}
        </Link>

        <h1 className="heading-primary text-3xl md:text-4xl text-white mb-8">{dict.dualWing.title}</h1>
        <p className="text-gray-300 text-lg mb-12 max-w-3xl">{dict.dualWing.description}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link href={`/${lang}/products/dual-wing/20ft`} className="card-dark rounded-lg overflow-hidden block hover:border-gray-500 transition-colors">
            <div className="relative aspect-[4/3]">
              <Image src="/images/products/dual-wing-20ft-main.jpg" alt="Dual-Wing 20ft" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="font-semibold text-base text-white">{dict.dualWing.model20ft}</h2>
              <p className="text-sm text-gray-400 mt-1">{dict.products.viewDetails}</p>
            </div>
          </Link>
          <Link href={`/${lang}/products/dual-wing/40ft`} className="card-dark rounded-lg overflow-hidden block hover:border-gray-500 transition-colors">
            <div className="relative aspect-[4/3]">
              <Image src="/images/products/dual-wing-40ft-main.jpg" alt="Dual-Wing 40ft" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="font-semibold text-base text-white">{dict.dualWing.model40ft}</h2>
              <p className="text-sm text-gray-400 mt-1">{dict.products.viewDetails}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
