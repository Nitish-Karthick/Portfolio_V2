export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-auto rounded-full bg-surface-container-highest/60 backdrop-blur-2xl border border-white/10 shadow-2xl flex items-center gap-8 lg:gap-16 px-4 py-3 sm:px-6 z-50">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full border border-white/10 bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg">
          N
        </div>
        <span className="font-title-md text-[18px] font-bold text-on-surface whitespace-nowrap">
          Nitish Karthick
        </span>
      </div>
      <div className="hidden md:flex items-center gap-2 font-body-md text-[16px] whitespace-nowrap">
        <a className="text-on-surface-variant hover:text-primary hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300" href="#profile">
          Profile
        </a>
        <a className="text-on-surface-variant hover:text-primary hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300" href="#project">
          Project
        </a>
        <a className="text-on-surface-variant hover:text-primary hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300" href="#skills">
          Skills
        </a>
        <a className="text-on-surface-variant hover:text-primary hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-300" href="#about">
          About me
        </a>
      </div>
      <a href="https://www.linkedin.com/in/nitish-karthick-v-446036328/" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-3 rounded-full text-[16px] font-bold hover:scale-105 transition-transform duration-200 flex items-center gap-2 whitespace-nowrap">
        <span>Let's talk</span>
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
    </nav>
  );
}
