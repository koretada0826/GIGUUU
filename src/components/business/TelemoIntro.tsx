export default function TelemoIntro() {
  return (
    <section className="relative z-10 px-[90px] py-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-center gap-6 mb-16">
          <span className="h-px bg-gray-400 w-24" aria-hidden />
          <h2 className="text-[26px] font-bold text-gray-900 whitespace-nowrap">
            AIが、トップ営業を&ldquo;そのまま量産&rdquo;
          </h2>
          <span className="h-px bg-gray-400 w-24" aria-hidden />
        </div>
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-5">
            <img
              src="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-1536x1024_v-fms_webp_5924076e-b4ba-4b5d-9e64-9223cf832c25_small.webp"
              alt="AI コールのイラスト"
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-7 text-[15px] leading-[2] text-gray-800">
            <p className="mb-6">
              『TELEMO（テレモ）』は、営業会社が開発した
              <br />
              営業会社のためのAI自動コールシステム。
              <br />
              トップ営業マンの話し方・問・抑揚を、
              <br />
              教育や経験に依存することなく自動で実行します。
            </p>
            <p>
              さらに、通話の分岐ポイントの数値化、
              <br />
              ログの抽出やトークの書き起こしにより、
              <br />
              成果につながるプロセスの可視化・改善も。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
