// Stylized four-leaf clover (GIGUUU motif). Decorative only.
export default function Clover({
  className = '',
  style,
  colors = ['#27a844', '#34c95a', '#1f8b3b', '#3fbf68'],
}: {
  className?: string;
  style?: React.CSSProperties;
  colors?: [string, string, string, string] | string[];
}) {
  // One heart-leaf with its tip at the center (50,50), lobes pointing up.
  const leaf =
    'M50 50 C42 44 30 45 26 34 C22 24 34 16 43 23 C46 17 54 17 58 23 C66 16 78 24 74 34 C70 45 58 44 50 50 Z';
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" aria-hidden="true">
      {/* stem */}
      <path
        d="M50 52 C51 64 49 74 43 84"
        stroke="#1f8b3b"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* four leaves, rotated around the center */}
      <g transform="rotate(45 50 50)" fill={colors[0]}>
        <path d={leaf} />
      </g>
      <g transform="rotate(135 50 50)" fill={colors[1]}>
        <path d={leaf} />
      </g>
      <g transform="rotate(225 50 50)" fill={colors[2]}>
        <path d={leaf} />
      </g>
      <g transform="rotate(315 50 50)" fill={colors[3]}>
        <path d={leaf} />
      </g>
      {/* center highlight */}
      <circle cx="50" cy="50" r="4" fill="#ffffff" opacity="0.85" />
    </svg>
  );
}
