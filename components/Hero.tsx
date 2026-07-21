export default function Hero() {
  return (
    <header id="profile" className="hero-bg w-full rounded-b-[44px] pt-[240px] pb-32 px-margin-desktop mb-32 flex flex-col items-center justify-center relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1440px] w-full text-center z-10 relative">
        <div className="inline-flex items-center gap-2 bg-surface-container-highest/50 rounded-full px-4 py-2 mb-10 border border-white/10 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-green-400 pulse-dot"></div>
          <span className="font-label-sm text-label-sm text-on-surface">
            Open to opportunities
          </span>
        </div>
        <h1 className="font-display-2xl text-display-2xl font-bold text-on-surface tracking-tighter leading-none mx-auto max-w-5xl">
          Software<br />Engineer.
        </h1>
      </div>
    </header>
  );
}
