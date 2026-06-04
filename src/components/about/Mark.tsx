export default function Mark({
  children,
  color = 'bg-brand-yellow/55',
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className={`absolute left-0 bottom-[0.08em] h-[0.42em] w-full ${color} z-0`}
      />
    </span>
  );
}
