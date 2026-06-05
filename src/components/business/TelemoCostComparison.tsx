const rows = [
  { item: '月額コスト', human: '給与 28万円/月', ai: '月額 35万円（約2人分）' },
  { item: '社会保険', human: '約4.2万円（15%）', ai: '込み' },
  { item: '交通費', human: '約1万円/月', ai: '込み' },
  { item: '残業・有給', human: '約2.8万円（10%）', ai: '込み' },
  { item: '録音・ログ', human: 'なし', ai: '込み' },
  { item: '文字起こし', human: '担当メモのみ', ai: '込み' },
  { item: '教育コスト', human: '発生', ai: '0円' },
  { item: '離職リスク', human: 'あり', ai: 'なし' },
  { item: '初期費用', human: '採用広告費など', ai: '0円' },
];

export default function TelemoCostComparison() {
  return (
    <section className="relative z-10 bg-[#f5f7fa] px-5 md:px-12 lg:px-[90px] py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex items-center justify-center gap-4 mb-7">
          <span className="h-px w-8 bg-green-600" />
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.22em] text-green-700">COST COMPARISON</span>
          <span className="h-px w-8 bg-green-600" />
        </div>
        <h2 className="text-center text-[26px] md:text-[42px] font-extrabold leading-[1.35] tracking-[-0.01em] text-gray-900">
          採用<span className="text-green-600">1人分</span>の予算で
          <br />
          リスクゼロの営業力を。
        </h2>

        <div className="mt-12 md:mt-16 overflow-x-auto">
          <div className="min-w-[560px] overflow-hidden border border-gray-200 bg-white">
          <div className="grid grid-cols-3 text-center">
            <div className="bg-gray-50 py-5 px-2 text-[12px] md:text-[14px] font-bold text-gray-400">ITEM</div>
            <div className="bg-gray-100 py-5 px-2">
              <p className="text-[11px] tracking-[0.18em] text-gray-400 font-bold">HUMAN</p>
              <p className="text-[14px] md:text-[17px] font-bold text-gray-700 mt-1">人の採用（新卒）</p>
            </div>
            <div className="bg-green-600 py-5 px-2">
              <p className="text-[11px] tracking-[0.18em] text-green-100 font-bold">TELEMO</p>
              <p className="text-[14px] md:text-[17px] font-bold text-white mt-1">プロ × AI</p>
            </div>
          </div>
          {rows.map((r, i) => (
            <div key={r.item} className={`grid grid-cols-3 text-center border-t border-gray-100 ${i % 2 ? 'bg-white' : 'bg-gray-50/40'}`}>
              <div className="py-4 px-2 flex items-center justify-center text-[12px] md:text-[14px] font-bold text-gray-700">{r.item}</div>
              <div className="py-4 px-2 flex items-center justify-center text-[12px] md:text-[14px] text-gray-400">{r.human}</div>
              <div className="py-4 px-2 flex items-center justify-center gap-1.5 text-[12px] md:text-[14px] font-bold text-green-700 bg-green-50/60">
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
