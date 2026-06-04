import SectionLabel from './SectionLabel';
import Mark from './Mark';

const domains = [
  {
    no: '01',
    en: 'AI Communication',
    ja: '人と人をつなぐAI',
    desc: 'コミュニケーション領域におけるテクノロジー開発。人と人の関係を、AIがなめらかにつなぐ。',
    color: 'text-brand-green',
    hover: 'group-hover:text-brand-green',
  },
  {
    no: '02',
    en: 'AI Sales',
    ja: '営業を支援するAI',
    desc: '現場で培った営業ノウハウをAIで再現。属人化していた“勝ちパターン”を、誰もが使える仕組みに。',
    color: 'text-brand-yellow',
    hover: 'group-hover:text-brand-yellow',
  },
  {
    no: '03',
    en: 'AI Automation',
    ja: '業務を自動化するAI',
    desc: '業務自動化システムの構築・運用。人がやるべき仕事に集中できる環境をつくる。',
    color: 'text-brand-blue',
    hover: 'group-hover:text-brand-blue',
  },
  {
    no: '04',
    en: 'AI Platform',
    ja: '企業成長を支えるAI基盤',
    desc: '新しい働き方や事業創出を支えるプラットフォーム開発。企業の成長をAIで支える。',
    color: 'text-brand-pink',
    hover: 'group-hover:text-brand-pink',
  },
];

export default function AboutBusiness() {
  return (
    <section className="relative z-10 bg-[#f7f8f8] px-6 md:px-16 lg:px-[120px] py-24 md:py-36">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <SectionLabel index="06" en="BUSINESS" ja="事業領域" dotClass="bg-brand-purple" numberClass="text-brand-purple" />
            <h2 className="mt-9 md:mt-11 text-[30px] md:text-[46px] font-extrabold leading-[1.4] tracking-[-0.01em] text-gray-900">
              AIで、企業の課題を<Mark color="bg-brand-purple/25">解決</Mark>する。
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] md:text-[16px] leading-[2.05] text-gray-600">
              GIGUUUは領域を限定せず、課題のあるところに技術を届けます。
              TELEMOは、その事業領域から生まれたサービスのひとつです。
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200">
          {domains.map((d) => (
            <div
              key={d.no}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline border-b border-gray-200 py-8 md:py-11 transition-colors hover:bg-white"
            >
              <div className="md:col-span-1">
                <span className={`font-display font-extrabold text-[24px] md:text-[28px] ${d.color}`}>
                  {d.no}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className={`font-display font-bold text-[22px] md:text-[27px] text-gray-900 leading-tight transition-colors ${d.hover}`}>
                  {d.en}
                </h3>
                <p className="text-[13px] md:text-sm font-bold text-gray-500 mt-1.5">
                  {d.ja}
                </p>
              </div>
              <div className="md:col-span-7">
                <p className="text-[14px] md:text-[15px] leading-[1.95] text-gray-600">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
