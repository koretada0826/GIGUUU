const rows: Array<{ label: string; value: React.ReactNode }> = [
  { label: '会社名', value: 'GIGUUU株式会社' },
  { label: '設立', value: '2021年12月' },
  { label: '代表者', value: '青木　瑠美' },
  { label: '所在地', value: '東京都豊島区東池袋1-34-5' },
  { label: '連絡先', value: '03-4366-1687' },
  {
    label: '事業内容',
    value: (
      <>
        プラットフォーム事業
        <br />
        代理店事業
      </>
    ),
  },
];

export default function CompanyTable() {
  return (
    <section className="relative z-10 px-5 md:px-12 lg:px-[90px] pb-20 md:pb-32">
      <div className="max-w-[900px] mx-auto">
        <div
          className="rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm"
          style={{
            background:
              'linear-gradient(135deg, #bff0d2 0%, #d6f5c9 50%, #eef8c8 100%)',
          }}
        >
          <dl className="divide-y divide-green-400/50">
            {rows.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-12 items-start gap-3 md:gap-6 py-4 md:py-5"
              >
                <dt className="col-span-4 md:col-span-3 text-[13px] md:text-[15px] font-semibold text-gray-800">
                  {r.label}
                </dt>
                <dd className="col-span-8 md:col-span-9 text-[13px] md:text-[15px] leading-[1.8] text-gray-800">
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
