import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-white py-10 md:py-12 px-5 md:px-12 lg:px-[90px]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <div className="giguuu-logo text-[24px] md:text-[28px] tracking-[0.08em] text-black mb-5 md:mb-6">
              GIGUUU
            </div>
            <div className="flex items-center gap-5 text-gray-800">
              <a
                href="https://twitter.com/studio"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2H21.5l-7.36 8.41L23 22h-6.844l-5.36-7.01L4.7 22H1.44l7.87-8.99L1 2h7l4.84 6.39L18.244 2zm-1.2 18h1.83L7.04 4H5.1l11.944 16z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/studiodesignapp/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/studio__________/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
          <nav className="md:col-span-8 flex flex-col gap-3 text-sm text-gray-800">
            <Link href="/company" className="hover:opacity-70 transition">会社情報</Link>
            <Link href="/business" className="hover:opacity-70 transition">事業紹介</Link>
            <Link href="/policy" className="hover:opacity-70 transition">各種ポリシー</Link>
            <Link href="/contact" className="hover:opacity-70 transition">お問い合わせ</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
