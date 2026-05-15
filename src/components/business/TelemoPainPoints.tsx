const cards = [
  '新人が育つ前に\n離職してしまう',
  '教育に時間と\nコストがかかる',
  '採用がうまくいかず\n架電数が足りない',
  '営業の質が\n人によってバラバラ',
];

export default function TelemoPainPoints() {
  return (
    <section className="relative z-10 mx-[90px] my-12">
      <div className="bg-[#e6f0fb] py-16 px-8 relative overflow-hidden">
        <h2 className="text-center text-[26px] font-bold text-gray-900 mb-14">
          こんなこと、ありませんか？
        </h2>
        <div className="max-w-[1100px] mx-auto flex items-center gap-6 justify-center pl-[120px]">
          <img
            src="https://storage.googleapis.com/studio-design-asset-files/projects/bXqzDv0pWD/s-1100x914_v-fs_webp_4df5e107-e692-43f8-8846-2d7306cb8b5f_small.webp"
            alt="悩む営業マン"
            className="w-[150px] h-auto absolute left-[180px] bottom-8"
          />
          {cards.map((text, i) => (
            <div
              key={i}
              className="bg-[#7b8aa8] text-white rounded-md w-[170px] h-[88px] flex items-center justify-center text-center text-[14px] leading-[1.5] whitespace-pre-line shadow-sm"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
