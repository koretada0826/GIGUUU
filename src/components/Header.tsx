'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '/company', label: '会社情報' },
    { href: '/business', label: '事業紹介' },
    { href: '/policy', label: '各種ポリシー' },
  ];

  return (
    <header className="relative z-30 w-full px-5 md:px-12 lg:px-[90px] pt-6 md:pt-8 pb-4">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="giguuu-logo text-[22px] md:text-[26px] lg:text-[28px] tracking-[0.08em] text-black"
        >
          GIGUUU
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-800">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-70 transition">
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

        <button
          type="button"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
        >
          <span className={`block w-6 h-[2px] bg-black transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[2px] bg-black transition ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-black transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden mt-4 flex flex-col gap-1 bg-white border border-gray-100 rounded-md p-3 text-sm text-gray-800 shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 px-2 rounded hover:bg-gray-50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-1 bg-black text-white py-2.5 px-3 rounded text-center"
          >
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  );
}
