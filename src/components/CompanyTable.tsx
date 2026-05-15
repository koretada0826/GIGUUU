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
    <section className="relative z-10 px-[90px] pb-32">
      <div className="max-w-[900px] mx-auto">
        <div
          className="rounded-2xl p-12 shadow-sm"
          style={{
            background:
              'linear-gradient(135deg, #e9c2ff 0%, #ffc7e0 50%, #ffd9c2 100%)',
          }}
        >
          <dl className="divide-y divide-fuchsia-300/60">
            {rows.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-12 items-start gap-6 py-5"
              >
                <dt className="col-span-3 text-[15px] font-semibold text-gray-800">
                  {r.label}
                </dt>
                <dd className="col-span-9 text-[15px] leading-[1.8] text-gray-800">
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
