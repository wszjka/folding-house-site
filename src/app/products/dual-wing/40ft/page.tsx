import Image from 'next/image'
import Link from 'next/link'

export default function DualWing40ftPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <Link href="/products/dual-wing" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Dual-Wing
        </Link>

        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-10 tracking-tight">
          Dual-Wing Folding House<span className="text-gray-500 font-normal ml-2">40ft</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left — Images */}
          <div className="lg:w-2/5 space-y-4">
            <div className="card-dark rounded-xl overflow-hidden">
              <Image src="/images/products/dual-wing-40ft-square.jpg" alt="Dual-Wing 40ft" width={800} height={800} className="w-full object-contain" style={{maxHeight: 420}} />
            </div>
            <div className="card-dark rounded-xl overflow-hidden">
              <Image src="/images/products/dual-wing-40ft-tall.jpg" alt="Dual-Wing 40ft Side" width={800} height={1000} className="w-full object-contain" style={{maxHeight: 420}} />
            </div>
          </div>

          {/* Right — Specs */}
          <div className="lg:w-3/5">
            <div className="card-dark rounded-xl p-6 md:p-8">
              <h2 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-white/10">Specifications</h2>
              <div className="space-y-0">
                {[['Size','L12000 x W2500 x H2500MM'],['Weight','8 tons'],['Area','30sqm (folded) / 73sqm (expanded)'],['Layout','2-3 bedroom, full kitchen & bathroom']].map(([k,v])=>(
                  <div key={k} className="flex justify-between py-3 border-b border-white/5 text-sm">
                    <span className="text-gray-400">{k}</span><span className="text-white font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-lg font-semibold text-white mt-8 mb-5 pb-3 border-b border-white/10">Construction Details</h2>
              <div className="space-y-0">
                {[['Folding Mechanism','Hydraulic folding system, quick deployment in under 2 hours, no crane required'],['Main Frame','Seismic-resistant galvanized steel, electrostatic spraying, fluorocarbon baking paint'],['Walls','EPS composite board, metal exterior panels + bamboo/wood fiber interior, flame retardant Grade B'],['Windows','Broken-bridge aluminum, tempered glass, sound & heat insulation'],['Flooring','SPC / PVC floor'],['Kitchen','900mm marble countertop L-shaped cabinet'],['Bathroom','Shower, washbasin, mirror, enclosure, water pipes'],['Electrical & Plumbing','Per destination national standards']].map(([k,v])=>(
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