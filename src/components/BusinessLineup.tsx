import Link from 'next/link';

export default function BusinessLineup() {
  return (
    <section id="business" className="relative z-10 bg-[#fdf6dc] py-16 md:py-24 px-5 md:px-12 lg:px-[90px]">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-6 md:order-1 order-2">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-gray-900 leading-tight mb-2">
              Business Lineup
            </h2>
            <p className="text-sm text-gray-700 mb-5 md:mb-6">ビジネスラインナップ</p>
            <div className="inline-block bg-fuchsia-600 text-white text-[13px] md:text-sm font-semibold px-4 py-2 mb-5 md:mb-6">
              多様な手段で、出会いを形に
            </div>
            <p className="text-[14px] md:text-sm leading-[2] text-gray-700 mb-8">
              商材や方法にしばられず、つながり方をもっと自由に。<br />
              GIGUUUが届ける、多彩なサービスをご紹介します。
            </p>
            <Link
              href="/business"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-md text-sm font-medium transition"
            >
              service
              <span aria-hidden className="text-base">»</span>
            </Link>
          </div>
          <div className="md:col-span-6 md:order-2 order-1 relative">
            <div className="relative w-full max-w-[420px] md:max-w-[480px] aspect-[3/2] mx-auto">
              <div
                aria-hidden
                className="absolute inset-0 -rotate-6 translate-x-6 translate-y-6 bg-fuchsia-500"
              />
              <div
                aria-hidden
                className="absolute inset-0 rotate-3 -translate-x-2 translate-y-3 bg-yellow-300"
              />
              <div className="absolute inset-0 rotate-1 overflow-hidden shadow-xl">
                <img
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-3059x2096_v-frms_webp_efd1ff7c-f70d-4db1-850b-19b2fc00b4ac_small.webp"
                  alt="Colorful laptop keyboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
