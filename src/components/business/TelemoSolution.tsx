const pills = ['トップ営業の声で', '1H/60コール', 'AIが自動で会話'];

export default function TelemoSolution() {
  return (
    <section className="relative z-10 px-5 md:px-12 lg:px-[90px] py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="relative flex items-center justify-center mb-12 md:mb-16">
          <h2 className="text-[18px] md:text-[24px] lg:text-[28px] font-bold text-gray-900 inline-block pb-2 md:pb-3 border-b-[3px] border-fuchsia-500 text-center">
            TELEMO（テレモ）なら解決できます
          </h2>
          <img
            src="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-313x273_webp_741a8066-9f8d-433d-aa57-53b41224fc45.webp"
            alt="ポイントを示すキャラクター"
            className="hidden lg:block absolute right-0 -top-4 w-[150px] h-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center mt-12 md:mt-20">
          <div className="md:col-span-7">
            <img
              src="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-749x451_v-fs_webp_80ddc2e3-3884-4de1-a3ea-5d9af03e9c47_small.webp"
              alt="TELEMO ダッシュボード"
              className="w-full h-auto max-w-[520px] mx-auto"
            />
          </div>
          <div className="md:col-span-5 flex flex-col items-center gap-4 md:gap-6">
            {pills.map((label) => (
              <div
                key={label}
                className="text-white text-[14px] md:text-[16px] font-semibold rounded-full px-8 md:px-10 py-3 md:py-4 w-[220px] md:w-[260px] text-center shadow-md"
                style={{
                  background:
                    'linear-gradient(135deg, #34d399 0%, #22d3ee 100%)',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
