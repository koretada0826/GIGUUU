import CloverField from '@/components/CloverField';

export default function AboutHero() {
  return (
    <section className="relative z-10 w-full">
      {/* Full-bleed cinematic banner */}
      <div className="relative w-full h-[78vh] min-h-[520px] max-h-[860px] overflow-hidden">
        <img
          src="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-7932x5291_v-frms_webp_50d1f066-2aed-4c62-be33-3f832a5a51df_middle.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover anim-zoom-slow"
        />
        {/* Overlays */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(31,35,40,0.50) 0%, rgba(31,35,40,0.22) 38%, rgba(31,35,40,0.45) 72%, rgba(31,35,40,0.78) 100%)',
          }}
        />
        {/* moving color glow */}
        <div
          aria-hidden
          className="absolute inset-0 anim-blob opacity-40 mix-blend-screen"
          style={{ background: 'radial-gradient(40% 50% at 30% 30%, rgba(39,168,68,0.5), transparent 70%)' }}
        />
        {/* diagonal light sweep */}
        <div className="sheen" />
        {/* floating clovers */}
        <CloverField />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full px-6 md:px-16 lg:px-[120px] max-w-[1500px] mx-auto pb-12 md:pb-0">
            <div className="flex items-center gap-3 mb-8 md:mb-10 anim-rise">
              <span className="flex gap-1">
                <span className="h-[7px] w-[7px] rounded-full bg-brand-green anim-pulse-dot" />
                <span className="h-[7px] w-[7px] rounded-full bg-brand-yellow anim-pulse-dot" style={{ animationDelay: '0.3s' }} />
                <span className="h-[7px] w-[7px] rounded-full bg-brand-pink anim-pulse-dot" style={{ animationDelay: '0.6s' }} />
              </span>
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.34em] text-white">
                ABOUT GIGUUU
              </span>
            </div>

            <h1 className="text-white text-[36px] sm:text-[56px] md:text-[72px] lg:text-[86px] font-extrabold leading-[1.2] tracking-[-0.01em] anim-rise" style={{ animationDelay: '0.15s' }}>
              人の限界を、
              <br />
              技術で
              <span className="relative inline-block">
                <span className="relative z-10">超えていく。</span>
                <span
                  aria-hidden
                  className="absolute left-0 -bottom-1 md:-bottom-2 h-[8px] md:h-[12px] w-full z-0 rounded-full anim-gradient-bar"
                  style={{
                    background:
                      'linear-gradient(90deg, #27a844, #f5b81e, #2ba0e0, #e5397f, #27a844)',
                  }}
                />
              </span>
            </h1>

            <p className="mt-9 md:mt-11 text-[14px] md:text-[16px] leading-[2.1] text-gray-300/90 max-w-[600px] font-light anim-rise" style={{ animationDelay: '0.3s' }}>
              GIGUUU株式会社は、AI・自動化技術・データ活用を通じて、
              企業が抱えるさまざまな課題を解決するために設立された
              テクノロジーカンパニーです。
            </p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden md:flex absolute bottom-7 right-8 lg:right-[120px] flex-col items-center gap-2 anim-bounce-down">
          <span className="text-[10px] tracking-[0.3em] text-white/55">SCROLL</span>
          <span aria-hidden className="block w-px h-10 bg-gradient-to-b from-white/55 to-transparent" />
        </div>
      </div>
    </section>
  );
}
