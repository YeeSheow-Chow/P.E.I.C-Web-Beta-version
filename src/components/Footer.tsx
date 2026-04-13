interface FooterProps {
  variant?: 'dark' | 'light';
  onOpenInfo: (type: 'privacy' | 'terms' | 'support' | 'contact') => void;
}

export default function Footer({ variant = 'dark', onOpenInfo }: FooterProps) {
  const isDark = variant === 'dark';
  
  return (
    <footer className={`relative z-10 w-full pt-32 pb-16 px-6 md:px-12 transition-colors duration-500 ${isDark ? 'bg-stone-800' : 'bg-white/80 backdrop-blur-md border-t border-stone-100'}`}>
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="space-y-12">
          <div className={`font-headline tracking-tight text-xl flex items-baseline gap-1 ${isDark ? 'text-white' : 'text-stone-900'}`}>
            P.E.I.C
            <span className={`text-[11px] font-serif italic lowercase tracking-normal ${isDark ? 'text-white/30' : 'text-stone-400'}`}>Beta</span>
          </div>
          <div className="space-y-1">
            <p className={`font-body text-[10px] uppercase tracking-[0.2em] ${isDark ? 'text-white/40' : 'text-stone-400'}`}>© 2026 PEIC INTELLIGENT SYSTEMS. ALL RIGHTS RESERVED.</p>
            <p className={`font-body text-[11px] ${isDark ? 'text-white/60' : 'text-stone-600'}`}>BY Vivian zhou, hongkong region, china</p>
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex flex-col items-end md:pr-24 md:pt-12 space-y-4">
          <div className="flex gap-4 md:gap-8">
            <button 
              onClick={() => onOpenInfo('privacy')}
              className={`font-body text-[11px] uppercase tracking-[0.2em] transition-colors border-b pb-1 ${isDark ? 'text-white/40 hover:text-white border-white/10' : 'text-stone-400 hover:text-stone-900 border-stone-200'}`}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenInfo('terms')}
              className={`font-body text-[11px] uppercase tracking-[0.2em] transition-colors border-b pb-1 ${isDark ? 'text-white/40 hover:text-white border-white/10' : 'text-stone-400 hover:text-stone-900 border-stone-200'}`}
            >
              Terms of Service
            </button>
            <button 
              onClick={() => onOpenInfo('support')}
              className={`font-body text-[11px] uppercase tracking-[0.2em] transition-colors border-b pb-1 ${isDark ? 'text-white/40 hover:text-white border-white/10' : 'text-stone-400 hover:text-stone-900 border-stone-200'}`}
            >
              Support
            </button>
          </div>
          <button 
            onClick={() => onOpenInfo('contact')}
            className={`font-body text-[11px] uppercase tracking-[0.2em] transition-colors border-b pb-1 ${isDark ? 'text-white/40 hover:text-white border-white/10' : 'text-stone-400 hover:text-stone-900 border-stone-200'}`}
          >
            CONTACT US
          </button>
        </div>
      </div>
    </footer>
  );
}
