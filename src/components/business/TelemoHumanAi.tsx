const rows = [
  { item: '稼働時間', human: '平日8時間', ai: '24時間365日稼働' },
  { item: 'コール量', human: '月500〜1,000件', ai: '月8,800コール（約2人分）' },
  { item: '通話ログ', human: '担当メモのみ', ai: '全通話を100%記録' },
  { item: '品質', human: '人によってバラつく', ai: 'トップ営業の品質で一定' },
];

export default function TelemoHumanAi() {
  return (
    <section className="relative z-10 bg-white px-5 md:px-12 lg:px-[90px] py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-center gap-4 mb-7">
          <span className="h-px w-8 bg-green-600" />
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.22em] text-green-700">HUMAN × AI</span>
          <span className="h-px w-8 bg-green-600" />
        </div>
        <h2 className="text-center text-[26px] md:text-[42px] font-extrabold leading-[1.35] tracking-[-0.01em] text-gray-900">
          営業歴<span className="text-green-600">15年</span>のプロが、
          <br />
          AIと融合したらどうなるか。
        </h2>
        <p className="mt-6 text-center text-[14px] md:text-[16px] leading-[1.9] text-gray-600">
          プロの現場知見で設計し、AIで実行量・データ・品質を底上げ。
          <br className="hidden md:block" />
          「人がやる営業」の限界を、TELEMOはひとつずつ外しました。
        </p>

        {/* Comparison table (scrolls horizontally on small screens) */}
        <div className="mt-12 md:mt-16 overflow-x-auto">
          <div className="min-w-[560px] overflow-hidden border border-gray-200">
          <div className="grid grid-cols-3 text-center">
            <div className="bg-gray-50 py-5 px-2 text-[12px] md:text-[14px] font-bold text-gray-400">ITEM</div>
            <div className="bg-gray-100 py-5 px-2">
              <p className="text-[11px] tracking-[0.18em] text-gray-400 font-bold">HUMAN</p>
              <p className="text-[14px] md:text-[18px] font-bold text-gray-700 mt-1">人の営業</p>
            </div>
            <div className="bg-green-600 py-5 px-2">
              <p className="text-[11px] tracking-[0.18em] text-green-100 font-bold">TELEMO</p>
              <p className="text-[14px] md:text-[18px] font-bold text-white mt-1">プロ × AI</p>
            </div>
          </div>
          {rows.map((r, i) => (
            <div key={r.item} className={`grid grid-cols-3 text-center ${i % 2 ? 'bg-white' : 'bg-gray-50/50'}`}>
              <div className="py-5 px-2 flex items-center justify-center text-[13px] md:text-[15px] font-bold text-gray-700">
                {r.item}
              </div>
              <div className="py-5 px-2 flex items-center justify-center text-[13px] md:text-[15px] text-gray-400">
                {r.human}
              </div>
              <div className="py-5 px-2 flex items-center justify-center gap-1.5 text-[13px] md:text-[15px] font-bold text-green-700 bg-green-50/60">
                <span aria-hidden className="text-green-500">✓</span>
                {r.ai}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
