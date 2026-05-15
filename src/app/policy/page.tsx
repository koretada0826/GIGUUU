import PageShell from '@/components/PageShell';

export const metadata = {
  title: '各種ポリシー | GIGUUU株式会社',
};

export default function PolicyPage() {
  return (
    <PageShell>
      <section className="relative z-10 px-[90px] pt-12 pb-32">
        <div className="max-w-[900px] mx-auto pl-[120px]">
          <h1 className="font-display font-extrabold text-[88px] leading-[1.05] tracking-[-0.02em] text-gray-900 mb-6">
            Policy.
          </h1>
          <p className="text-[15px] leading-[1.9] text-gray-700">
            各種ポリシーは現在準備中です。
          </p>
        </div>
      </section>
    </PageShell>
  );
}
