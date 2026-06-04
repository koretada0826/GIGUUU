import Link from 'next/link';
import SectionLabel from './SectionLabel';
import Mark from './Mark';
import CloverField from '@/components/CloverField';

export default function AboutMessage() {
  return (
    <>
      {/* Message */}
      <section className="relative z-10 bg-white px-6 md:px-16 lg:px-[120px] py-24 md:py-36">
        <div className="max-w-[860px] mx-auto">
          <SectionLabel index="07" en="MESSAGE" ja="代表メッセージ" dotClass="bg-brand-red" numberClass="text-brand-red" />

          <div className="mt-14 md:mt-20 space-y-7 text-[16px] md:text-[17px] leading-[2.15] text-gray-600">
            <p>
              AIは、人を減らすためにあるのではありません。
              人がもっと価値ある仕事をするためにあります。
            </p>
            <p>
              私たちはAIを売りたいわけではありません。企業の可能性を広げたい。
              挑戦する人を増やしたい。そのための手段として、AIを提供しています。
            </p>
            <p className="text-[24px] md:text-[36px] font-extrabold leading-[1.55] tracking-[-0.01em] text-gray-900 py-2">
              技術が目的ではなく、
              <br />
              <Mark color="bg-brand-red/20">課題解決</Mark>こそが目的である。
            </p>
            <p>
              GIGUUU株式会社は、これからも企業の挑戦を支える仕組みを創り続けます。
            </p>
          </div>

          <div className="mt-12 md:mt-16 flex items-center justify-end border-t border-gray-200 pt-8">
            <span className="text-[18px] md:text-[22px] font-bold tracking-wide text-gray-900">
              GIGUUU株式会社
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 w-full overflow-hidden">
        <div className="relative h-[420px] md:h-[480px]">
          <img
            src="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-7932x5291_v-frms_webp_50d1f066-2aed-4c62-be33-3f832a5a51df_middle.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover anim-zoom-slow"
          />
          <div aria-hidden className="absolute inset-0 bg-[#1f2328]/80" />
          <div
            aria-hidden
            className="absolute inset-0 anim-blob opacity-40 mix-blend-screen"
            style={{ background: 'radial-gradient(45% 55% at 70% 40%, rgba(39,168,68,0.55), transparent 70%)' }}
          />
          <CloverField />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-[26px] md:text-[42px] font-extrabold text-white leading-[1.45] tracking-[-0.01em] mb-6">
              企業の挑戦を、技術で<Mark color="bg-brand-green/50">支える</Mark>。
            </h2>
            <p className="text-[14px] md:text-[16px] leading-[2] text-gray-300 mb-9 max-w-[560px]">
              AI・自動化で解決したい課題はありますか。
              まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="anim-glow inline-flex items-center justify-center gap-2 anim-gradient-bar text-white px-9 py-4 text-sm font-bold tracking-wide rounded-md hover:scale-105 transition-transform"
                style={{ background: 'linear-gradient(90deg, #27a844, #34c95a, #2ba0e0, #27a844)' }}
              >
                お問い合わせ
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/business"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 px-9 py-4 text-sm font-semibold tracking-wide transition"
              >
                事業を見る
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
