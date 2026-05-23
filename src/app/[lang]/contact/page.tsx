import { getDict } from '@/dictionaries'

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = getDict(lang)

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.25 3.75 11.25 9 15.75 5.25-4.5 9-7.5 9-15.75a9 9 0 00-18 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
      label: dict.contact.address,
      value: dict.contact.addressVal,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.25 3.75 11.25 9 15.75 5.25-4.5 9-7.5 9-15.75a9 9 0 00-18 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
      label: dict.contact.tel,
      value: dict.contact.telVal,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.071 1.936l-7.5 4.5a2.25 2.25 0 01-2.358 0l-7.5-4.5A2.25 2.25 0 012.25 6.993v-.243" />
        </svg>
      ),
      label: dict.contact.email,
      value: dict.contact.emailVal,
    },
  ]

  return (
    <div className="content-backdrop">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h1 className="heading-primary text-3xl md:text-4xl text-[#111111] mb-12 text-center">{dict.contact.title}</h1>
        <div className="max-w-2xl mx-auto space-y-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-center gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#2563EB]">
                {item.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#555555] mb-1">{item.label}</p>
                <p className="font-medium text-[#111111]">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#555555] mt-12 max-w-lg mx-auto">{dict.contact.note}</p>
      </div>
    </div>
  )
}
