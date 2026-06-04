import Clover from '@/components/Clover';

const words = [
  'CONNECT THE DOTS',
  '人の限界を、技術で超えていく',
  'AI × SALES',
  '営業会社発のAI企業',
  '挑戦できる社会をつくる',
  'GIGUUU',
];

function Track() {
  return (
    <div className="marquee-track items-center">
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="mx-6 md:mx-10 font-display font-extrabold text-[22px] md:text-[34px] tracking-tight">
            {w}
          </span>
          <Clover className="w-6 h-6 md:w-8 md:h-8 anim-spin-slow" />
        </span>
      ))}
    </div>
  );
}

export default function MarqueeBand() {
  return (
    <section
      aria-hidden
      className="relative z-10 overflow-hidden bg-[#11261d] text-white py-4 md:py-6 border-y border-white/10"
    >
      <div className="flex">
        <Track />
        <Track />
      </div>
    </section>
  );
}
