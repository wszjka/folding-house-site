import Image from 'next/image'
import Link from 'next/link'

export default function DualWingPage() {
  return (
    <div className="content-backdrop">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>

        <h1 className="heading-primary text-3xl md:text-4xl text-white mb-8">
          Dual-Wing Folding House
        </h1>

        <p className="text-gray-300 text-lg mb-12 max-w-3xl">
          Innovative dual-wing folding design for maximum space efficiency. 
          Quick deployment with expandable wings for spacious living areas.
        </p>

        {/* Clickable Model Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link
            href="/products/dual-wing/20ft"
            className="card-dark rounded-lg overflow-hidden block hover:border-gray-500 transition-colors"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/products/dual-wing-20ft-main.jpg"
                alt="Dual-Wing 20ft"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="font-semibold text-base text-white">Dual-Wing Folding House 20ft</h2>
              <p className="text-sm text-gray-400 mt-1">Click to view details →</p>
            </div>
          </Link>

          <Link
            href="/products/dual-wing/40ft"
            className="card-dark rounded-lg overflow-hidden block hover:border-gray-500 transition-colors"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/products/dual-wing-40ft-main.jpg"
                alt="Dual-Wing 40ft"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="font-semibold text-base text-white">Dual-Wing Folding House 40ft</h2>
              <p className="text-sm text-gray-400 mt-1">Click to view details →</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
