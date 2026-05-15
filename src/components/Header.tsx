import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative z-10 w-full px-[90px] pt-8 pb-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="giguuu-logo text-[28px] tracking-[0.08em] text-black">
          GIGUUU
        </Link>
        <nav className="flex items-center gap-8 text-sm text-gray-800">
          <Link href="/company" className="hover:opacity-70 transition">会社情報</Link>
          <Link href="/business" className="hover:opacity-70 transition">事業紹介</Link>
          <Link href="/policy" className="hover:opacity-70 transition">各種ポリシー</Link>
          <Link
            href="/contact"
            className="bg-black text-white px-5 py-2.5 rounded-md text-sm hover:bg-gray-800 transition"
          >
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
