import type { Dict } from '@/dictionaries'

interface FooterProps {
  lang: string
  dict: Dict
}

export default function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="bg-[#1e1e1e] border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-6">
        <p className="text-sm text-gray-500 text-center">
          <span id="footer-year">© 2026 {dict.footer.company}</span>
        </p>
      </div>
    </footer>
  )
}