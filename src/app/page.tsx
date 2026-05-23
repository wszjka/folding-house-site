import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="content-backdrop">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Title & Description */}
          <div>
            <h1 className="heading-primary text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
              Standardized Clean Container House Factory.
            </h1>
            
            <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                We are <span className="text-white font-semibold">Shijiazhuang Miles Technology Co., Ltd.</span>, a global modular house manufacturer. With over 20 years of group expertise in steel trade and manufacturing, we possess an innate understanding of metal, forming the solid foundation for our durable and reliable container buildings.
              </p>
              <p>
                With our own factory and stringent quality control, we ensure consistent quality from raw material to finished product. Our in-house R&D focuses on optimizing structure, folding mechanisms, and space efficiency.
              </p>
            </div>
          </div>

          {/* Right: Key Strengths */}
          <div className="card-dark rounded-xl p-8">
            <h2 className="heading-primary text-xl text-white mb-8">
              Why Choose Us
            </h2>
            <ul className="space-y-6">
              {[
                { 
                  icon: (
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  title: '20+ Years Experience', 
                  desc: 'Deep expertise in steel trade and manufacturing' 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Own Factory', 
                  desc: 'Complete quality control from raw material to product' 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: 'In-house R&D', 
                  desc: 'Continuous innovation in folding mechanisms' 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  ),
                  title: 'Global Shipping', 
                  desc: 'Container-compatible designs for worldwide delivery' 
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-medium text-white text-sm">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className="mt-14 w-full">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>
          <Image
            src="/images/bg-texture.jpg"
            alt=""
            width={1200}
            height={240}
            className="w-full max-h-[240px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
