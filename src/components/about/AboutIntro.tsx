import SectionLabel from './SectionLabel';
import Mark from './Mark';
import Clover from '@/components/Clover';

export default function AboutIntro() {
  return (
    <section className="relative z-10 bg-white px-6 md:px-16 lg:px-[120px] pt-24 md:pt-36 pb-20 md:pb-28">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="01" en="ABOUT US" ja="GIGUUUとは" dotClass="bg-brand-green" numberClass="text-brand-green" />

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Heading */}
          <div className="lg:col-span-5">
            <h2 className="text-[38px] md:text-[58px] font-extrabold leading-[1.35] tracking-[-0.02em] text-gray-900">
              現場を知る、
              <br className="hidden md:block" />
              <Mark color="bg-brand-green/30"><span className="text-brand-green">AI</span></Mark>の会社。
            </h2>
            <p className="mt-8 inline-block bg-gray-900 text-white text-[13px] md:text-[14px] font-bold tracking-wide px-5 py-3">
              営業会社が作った、AIの会社。
            </p>

            {/* Stats / credentials */}
            <div className="mt-12 md:mt-16 border-t border-gray-200 pt-10 md:pt-12">
              <div className="flex items-end gap-2.5">
                <span className="font-display text-[56px] md:text-[72px] font-extrabold leading-none text-brand-green">
                  数百万
                </span>
                <span className="text-[22px] md:text-[26px] font-extrabold text-brand-green mb-1.5">件+</span>
              </div>
              <p className="mt-3 text-[13px] md:text-[14px] text-gray-500">
                これまで現場で向き合ってきたコール実績
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[22px] md:text-[26px] font-extrabold text-gray-900 leading-tight">営業会社発</p>
                  <p className="mt-2 text-[12px] md:text-[13px] leading-relaxed text-gray-500">
                    エンジニア発ではない、独自のポジション
                  </p>
                </div>
                <div>
                  <p className="text-[22px] md:text-[26px] font-extrabold text-gray-900 leading-tight">現場主義</p>
                  <p className="mt-2 text-[12px] md:text-[13px] leading-relaxed text-gray-500">
                    「本当に使われる仕組み」だけを構築する
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="lg:col-span-7 lg:pt-2">
            <div className="space-y-7 text-[16px] md:text-[18px] leading-[2.15] text-gray-600">
              <p>
                私たちは営業会社として、数百万件以上のコールと向き合ってきました。
                そこで見えたのは、<span className="text-gray-900 font-semibold">「営業は才能ではなく、仕組みである」</span>
                という現実です。
              </p>
              <p>
                世の中のAI会社はエンジニア発が多い。けれど私たちは、現場で何百万コールも積み重ねてきた
                <span className="text-gray-900 font-semibold">“営業会社発のAI企業”</span>です。
              </p>
              <p>
                単なるシステム開発会社ではありません。現場で本当に起きている課題を理解し、
                <span className="text-gray-900 font-semibold">「本当に使われる仕組み」</span>を構築することを目的としています。
              </p>
            </div>

            {/* Decorative clover cluster — fills the lower-right space */}
            <div aria-hidden className="relative mt-16 hidden lg:block h-[300px]">
              {/* soft glow */}
              <div
                className="absolute right-6 top-6 w-[260px] h-[260px] rounded-full blur-3xl opacity-40"
                style={{ background: 'radial-gradient(circle, #34c95a 0%, transparent 70%)' }}
              />
              {/* big clover, slowly spinning */}
              <Clover className="absolute right-2 top-2 w-[230px] h-[230px] anim-spin-slower drop-shadow-md" />
              {/* small floating clovers */}
              <Clover className="absolute right-[238px] top-[120px] w-[78px] h-[78px] anim-float opacity-90" />
              <Clover className="absolute right-[60px] bottom-[6px] w-[54px] h-[54px] anim-float-x opacity-80" />
              {/* sparkle dots */}
              <span className="absolute right-[300px] top-[40px] w-2.5 h-2.5 rounded-full bg-brand-yellow anim-pulse-dot" />
              <span className="absolute right-[180px] top-[10px] w-2 h-2 rounded-full bg-brand-pink anim-pulse-dot" style={{ animationDelay: '0.4s' }} />
              <span className="absolute right-[120px] bottom-[70px] w-2 h-2 rounded-full bg-brand-blue anim-pulse-dot" style={{ animationDelay: '0.8s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
