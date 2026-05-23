import Image from 'next/image'
import Link from 'next/link'

export default function SpaceCapsulePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <Link href="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Products
        </Link>

        <div className="flex items-baseline gap-4 mb-3">
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Space Capsule</h1>
        </div>
        <p className="text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Futuristic capsule design with panoramic windows, perfect for glamping, eco-tourism, and unique accommodation experiences.
        </p>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left — Images */}
          <div className="lg:w-2/5 space-y-4">
            <div className="card-dark rounded-xl overflow-hidden">
              <Image src="/images/products/space-capsule-square.jpg" alt="Space Capsule" width={800} height={800} className="w-full object-contain" style={{maxHeight: 420}} />
            </div>
            <div className="card-dark rounded-xl overflow-hidden">
              <Image src="/images/products/space-capsule-tall.jpg" alt="Space Capsule Side" width={800} height={1000} className="w-full object-contain" style={{maxHeight: 420}} />
            </div>
          </div>

          {/* Right — Specs */}
          <div className="lg:w-3/5">
            <div className="card-dark rounded-xl p-6 md:p-8">
              <h2 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-white/10">Specifications</h2>
              <div className="space-y-0">
                {[['20FT','L6000 x W3000 x H3000MM · 3 tons · 18sqm'],['30FT','L8500 x W3300 x H3000MM · 9 tons · 28sqm'],['40FT','L11500 x W3300 x H3400MM · 11 tons · 38sqm'],['Layout','1 bedroom, living room, kitchen & bathroom']].map(([k,v])=>(
                  <div key={k} className="flex justify-between py-3 border-b border-white/5 text-sm">
                    <span className="text-gray-400">{k}</span><span className="text-white font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-lg font-semibold text-white mt-8 mb-5 pb-3 border-b border-white/10">Construction Details</h2>
              <div className="space-y-0">
                {[['Main Frame','Seismic-resistant galvanized steel, electrostatic spraying, fluorocarbon baking paint'],['Walls','EPS composite board, metal exterior panels + bamboo/wood fiber interior, flame retardant Grade B'],['Windows','Broken-bridge aluminum, tempered glass, sound & heat insulation'],['Flooring','SPC floor'],['Kitchen','900mm marble countertop L-shaped cabinet'],['Bathroom','Shower, washbasin, mirror, enclosure, water pipes'],['Electrical & Plumbing','Per destination national standards']].map(([k,v])=>(
                  <div key={k} className="py-3 border-b border-white/5 text-sm">
                    <span className="text-gray-400">{k}</span>
                    <p className="text-white mt-1 leading-relaxed">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}