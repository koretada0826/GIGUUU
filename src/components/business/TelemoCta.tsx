import Link from 'next/link';

export default function TelemoCta() {
  return (
    <section className="relative z-10 w-full overflow-hidden">
      <div className="relative bg-[#0c2a1e]">
        {/* Subtle gradient glow */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(60% 80% at 50% 0%, rgba(22,163,74,0.40) 0%, rgba(12,42,30,0) 70%)',
          }}
        />
        <div className="relative px-5 md:px-12 lg:px-[90px] py-20 md:py-28 text-center">
          <p className="text-[13px] md:text-[14px] font-bold tracking-[0.2em] text-green-300 mb-6">TELEMO</p>
          <h2 className="text-white font-extrabold tracking-[-0.01em] leading-[1.3] text-[28px] sm:text-[40px] md:text-[52px]">
            営業のプロが作った
            <br />
            日本一正直な営業代行
          </h2>
          <p className="mt-7 text-[16px] md:text-[20px] font-bold text-white">
            かけた分だけ、全部見える。それがTELEMOです。
          </p>
          <p className="mt-3 text-[13px] md:text-[15px] text-green-200">
            現状の営業コストと比較した&quot;削減インパクト&quot;をその場で算出します
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-[15px] md:text-[16px] font-bold px-10 py-4 rounded-full shadow-lg transition"
            >
              まずは10〜15分だけ話しましょう
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 text-[15px] md:text-[16px] font-bold px-10 py-4 rounded-full transition"
            >
              資料請求
            </Link>
          </div>

          <p className="mt-7 text-[12px] md:text-[13px] text-green-200/80">
            所要時間：10〜15分　／　費用：無料　／　売り込み：なし
          </p>
        </div>
      </div>
    </section>
  );
}
