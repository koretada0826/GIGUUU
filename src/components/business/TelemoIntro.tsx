export default function TelemoIntro() {
  return (
    <section className="relative z-10 px-5 md:px-12 lg:px-[90px] py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-center gap-3 md:gap-6 mb-10 md:mb-16">
          <span className="h-px bg-gray-400 flex-1 max-w-[60px] md:max-w-[96px]" aria-hidden />
          <h2 className="text-[18px] md:text-[26px] font-bold text-gray-900 text-center whitespace-nowrap">
            AIが、トップ営業を&ldquo;そのまま量産&rdquo;
          </h2>
          <span className="h-px bg-gray-400 flex-1 max-w-[60px] md:max-w-[96px]" aria-hidden />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5">
            <img
              src="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-1536x1024_v-fms_webp_5924076e-b4ba-4b5d-9e64-9223cf832c25_small.webp"
              alt="AI コールのイラスト"
              className="w-full h-auto max-w-[420px] mx-auto"
            />
          </div>
          <div className="md:col-span-7 text-[14px] md:text-[15px] leading-[2] text-gray-800">
            <p className="mb-5 md:mb-6">
              『TELEMO（テレモ）』は、営業会社が開発した
              <br className="hidden md:inline" />
              営業会社のためのAI自動コールシステム。
              <br className="hidden md:inline" />
              トップ営業マンの話し方・問・抑揚を、
              <br className="hidden md:inline" />
              教育や経験に依存することなく自動で実行します。
            </p>
            <p>
              さらに、通話の分岐ポイントの数値化、
              <br className="hidden md:inline" />
              ログの抽出やトークの書き起こしにより、
              <br className="hidden md:inline" />
              成果につながるプロセスの可視化・改善も。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
