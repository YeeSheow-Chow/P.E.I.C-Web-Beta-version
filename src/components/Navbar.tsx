import { Github } from 'lucide-react';

export default function Navbar({ onNavigate, currentView }: { onNavigate: (view: string) => void, currentView: string }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="flex justify-between items-center px-6 md:px-16 py-6 md:py-10 w-full max-w-screen-2xl mx-auto">
        <div 
          className="font-headline text-stone-900 text-lg tracking-wider cursor-pointer flex items-baseline gap-1"
          onClick={() => onNavigate('landing')}
        >
          P.E.I.C
          <span className="text-[10px] font-serif italic text-stone-400 lowercase tracking-normal">Beta</span>
        </div>
        <div className="hidden md:flex items-center gap-12 md:gap-24 font-headline text-base tracking-normal text-stone-600">
          <button 
            className={`hover:text-stone-900 transition-colors cursor-pointer ${currentView === 'systems' || currentView === 'room' ? 'font-bold underline underline-offset-8 decoration-2 decoration-stone-900 text-stone-900' : ''}`}
            onClick={() => onNavigate('systems')}
          >
            Systems
          </button>
          <button 
            className={`hover:text-stone-900 transition-colors cursor-pointer ${currentView === 'contact' ? 'font-bold underline underline-offset-8 decoration-2 decoration-stone-900 text-stone-900' : ''}`}
            onClick={() => onNavigate('contact')}
          >
            Contact
          </button>
        </div>
        <a 
          href="https://github.com/YeeSheow-Chow/P.E.I.C---SMART-INDOOR-SYSTEM.git"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-500 rounded-lg flex items-center gap-3"
        >
          <Github size={18} />
          <span className="hidden sm:inline">GO TO GITHUB</span>
        </a>
      </div>
    </nav>
  );
}
