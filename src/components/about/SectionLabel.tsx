export default function SectionLabel({
  index,
  en,
  ja,
  light = false,
  dotClass = 'bg-brand-green',
  numberClass = 'text-brand-green',
}: {
  index: string;
  en: string;
  ja: string;
  light?: boolean;
  dotClass?: string;
  numberClass?: string;
}) {
  return (
    <div className="flex items-center gap-3.5">
      <span className={`font-display font-extrabold text-[18px] md:text-[20px] leading-none ${numberClass}`}>
        {index}
      </span>
      <span className={`h-[7px] w-[7px] rounded-full ${dotClass}`} />
      <span
        className={`text-[12px] md:text-[13px] font-bold tracking-[0.26em] ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {en}
      </span>
      <span className={`text-[11px] md:text-[12px] ${light ? 'text-gray-300' : 'text-gray-400'}`}>
        {ja}
      </span>
    </div>
  );
}
