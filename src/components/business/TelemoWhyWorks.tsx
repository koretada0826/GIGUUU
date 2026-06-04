const points = [
  {
    no: '01',
    title: '余計な会話は一切しない',
    desc: '目的のない雑談・回りくどい説明はゼロ。必要な情報だけを、必要な順番で。',
  },
  {
    no: '02',
    title: 'YESを取るための流れ',
    desc: '相手が「はい」と言いやすい質問設計。小さなYESを積み重ねて商談へ導きます。',
  },
  {
    no: '03',
    title: '温度感の見極め',
    desc: '相手の反応から興味度を即座に判定。見込みのある先だけにリソースを集中。',
  },
  {
    no: '04',
    title: 'トスまでの最短導線',
    desc: 'アポイント獲得までの無駄なステップを排除。最短ルートで商談の場を作ります。',
  },
];

export default function TelemoWhyWorks() {
  return (
    <section className="relative z-10 bg-white px-5 md:px-12 lg:px-[90px] py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-center gap-4 mb-7">
          <span className="h-px w-8 bg-green-600" />
          <span className="text-[12px] md:text-[13px] font-bold tracking-[0.22em] text-green-700">WHY IT WORKS</span>
          <span className="h-px w-8 bg-green-600" />
        </div>
        <h2 className="text-center text-[26px] md:text-[42px] font-extrabold tracking-[-0.01em] text-gray-900 mb-12 md:mb-16">
          営業の本質だけを<span className="text-green-600">抽出した設計</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {points.map((p) => (
            <div
              key={p.no}
              className="flex gap-5 md:gap-7 items-start border border-gray-200 bg-white p-7 md:p-9 shadow-sm"
            >
              <span className="shrink-0 grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-900 font-display font-extrabold text-[15px] md:text-[17px] text-green-300">
                {p.no}
              </span>
              <div>
                <h3 className="text-[18px] md:text-[22px] font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-[14px] md:text-[15px] leading-[1.95] text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 md:mt-14 text-center text-[18px] md:text-[24px] font-extrabold leading-[1.7] text-gray-900">
          「<span className="text-green-600">払ったのに成果ゼロ</span>」も、
          <br className="md:hidden" />
          「<span className="text-green-600">何してるかわからない</span>」も、
          <br />
          TELEMOには存在しません。
        </p>
      </div>
    </section>
  );
}
