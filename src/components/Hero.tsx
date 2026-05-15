export default function Hero() {
  return (
    <section className="relative z-10 px-[90px] pt-4 pb-32">
      <div className="relative max-w-[1700px] mx-auto">
        <div className="grid grid-cols-12 gap-10">
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
