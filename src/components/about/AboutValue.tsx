import SectionLabel from './SectionLabel';

const values = [
  {
    no: '01',
    en: 'CHALLENGE',
    title: '挑戦を止めない',
    desc: '失敗を恐れず挑戦する。誰もやっていないからこそ、私たちがやる意味がある。前例がないことにこそ、本当の価値がある。',
    point: '前例がない＝伸びしろ。',
    color: 'text-brand-yellow',
    bar: 'bg-brand-yellow',
  },
  {
    no: '02',
    en: 'QUESTION',
    title: '常識を疑う',
    desc: '今までのやり方に縛られない。「当たり前」を一度立ち止まって疑い、机上の空論ではなく、現場で起きている事実から考える。',
    point: 'その当たり前、本当に正しい？',
    color: 'text-brand-blue',
    bar: 'bg-brand-blue',
  },
  {
    no: '03',
    en: 'VALUE',
    title: '技術を価値に変える',
    desc: 'AIは目的ではなく、課題解決の手段。流行を追うのではなく、現場で本当に使われ、成果につながる形まで徹底して磨き上げる。',
    point: '技術のためのAIは、作らない。',
    color: 'text-brand-pink',
    bar: 'bg-brand-pink',
  },
  {
    no: '04',
    en: 'PEOPLE',
    title: '人を主役にする',
    desc: 'テクノロジーの先にいるのは、いつも人。まず動き、改善しながら進化する。人の可能性を広げるためにこそ、技術を使う。',
    point: 'AIの主役は、いつも人。',
    color: 'text-brand-green',
    bar: 'bg-brand-green',
  },
];

export default function AboutValue() {
  return (
    <section className="relative z-10 bg-[#3f4449] px-6 md:px-16 lg:px-[120px] py-24 md:py-36">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="04" en="VALUE" ja="行動指針" light dotClass="bg-brand-yellow" numberClass="text-brand-yellow" />

        <h2 className="mt-9 md:mt-11 text-[28px] md:text-[44px] font-extrabold leading-[1.45] tracking-[-0.01em] text-white max-w-[760px]">
          私たちが、
          <br className="md:hidden" />
          大切にしている<span className="text-brand-yellow">4つ</span>のこと。
        </h2>
        <p className="mt-6 text-[14px] md:text-[16px] leading-[2] text-gray-300 max-w-[620px]">
          GIGUUUらしさは、この4つの行動指針に宿っています。
          技術の前に、まず「どう在るか」を大切にしています。
        </p>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {values.map((v) => (
            <div
              key={v.no}
              className="group relative overflow-hidden bg-white/[0.04] border border-white/10 p-8 md:p-11 transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_18px_50px_-12px_rgba(39,168,68,0.45)]"
            >
              {/* Ghost numeral — light green */}
              <span
                aria-hidden
                className="absolute -top-8 -right-3 font-display font-extrabold text-[130px] md:text-[170px] leading-none text-green-400/[0.13] select-none transition-transform duration-500 group-hover:scale-110"
              >
                {v.no}
              </span>
              {/* Accent bar */}
              <span className={`block h-[5px] w-12 ${v.bar} mb-7 transition-all duration-300 group-hover:w-24`} />
              <div className="relative flex items-baseline gap-4 mb-1.5">
                <span className={`font-display font-extrabold text-[28px] md:text-[34px] ${v.color} leading-none`}>
                  {v.no}
                </span>
                <h3 className="text-[22px] md:text-[28px] font-bold text-white">
                  {v.title}
                </h3>
              </div>
              <p className={`relative text-[11px] font-bold tracking-[0.22em] mb-5 ${v.color}`}>
                {v.en}
              </p>
              <p className="relative text-[14px] md:text-[15px] leading-[2] text-gray-300 max-w-[460px]">
                {v.desc}
              </p>
              <div className="relative mt-6 pt-5 border-t border-white/10">
                <p className="text-[15px] md:text-[17px] font-bold text-white">
                  <span className={`mr-2 ${v.color}`}>“</span>
                  {v.point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
