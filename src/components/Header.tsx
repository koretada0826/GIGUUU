import Link from 'next/link';

const navItems = [
  { href: '/about', label: 'GIGUUUとは' },
  { href: '/company', label: '会社情報' },
  { href: '/business', label: '事業紹介' },
  { href: '/policy', label: '各種ポリシー' },
];

export default function Header() {
  return (
    <header className="relative z-30 w-full px-5 md:px-12 lg:px-[90px] pt-6 md:pt-8 pb-4">
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="GIGUUU トップへ" className="inline-flex items-center">
          <img
            src="/giguuu-logo.png"
            alt="GIGUUU"
            className="h-12 md:h-14 lg:h-[60px] w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:opacity-70 transition"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-black text-white px-5 py-2.5 rounded-md text-sm hover:bg-gray-800 transition"
          >
            お問い合わせ
          </Link>
        </nav>

        <details className="md:hidden relative">
          <summary
            aria-label="メニューを開く"
            className="list-none cursor-pointer flex flex-col gap-[5px] p-2 -mr-2"
          >
            <span className="block w-6 h-[2px] bg-black" />
            <span className="block w-6 h-[2px] bg-black" />
            <span className="block w-6 h-[2px] bg-black" />
          </summary>
          <nav className="absolute right-0 top-full mt-2 w-56 flex flex-col gap-1 bg-white border border-gray-100 rounded-md p-3 text-sm text-gray-800 shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2.5 px-2 rounded hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-1 bg-black text-white py-2.5 px-3 rounded text-center"
            >
              お問い合わせ
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
