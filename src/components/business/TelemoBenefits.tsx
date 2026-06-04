import Link from 'next/link';

const cards = [
  {
    no: '01',
    title: '人件費の実態を\n知っていますか',
    desc: '給与だけじゃない。社会保険（約15%）・交通費（約1万円/月）・残業/有給（約10%増）・教育コスト・管理コスト。そして最大のリスクは離職。採用→教育→戦力化→離職→再採用のループ。',
    metricLabel: '隠れコスト合計',
    metric: '月50万〜',
    note: '給与+社保+交通費+教育+管理+離職リスク',
  },
  {
    no: '02',
    title: '離職なし\n感情ブレなし',
    desc: '離職なし・教育不要・感情ブレなし・パフォーマンス一定。止まらず、忠実に、∞に稼働し続けます。月間8,800コール、人で換算すると約2人分。',
    metricLabel: 'TELEMOの稼働量',
    metric: '8,800コール/月',
    note: '※人の場合：200コール/日 × 22日 = 約4,400コール',
  },
  {
    no: '03',
    title: '本業に\n集中できる',
    desc: '新規開拓をプロに任せれば、自社は商品開発や顧客フォローなどコア業務に専念できます。',
    metricLabel: '営業工数',
    metric: '実質 0',
    note: '自社の強みに時間を使える',
  },
];

export default function TelemoBenefits() {
  return (
    <section className="relative z-10 bg-[#f5f7fa] px-5 md:px-12 lg:px-[90px] py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {cards.map((c) => (
            <div key={c.no} className="bg-white border border-gray-200 p-7 md:p-9 flex flex-col">
              <div className="font-display font-extrabold text-[44px] md:text-[56px] leading-none text-gray-900 mb-1">
                {c.no}
                <span className="text-green-300">/</span>
              </div>
              <span className="block h-[3px] w-full bg-gradient-to-r from-gray-900 to-green-400 mb-6" />
              <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 leading-snug whitespace-pre-line mb-5">
                {c.title}
              </h3>
              <p className="text-[13px] md:text-[14px] leading-[1.95] text-gray-600 mb-7">
                {c.desc}
              </p>
              <div className="mt-auto border-t border-gray-200 pt-5">
                <p className="text-[12px] text-gray-400 mb-1">{c.metricLabel}</p>
                <p className="text-[22px] md:text-[26px] font-extrabold text-green-600 leading-tight">{c.metric}</p>
                <p className="text-[11px] text-gray-400 mt-1.5 leading-relaxed">{c.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-14 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-[15px] md:text-[16px] font-bold px-10 py-4 rounded-full shadow-md transition"
          >
            まずは10〜15分だけ話しましょう
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
