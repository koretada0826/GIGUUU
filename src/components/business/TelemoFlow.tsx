const steps = [
  {
    no: '01',
    title: '無料相談・ヒアリング',
    desc: '現状の営業課題・ターゲット・目標をお伺いします。所要10〜15分、売り込みはしません。',
  },
  {
    no: '02',
    title: 'ターゲット設計・トーク構築',
    desc: '15年のノウハウでリスト作成とトークスクリプトを設計。AIに勝ちパターンを実装します。',
  },
  {
    no: '03',
    title: 'テストコール',
    desc: '少量で架電し、反応データを見ながらトークと分岐をチューニングします。',
  },
  {
    no: '04',
    title: '本稼働・改善',
    desc: '月8,800コールで運用開始。全通話ログを見ながら、継続的に成果を改善します。',
  },
];

export default function TelemoFlow() {
  return (
    <section className="relative z-10 bg-white px-5 md:px-12 lg:px-[90px] py-16 md:py-24">
      <div className="max-w-[1180px] mx-auto">
        <p className="text-center text-[12px] md:text-[13px] font-bold tracking-[0.22em] text-green-700 mb-4">FLOW</p>
        <h2 className="text-center text-[26px] md:text-[42px] font-extrabold tracking-[-0.01em] text-gray-900 mb-12 md:mb-16">
          最短<span className="text-green-600">5営業日</span>でコール開始
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-5">
          {steps.map((s, i) => (
            <div key={s.no} className="relative bg-[#123a2a] text-white p-7 md:p-8 flex flex-col">
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-green-400 text-2xl z-10"
                >
                  ›
                </span>
              )}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display font-extrabold text-[34px] md:text-[40px] leading-none text-green-400">
                  {s.no}
                </span>
                <span className="text-[11px] tracking-[0.2em] font-bold text-gray-400">STEP</span>
              </div>
              <h3 className="text-[17px] md:text-[19px] font-bold mb-3 leading-snug">{s.title}</h3>
              <p className="text-[13px] md:text-[14px] leading-[1.9] text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
