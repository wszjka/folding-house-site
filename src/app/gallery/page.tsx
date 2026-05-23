import Image from 'next/image'

const galleryImages = [
  { filename: '20FT-Two-bedrooms-one-bathroom-one-kitchen (1).jpg', title: '20FT Two bedrooms one bathroom one kitchen' },
  { filename: '20FT-Two-bedrooms-one-bathroom-one-kitchen (2).jpg', title: '20FT Two bedrooms one bathroom one kitchen' },
  { filename: '20FT-Two-bedrooms-one-bathroom-one-kitchen (3).jpg', title: '20FT Two bedrooms one bathroom one kitchen' },
  { filename: '20FT-Two-bedrooms-one-bathroom-one-kitchen (4).jpg', title: '20FT Two bedrooms one bathroom one kitchen' },
  { filename: '20FT-Two-bedrooms-one-bathroom-one-kitchen (5).jpg', title: '20FT Two bedrooms one bathroom one kitchen' },
  { filename: '30FT-Two-bedrooms-one-bathroom-one-kitchen (1).jpg', title: '30FT Two bedrooms one bathroom one kitchen' },
  { filename: '30FT-Two-bedrooms-one-bathroom-one-kitchen (2).jpg', title: '30FT Two bedrooms one bathroom one kitchen' },
  { filename: '40FT-Three-bedrooms-one-bathroom-one-kitchen (1).jpg', title: '40FT Three bedrooms one bathroom one kitchen' },
  { filename: '40FT-Three-bedrooms-one-bathroom-one-kitchen (2).jpg', title: '40FT Three bedrooms one bathroom one kitchen' },
]

export default function GalleryPage() {
  return (
    <div className="content-backdrop">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <h1 className="heading-primary text-3xl md:text-4xl text-white mb-12 text-center">
          Project Gallery
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="card-dark rounded-lg overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={`/images/gallery/${item.filename}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* Image Title */}
              <div className="p-4">
                <p className="text-sm text-gray-300 text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
