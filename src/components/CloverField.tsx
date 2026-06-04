import Clover from './Clover';

// Scattered, animated clovers + sparkle dots that fill a relative parent.
// Drop inside any `relative overflow-hidden` container. Decorative only.
const items = [
  { c: true, cls: 'left-[4%] top-[12%] w-16 h-16 anim-drift opacity-20' },
  { c: true, cls: 'right-[6%] top-[20%] w-24 h-24 anim-spin-slower opacity-15' },
  { c: true, cls: 'left-[12%] bottom-[10%] w-12 h-12 anim-drift-slow opacity-20' },
  { c: true, cls: 'right-[14%] bottom-[16%] w-20 h-20 anim-drift opacity-15' },
  { c: false, color: 'bg-brand-yellow', cls: 'left-[24%] top-[28%] w-2.5 h-2.5 anim-pulse-dot' },
  { c: false, color: 'bg-brand-pink', cls: 'right-[26%] top-[14%] w-2 h-2 anim-pulse-dot' },
  { c: false, color: 'bg-brand-blue', cls: 'left-[40%] bottom-[18%] w-2 h-2 anim-pulse-dot' },
  { c: false, color: 'bg-brand-green', cls: 'right-[38%] bottom-[24%] w-2.5 h-2.5 anim-pulse-dot' },
];

export default function CloverField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((it, i) =>
        it.c ? (
          <Clover key={i} className={`absolute ${it.cls}`} />
        ) : (
          <span key={i} className={`absolute rounded-full ${it.color} ${it.cls}`} style={{ animationDelay: `${i * 0.25}s` }} />
        )
      )}
    </div>
  );
}
