export default function Hero() {
  return (
    <section className="relative z-10 px-5 md:px-12 lg:px-[90px] pt-4 pb-16 md:pb-24 lg:pb-32">
      <div className="relative max-w-[1700px] mx-auto">
        {/* Mobile / tablet (stacked) */}
        <div className="lg:hidden">
          <h1 className="font-display font-extrabold text-[64px] sm:text-[88px] md:text-[120px] leading-[1.05] tracking-[-0.02em] text-gray-900 mb-6">
            Connect<br />the<br />Dots.
          </h1>
          <div className="w-full aspect-[16/10] overflow-hidden shadow-md mb-10">
            <img
              src="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-7932x5291_v-frms_webp_50d1f066-2aed-4c62-be33-3f832a5a51df_middle.webp"
              alt="City skyline"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-[22px] md:text-[26px] font-bold leading-[1.5] text-gray-900 mb-5">
            1つの出会いが<br />可能性に繋がる
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.9] text-gray-800">
            今のあなたとまだ知らない誰かを結ぶことで、
            小さな&ldquo;きっかけ&rdquo;が生まれるかもしれない。
            GIGUUUは、そんな未来を広げる場所です。
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-12 gap-10">
          <div className="col-span-8 relative">
            <h1 className="font-display font-extrabold text-[170px] leading-[1.05] tracking-[-0.02em] text-gray-900 relative z-20">
              Connect<br />the<br />Dots.
            </h1>
            <div className="absolute left-0 top-[230px] w-[700px] h-[400px] z-10 overflow-hidden shadow-md">
              <img
                src="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-7932x5291_v-frms_webp_50d1f066-2aed-4c62-be33-3f832a5a51df_middle.webp"
                alt="City skyline"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-4 relative z-30 flex flex-col justify-start pt-[320px] pr-4">
            <h2 className="text-[32px] font-bold leading-[1.5] text-gray-900 mb-8">
              1つの出会いが<br />可能性に繋がる
            </h2>
            <p className="text-[15px] leading-[1.9] text-gray-800">
              今のあなたとまだ知らない誰かを結ぶことで、<br />
              小さな&ldquo;きっかけ&rdquo;が生まれるかもしれない。<br />
              GIGUUUは、そんな未来を広げる場所です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
