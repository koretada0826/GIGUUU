const stats = [
  { value: '97', unit: '%', label: 'リピート率' },
  { value: '15', unit: '%', label: '最高アポイント率' },
  { value: '88', unit: '%', label: '決裁者商談率' },
];

export default function TelemoResults() {
  return (
    <section className="relative z-10 bg-white px-5 md:px-12 lg:px-[90px] pt-14 md:pt-20 pb-8">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center bg-gradient-to-b from-[#f0f8f2] to-white border border-green-100 py-10 md:py-12"
            >
              <div className="flex items-end justify-center">
                <span className="font-display font-extrabold text-[64px] md:text-[88px] leading-none text-gray-900">
                  {s.value}
                </span>
                <span className="font-display font-extrabold text-[28px] md:text-[36px] text-green-600 mb-2 md:mb-3">
                  {s.unit}
                </span>
              </div>
              <span className="mt-4 text-[14px] md:text-[16px] font-bold text-gray-700">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[12px] text-gray-400">
          ※2023年度実績（自社調べに基づく）
        </p>
      </div>
    </section>
  );
}
