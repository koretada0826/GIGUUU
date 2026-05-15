import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GIGUUU株式会社　公式HP',
  description: 'Connect the Dots. 1つの出会いが可能性に繋がる。GIGUUU株式会社の公式サイトです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
