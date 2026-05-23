import Image from 'next/image'
import Link from 'next/link'
import { getDict } from '@/dictionaries'

export default async function DualWing20ftPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const d = getDict(lang).dualWing20

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <Link href={`/${lang}/products/dual-wing`} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Dual-Wing
        </Link>
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-10 tracking-tight">{d.title}<span className="text-gray-500 font-normal ml-2">20ft</span></h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <div className="lg:w-2/5 space-y-4">
            <div className="card-dark rounded-xl overflow-hidden">
              <Image src="/images/products/dual-wing-20ft-square.jpg" alt="20ft" width={800} height={800} className="w-full object-contain" style={{maxHeight: 420}} />
            </div>
            <div className="card-dark rounded-xl overflow-hidden">
              <Image src="/images/products/dual-wing-20ft-tall.jpg" alt="20ft Side" width={800} height={1000} className="w-full object-contain" style={{maxHeight: 420}} />
            </div>
          </div>
          <div className="lg:w-3/5">
            <div className="card-dark rounded-xl p-6 md:p-8">
              <h2 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-white/10">{d.specs}</h2>
              <div className="space-y-0">
                {[[d.sizeLabel, d.size],[d.weightLabel, d.weight],[d.areaLabel, d.area],[d.layoutLabel, d.layout]].map(([k,v])=>(
                  <div key={k} className="flex justify-between py-3 border-b border-white/5 text-sm">
                    <span className="text-gray-400">{k}</span><span className="text-white font-medium text-right">{v}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-lg font-semibold text-white mt-8 mb-5 pb-3 border-b border-white/10">{d.construction}</h2>
              <div className="space-y-0">
                {[['Main Frame', d.frame],['Walls', d.walls],['Windows', d.windows],['Flooring', d.flooring],['Kitchen', d.kitchen],['Bathroom', d.bathroom],['Electrical & Plumbing', d.electrical]].map(([k,v])=>(
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
