import Image from 'next/image'
import Link from 'next/link'
import { getDict } from '@/dictionaries'

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = getDict(lang)

  const products = [
    { slug: 'dual-wing', image: '/images/products/dual-wing.jpg', name: dict.products.dualWing, description: dict.products.dualWingDesc },
    { slug: 'apple-cabin', image: '/images/products/apple-cabin.jpg', name: dict.products.appleCabin, description: dict.products.appleCabinDesc },
    { slug: 'space-capsule', image: '/images/products/space-capsule.jpg', name: dict.products.spaceCapsule, description: dict.products.spaceCapsuleDesc },
  ]

  return (
    <div className="content-backdrop">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h1 className="heading-primary text-3xl md:text-4xl text-white mb-12 text-center">
          {dict.products.title}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/${lang}/products/${product.slug}`}
              className="card-dark rounded-lg overflow-hidden block hover:border-gray-500 transition-colors"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="font-semibold text-base text-white mb-2">{product.name}</h2>
                <p className="text-sm text-gray-400 leading-relaxed">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
