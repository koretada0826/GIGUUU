import Link from 'next/link';

export default function TelemoHero() {
  return (
    <section className="relative z-10 bg-white px-5 md:px-12 lg:px-[90px] pt-12 md:pt-16 pb-4">
      <div className="max-w-[1180px] mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-7">
          <span className="h-px w-8 md:w-12 bg-green-600" />
          <span className="text-[12px] md:text-[14px] font-bold tracking-wide text-green-700 text-center">
            今年で37期目の業界TOPの営業ノウハウを集約
          </span>
          <span className="h-px w-8 md:w-12 bg-green-600" />
        </div>

        <h1 className="text-center font-extrabold tracking-[-0.01em] leading-[1.25]">
          <span className="block text-[30px] sm:text-[44px] md:text-[58px] text-gray-900">
            結果が出ない営業代行に
          </span>
          <span className="block text-[30px] sm:text-[44px] md:text-[58px] text-green-600">
            もう払わなくていい。
          </span>
        </h1>

        <p className="mt-7 text-center text-[18px] md:text-[26px] font-bold text-gray-900">
          月<span className="text-green-600">8,800コール</span>を仕組みで回す。
        </p>
        <p className="mt-3 text-center text-[14px] md:text-[17px] text-gray-500">
          営業代行で失敗した人ほど違いが分かります。
        </p>

        {/* Two entry cards */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* Newcomer */}
          <div className="border-2 border-gray-200 bg-white p-7 md:p-9 flex flex-col">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-5">
              <span className="text-[12px] font-bold tracking-[0.2em] text-green-700">NEWCOMER</span>
              <span className="font-display font-extrabold text-[20px] text-gray-300">01</span>
            </div>
            <p className="text-[13px] text-gray-500 mb-1">初めての方</p>
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-3">
              そもそも営業代行って何？
            </h2>
            <p className="text-[14px] leading-[1.9] text-gray-600 mb-6">
              人を雇うより安く・多く・全部見える営業代行です。
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-gray-700 mb-7">
              <span>・8,800コール保証</span>
              <span>・営業約2人分</span>
              <span>・スクリプト込み</span>
            </div>
            <Link
              href="#what-is"
              className="mt-auto inline-flex items-center justify-between bg-gray-900 text-white text-[14px] font-semibold px-6 py-3.5 hover:bg-gray-800 transition"
            >
              初めての方向けに見る
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Experienced */}
          <div className="bg-[#123a2a] text-white p-7 md:p-9 flex flex-col">
            <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-5">
              <span className="text-[12px] font-bold tracking-[0.2em] text-green-300">EXPERIENCED</span>
              <span className="font-display font-extrabold text-[20px] text-white/25">02</span>
            </div>
            <p className="text-[13px] text-gray-300 mb-1">利用経験がある方</p>
            <h2 className="text-[22px] md:text-[26px] font-bold mb-3">
              「成果ゼロ」で悩んでいませんか
            </h2>
            <p className="text-[14px] leading-[1.9] text-gray-300 mb-6">
              高額・不透明・長期縛り。全部逆に設計しました。
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-gray-200 mb-7">
              <span>・全ログ開示</span>
              <span>・月額35万円／初期費用0円</span>
              <span>・8,800コール</span>
            </div>
            <Link
              href="#vs-others"
              className="mt-auto inline-flex items-center justify-between bg-green-600 text-white text-[14px] font-semibold px-6 py-3.5 hover:bg-green-500 transition"
            >
              経験者向けに見る
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
