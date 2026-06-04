import SectionLabel from './SectionLabel';
import Mark from './Mark';

export default function AboutWhy() {
  return (
    <section className="relative z-10 bg-white px-6 md:px-16 lg:px-[120px] py-24 md:py-36">
      <div className="max-w-[860px] mx-auto">
        <SectionLabel index="05" en="OUR STORY" ja="なぜGIGUUUを作ったのか" dotClass="bg-brand-blue" numberClass="text-brand-blue" />

        <div className="mt-14 md:mt-20 space-y-9 text-[16px] md:text-[17px] leading-[2.15] text-gray-600">
          <p>
            私たちは営業会社として、数百万件以上のコールと向き合ってきました。
            そこで見えた、ひとつの現実があります。
          </p>

          <p className="text-[26px] md:text-[38px] font-extrabold leading-[1.5] text-gray-900 tracking-[-0.01em]">
            営業は<Mark color="bg-brand-blue/25">才能ではない</Mark>。
            <br />
            仕組みです。
          </p>

          <p>
            しかし、その仕組みを作るには、膨大な教育コストと時間が必要でした。
            だから私たちは考えました。
          </p>

          <blockquote className="my-2 border-l-2 border-emerald-500 pl-6 md:pl-8 py-1 text-[18px] md:text-[21px] font-normal leading-[2] text-gray-900">
            「優秀な営業を採用する」のではなく、
            <br />
            「優秀な営業を、AIで再現できないか」。
          </blockquote>

          <p>
            その答えとして生まれたのが、<span className="giguuu-logo tracking-[0.04em] text-gray-900">TELEMO</span> です。
          </p>
        </div>

        {/* Closing statement band */}
        <div className="mt-16 md:mt-24 border-t border-gray-200 pt-12 md:pt-16">
          <p className="text-[15px] md:text-[17px] leading-[2.1] text-gray-500 mb-8">
            営業が強い会社だけが成長する時代を終わらせる。
            <br />
            採用できる会社だけが勝つ時代を終わらせる。
            <br />
            人材不足で挑戦を諦める企業を、なくす。
          </p>
          <p className="text-[26px] md:text-[38px] font-extrabold leading-[1.55] tracking-[-0.01em] text-gray-900">
            AIによって、企業規模に関係なく
            <br />
            <Mark color="bg-brand-yellow/55">挑戦できる社会</Mark>をつくる。
          </p>
        </div>
      </div>
    </section>
  );
}
