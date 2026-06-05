import SectionLabel from './SectionLabel';
import Mark from './Mark';

const domains = [
  {
    no: '01',
    en: 'AI Communication',
    ja: '人と人をつなぐAI',
    desc: 'コミュニケーション領域におけるテクノロジー開発。電話・チャット・音声をAIが担い、人と人、人と企業の接点をなめらかにつなぎます。「伝わらない」「届かない」をなくし、機会損失を防ぎます。',
    tags: ['AI自動応答', 'ボイスボット', '問い合わせ対応'],
    service: null,
    color: 'text-brand-green',
    hover: 'group-hover:text-brand-green',
    chip: 'bg-brand-green/10 text-brand-green',
  },
  {
    no: '02',
    en: 'AI Sales',
    ja: '営業を支援するAI',
    desc: '現場で培った営業ノウハウをAIで再現。トップ営業の話し方・分岐・タイミングを仕組み化し、属人化していた“勝ちパターン”を、誰もが使える形にします。教育コストをかけずに、成果を量産。',
    tags: ['AI自動コール', 'トーク設計', '商談獲得'],
    service: 'TELEMO',
    color: 'text-brand-yellow',
    hover: 'group-hover:text-brand-yellow',
    chip: 'bg-brand-yellow/15 text-yellow-700',
  },
  {
    no: '03',
    en: 'AI Automation',
    ja: '業務を自動化するAI',
    desc: '繰り返しの業務やデータ処理をAI・自動化技術で巻き取り、業務自動化システムを構築・運用。人は判断や創造といった「人がやるべき仕事」に集中できる環境をつくります。',
    tags: ['業務自動化', 'データ抽出', 'ワークフロー連携'],
    service: null,
    color: 'text-brand-blue',
    hover: 'group-hover:text-brand-blue',
    chip: 'bg-brand-blue/10 text-brand-blue',
  },
  {
    no: '04',
    en: 'AI Platform',
    ja: '企業成長を支えるAI基盤',
    desc: '新しい働き方や事業創出を支えるプラットフォームを開発。蓄積したデータとAIを基盤化し、単発のツールで終わらせず、企業が継続的に成長し続けられる土台をつくります。',
    tags: ['データ基盤', '新規事業創出', '働き方改革'],
    service: null,
    color: 'text-brand-pink',
    hover: 'group-hover:text-brand-pink',
    chip: 'bg-brand-pink/10 text-brand-pink',
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
              4つの領域が連携し、企業の「できない」を一つずつ減らしていきます。
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200">
          {domains.map((d) => (
            <div
              key={d.no}
              className="group grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start border-b border-gray-200 py-9 md:py-12 transition-colors hover:bg-white"
            >
              <div className="md:col-span-1">
                <span className={`font-display font-extrabold text-[26px] md:text-[30px] ${d.color}`}>
                  {d.no}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className={`font-display font-bold text-[22px] md:text-[28px] text-gray-900 leading-tight transition-colors ${d.hover}`}>
                  {d.en}
                </h3>
                <p className="text-[13px] md:text-sm font-bold text-gray-500 mt-1.5">
                  {d.ja}
                </p>
                {d.service && (
                  <div className="mt-4 inline-flex items-center gap-2 bg-gray-900 text-white text-[11px] md:text-[12px] font-bold px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green anim-pulse-dot" />
                    代表サービス：{d.service}
                  </div>
                )}
              </div>
              <div className="md:col-span-7">
                <p className="text-[14px] md:text-[15px] leading-[2] text-gray-600">
                  {d.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] md:text-[12px] font-bold px-3 py-1.5 rounded-full ${d.chip}`}
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-12 md:mt-16 text-center text-[16px] md:text-[20px] font-bold text-gray-900">
          すべての事業は、
          <span className="text-brand-purple">「人の可能性を広げる」</span>
          という一点でつながっています。
        </p>
      </div>
    </section>
  );
}
