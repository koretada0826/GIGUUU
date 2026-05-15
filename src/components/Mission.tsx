import Link from 'next/link';

export default function Mission() {
  return (
    <section id="about" className="relative z-10 px-5 md:px-12 lg:px-[90px] py-16 md:py-24">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-6 relative">
            <div className="relative w-full max-w-[420px] md:max-w-[480px] aspect-[4/3] mx-auto">
              <div
                aria-hidden
                className="absolute inset-0 -rotate-3 translate-x-6 translate-y-6 bg-yellow-300"
              />
              <div
                aria-hidden
                className="absolute inset-0 rotate-6 -translate-x-4 translate-y-4 bg-fuchsia-500"
              />
              <div className="absolute inset-0 -rotate-2 overflow-hidden shadow-xl">
                <img
                  src="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-2956x2685_v-frms_webp_b3b84400-c269-420b-aa23-d976c653eb7e_small.webp"
                  alt="Hands joined together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-tight mb-2">
              Our Mission
            </h2>
            <p className="text-sm text-gray-700 mb-5 md:mb-6">私たちが描く未来</p>
            <div className="inline-block bg-fuchsia-600 text-white text-[13px] md:text-sm font-semibold px-4 py-2 mb-5 md:mb-6">
              人と価値の&ldquo;出会い&rdquo;を、もっと自由に
            </div>
            <p className="text-[14px] md:text-sm leading-[2] text-gray-700 mb-8">
              商材や手段にとらわれず、<br />
              人と人、人と情報、人とチャンスがつながるしくみを、<br />
              私たちはつくっていきます。
            </p>
            <Link
              href="/company"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-md text-sm font-medium transition"
            >
              company
              <span aria-hidden className="text-base">»</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
