export function SideGradientLeft() {
  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 h-full w-3 md:w-[36px] lg:w-[50px] z-0 pointer-events-none"
      style={{
        background: 'linear-gradient(180deg, #34d399 0%, #22d3ee 100%)',
      }}
    />
  );
}

export function SideGradientRight() {
  return (
    <div
      aria-hidden
      className="fixed right-0 top-0 h-full w-3 md:w-[36px] lg:w-[50px] z-0 pointer-events-none"
      style={{
        background: 'linear-gradient(180deg, #fde047 0%, #34d399 100%)',
      }}
    />
  );
}
