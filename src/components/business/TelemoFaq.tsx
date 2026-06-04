const faqs = [
  {
    q: '本当に月間8,800コールされますか？',
    a: 'はい。AIが24時間365日稼働し、月8,800コールを安定して実行します。人の営業（約200コール/日 × 22日 = 約4,400コール）の約2人分の架電量です。',
  },
  {
    q: 'どんな業種に対応していますか？',
    a: '新規開拓のテレアポが有効な業種であれば幅広く対応可能です。これまで製造業・IT・SaaS・人材・士業など、多様な業界で実績があります。まずはご相談ください。',
  },
  {
    q: 'トークスクリプトは誰がどうやって作りますか？',
    a: '15年以上の営業実績を持つプロが、現場ベースでトークツリーを設計します。「人が設計し、AIが動かし、人が磨く」体制なので、エンジニアだけが作る仕組みとは精度が違います。',
  },
  {
    q: '契約期間はどのくらいですか？',
    a: '長期縛りはありません。「結果が出ないのに払い続ける」をなくすため、柔軟な契約形態をご用意しています。詳細は無料相談でご案内します。',
  },
  {
    q: '初期費用はかかりますか？',
    a: '初期費用は0円です。月額35万円（約2人分の稼働）に、通信費・録音・ログ・文字起こしまですべて込みです。',
  },
  {
    q: '人の営業と比べてどのくらいコスト削減できますか？',
    a: '人を1人採用すると、給与に加えて社会保険・交通費・残業/有給・教育・管理コスト、さらに離職リスクが発生し、隠れコストは月50万円〜にのぼります。TELEMOなら採用1人分の予算で、約2人分の稼働をリスクゼロで実現できます。',
  },
  {
    q: 'どのくらいで成果が出ますか？',
    a: '最短5営業日でコールを開始できます。テスト架電で反応データを見ながらトークを最適化し、本稼働後も全通話ログを基に継続的に改善していきます。',
  },
  {
    q: '途中でスクリプトやターゲットの変更はできますか？',
    a: 'はい、可能です。市場や反応に合わせてトークスクリプト・ターゲットを柔軟に調整します。データに基づき「売れる会話」へ磨き続けます。',
  },
];

export default function TelemoFaq() {
  return (
    <section className="relative z-10 bg-[#f5f7fa] px-5 md:px-12 lg:px-[90px] py-16 md:py-24">
      <div className="max-w-[900px] mx-auto">
        <p className="text-center text-[12px] md:text-[13px] font-bold tracking-[0.22em] text-green-700 mb-4">FAQ</p>
        <h2 className="text-center text-[26px] md:text-[40px] font-extrabold tracking-[-0.01em] text-gray-900 mb-3">
          よくあるご質問
        </h2>
        <p className="text-center text-[14px] md:text-[15px] text-gray-500 mb-12 md:mb-14">
          TELEMOについて、よくいただくご質問をまとめました。
        </p>

        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-white border border-gray-200 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 md:px-7 py-5">
                <span className="flex items-start gap-3 text-[15px] md:text-[16px] font-bold text-gray-900">
                  <span className="text-green-600 font-display">Q.</span>
                  {f.q}
                </span>
                <span aria-hidden className="shrink-0 text-green-600 text-[22px] leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-5 md:px-7 pb-6 pt-0">
                <div className="flex items-start gap-3 text-[14px] md:text-[15px] leading-[1.95] text-gray-600 border-t border-gray-100 pt-5">
                  <span className="text-gray-400 font-display font-bold">A.</span>
                  <p>{f.a}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
