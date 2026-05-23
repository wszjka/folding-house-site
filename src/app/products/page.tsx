import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    slug: 'dual-wing',
    image: '/images/products/dual-wing.jpg',
    name: 'Dual-Wing Folding House',
    description: 'Hydraulic auto-deployment system, 2-hour setup, container-shippable. Available in 20ft and 40ft configurations.',
  },
  {
    slug: 'apple-cabin',
    image: '/images/products/apple-cabin.jpg',
    name: 'Apple Cabin',
    description: 'Curved dome design with panoramic floor-to-ceiling windows, high-strength galvanized steel frame, wind resistance grade 12, optional smart home system.',
  },
  {
    slug: 'space-capsule',
    image: '/images/products/space-capsule.jpg',
    name: 'Space Capsule',
    description: 'Sci-fi dual-bed layout with panoramic skylight and ambient lighting, integrated bathroom, ideal for scenic camps or premium field stations.',
  },
]

export default function ProductsPage() {
  return (
    <div className="content-backdrop">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        {/* Page Title */}
        <h1 className="heading-primary text-3xl md:text-4xl text-white mb-12 text-center">
          Our Container House Models
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="card-dark rounded-lg overflow-hidden block hover:border-gray-500 transition-colors"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h2 className="font-semibold text-base text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
