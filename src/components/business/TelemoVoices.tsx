const voices = [
  {
    tag: '契約の縛り',
    quote: '半年払ってもアポは片手で数えるほど。解約しても請求書だけ届き続けた。',
    who: '製造業 / 取締役 様',
  },
  {
    tag: 'ブラックボックス',
    quote: '月1回のサマリーPDFだけ。何を話したか全く見えない。',
    who: 'IT / マーケ責任者 様',
  },
  {
    tag: 'ブランド毀損',
    quote: '後から録音を聞いて愕然。粘る強引トークを、うちの名前で。',
    who: 'SaaS / 事業責任者 様',
  },
  {
    tag: '営業知見ゼロ',
    quote: 'AI営業を使ってみたら、作ったのは営業素人のエンジニア。',
    who: 'スタートアップ / 代表 様',
  },
];

export default function TelemoVoices() {
  return (
    <section className="relative z-10 bg-[#f5f7fa] px-5 md:px-12 lg:px-[90px] py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-center text-[22px] md:text-[34px] font-extrabold text-gray-900 mb-3">
          こんな「営業代行あるある」、ありませんか？
        </h2>
        <p className="text-center text-[14px] md:text-[15px] text-gray-500 mb-12 md:mb-16">
          失敗した人ほど、刺さるはずです。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {voices.map((v) => (
            <div key={v.tag} className="relative">
              <div className="relative bg-white border border-gray-200 rounded-xl px-6 md:px-8 py-7 shadow-sm">
                <span className="absolute top-5 right-5 text-[11px] md:text-[12px] font-bold text-white bg-[#7b8aa8] rounded-full px-3 py-1">
                  {v.tag}
                </span>
                <span aria-hidden className="font-display text-[40px] leading-none text-green-200">“</span>
                <p className="mt-1 text-[15px] md:text-[17px] font-bold leading-[1.8] text-gray-800 pr-16">
                  {v.quote}
                </p>
              </div>
              <p className="mt-3 ml-2 text-[13px] md:text-[14px] font-bold text-gray-600">
                {v.who}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
