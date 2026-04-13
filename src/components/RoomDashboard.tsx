import { Users, Fan, Lightbulb, Bolt, Snowflake } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function RoomDashboard({ roomNumber }: { roomNumber: number }) {
  const [energy, setEnergy] = useState(1.8);
  const [occupancy, setOccupancy] = useState(5);
  const [acLevel, setAcLevel] = useState(3);
  const [lighting, setLighting] = useState(70);

  useEffect(() => {
    const interval = setInterval(() => {
      // Energy fluctuation
      setEnergy(prev => {
        const change = (Math.random() - 0.5) * 0.05;
        return Math.max(1.7, Math.min(2.1, prev + change));
      });

      // Occupancy fluctuation (less frequent)
      if (Math.random() > 0.7) {
        setOccupancy(prev => {
          const change = Math.random() > 0.5 ? 1 : -1;
          return Math.max(2, Math.min(8, prev + change));
        });
      }

      // Lighting fluctuation
      setLighting(prev => {
        const change = (Math.random() - 0.5) * 2;
        return Math.max(60, Math.min(80, prev + change));
      });

      // AC fluctuation (rare)
      if (Math.random() > 0.9) {
        setAcLevel(prev => {
          const change = Math.random() > 0.5 ? 1 : -1;
          return Math.max(2, Math.min(4, prev + change));
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const energyPercent = ((energy - 0) / 4) * 100;
  const occupancyPercent = (occupancy / 10) * 100;
  
  const getOccupancyText = (val: number) => {
    if (val < 4) return "Low";
    if (val < 7) return "Medium";
    return "High";
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2560" 
          alt="Bright Modern Office"
          className="w-full h-full object-cover scale-105 brightness-[0.85] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[8px]"></div>
      </div>

      <div className="relative z-10 pt-40 pb-16 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-stone-900 tracking-tighter mb-3">Room {roomNumber}</h1>
            <div className="flex items-center justify-center space-x-3 text-stone-500 text-[10px] font-label uppercase tracking-[0.4em]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold">Live Intelligence Active</span>
            </div>
          </motion.header>

          {/* Bento Grid - Optimized for 4 cards on one screen */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
          >
            {/* Card 1: Human Density */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/60 flex flex-col justify-between min-h-[260px] transition-all duration-500 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-label text-[9px] uppercase tracking-[0.3em] text-stone-400 font-bold">Occupancy</span>
                  <h2 className="font-headline text-xl mt-1 text-stone-800 tracking-tight">Human Density</h2>
                </div>
                <Users className="text-stone-300 group-hover:text-stone-500 transition-colors" size={20} strokeWidth={1.5} />
              </div>
              <div className="flex items-baseline space-x-3">
                <motion.span 
                  key={occupancy}
                  className="text-5xl font-light text-stone-900 tracking-tighter"
                >
                  {getOccupancyText(occupancy)}
                </motion.span>
                <p className="text-xs text-stone-400 font-body">Approx. {occupancy} Persons</p>
              </div>
              <div className="w-full bg-stone-100 h-1 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: `${occupancyPercent}%` }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  className="bg-stone-800 h-full"
                ></motion.div>
              </div>
            </motion.div>

            {/* Card 2: Air Conditioning */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/60 flex flex-col justify-between min-h-[260px] transition-all duration-500 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-label text-[9px] uppercase tracking-[0.3em] text-stone-400 font-bold">Climate Control</span>
                  <h2 className="font-headline text-xl mt-1 text-stone-800 tracking-tight">Air Conditioning</h2>
                </div>
                <Fan 
                  className="text-stone-300 group-hover:text-stone-500 transition-colors"
                  style={{ animation: `spin ${4 / acLevel}s linear infinite` }} 
                  size={20} 
                  strokeWidth={1.5} 
                />
              </div>
              <div className="flex items-baseline space-x-3">
                <motion.span 
                  key={acLevel}
                  className="text-5xl font-light text-stone-900 tracking-tighter"
                >
                  Level {acLevel}
                </motion.span>
                <p className="text-xs text-stone-400 font-body">21°C Set Point</p>
              </div>
              <div className="flex justify-between items-center text-[9px] font-label text-stone-400 uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-emerald-500"></div> Mode: Auto</span>
                <Snowflake size={12} className="animate-pulse" />
              </div>
            </motion.div>

            {/* Card 3: Lighting Status */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/60 flex flex-col justify-between min-h-[260px] transition-all duration-500 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-label text-[9px] uppercase tracking-[0.3em] text-stone-400 font-bold">Ambiance</span>
                  <h2 className="font-headline text-xl mt-1 text-stone-800 tracking-tight">Lighting Status</h2>
                </div>
                <Lightbulb className="text-stone-300 group-hover:text-stone-500 transition-colors" size={20} strokeWidth={1.5} />
              </div>
              <div className="flex items-baseline space-x-3">
                <motion.span 
                  key={lighting}
                  className="text-5xl font-light text-stone-900 tracking-tighter"
                >
                  {lighting.toFixed(0)}%
                </motion.span>
                <span className="text-sm text-stone-400 italic">Dimmed</span>
              </div>
              <div className="w-full bg-stone-100 h-1 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: `${lighting}%` }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  className="bg-stone-800 h-full"
                ></motion.div>
              </div>
            </motion.div>

            {/* Card 4: Energy Usage */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/60 flex flex-col justify-between min-h-[260px] transition-all duration-500 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-label text-[9px] uppercase tracking-[0.3em] text-stone-400 font-bold">Sustainability</span>
                  <h2 className="font-headline text-xl mt-1 text-stone-800 tracking-tight">Energy Usage</h2>
                </div>
                <Bolt className="text-stone-300 group-hover:text-stone-500 transition-colors" size={20} strokeWidth={1.5} />
              </div>
              <div className="flex items-baseline space-x-3">
                <motion.span 
                  key={energy}
                  className="text-5xl font-light text-stone-900 tracking-tighter"
                >
                  {energy.toFixed(1)} kW
                </motion.span>
                <p className="text-xs text-stone-400 font-body">Real-time</p>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-[8px] font-label text-stone-400 uppercase tracking-[0.2em] font-bold">
                  <span>Optimal</span>
                  <span>Peak</span>
                </div>
                <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
                  <motion.div 
                    animate={{ width: `${energyPercent}%` }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
