import { motion } from 'motion/react';

export default function SystemsPage({ onSelectRoom }: { onSelectRoom: (room: number) => void }) {
  const rooms = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-white via-stone-300 to-stone-800">
      {/* Hero Text Section */}
      <section className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-16 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 tracking-tight leading-[1.1]">
            Intelligent <span className="italic font-normal text-stone-600">Precision.</span><br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-stone-500 tracking-normal mt-6 block">
              Let's Personalize Your Smart Public Space.
            </span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 bg-stone-900 mx-auto mt-12 rounded-full"
          />
        </motion.div>
      </section>

      {/* 3D Architectural Map */}
      <section className="w-full flex justify-center items-center py-0 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-screen-2xl mx-auto px-6 md:px-12 group"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/20">
            <motion.img 
              alt="3D Architectural scan" 
              className="w-full h-auto block object-cover contrast-[1.05] brightness-[1.02]" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uggFJllDNz5U4vY5RzURY1dOftG7aea-x982Fb5-5Xz5KMAx6f5H2CX-Yv-8aS9diJt-nbRgxw6NrsZkYGwqjpOXJbkRPtEHFse_tQUHFU_cwZ-Mc5WML9pQ6Arazal2R5fHptAOz-RPKZdhAXCGuO2NjU3-BOCrqjxL1ezYzvnfKxeGlckzjUivAkwDHHQWCaCq3tbRmA_W11N0q105BxIJTHhrLXyzqrvW2FvB_tcfgZnwrYZJIP71MObcMh0yPNCCXYZkBlrVA=s4096"
              referrerPolicy="no-referrer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </section>

      {/* Room Grid */}
      <section className="px-6 md:px-12 max-w-screen-lg mx-auto pb-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
            hidden: {}
          }}
          className="grid grid-cols-2 md:grid-cols-3 gap-10"
        >
          {rooms.map((room) => (
            <motion.button
              key={room}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderColor: 'rgba(255, 255, 255, 0.8)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectRoom(room)}
              className="bg-white/10 backdrop-blur-xl aspect-[16/10] flex flex-col items-center justify-center border border-white/20 transition-all duration-500 group rounded-2xl shadow-lg"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3 group-hover:text-white/80 transition-colors">Zone Control</span>
              <span className="text-lg font-headline tracking-[0.2em] uppercase text-white drop-shadow-md group-hover:scale-110 transition-transform">Room {room}</span>
            </motion.button>
          ))}
          <div className="bg-white/5 backdrop-blur-md aspect-[16/10] flex items-center justify-center border border-white/10 rounded-2xl">
            <span className="text-2xl font-light text-white/20">...</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md aspect-[16/10] flex items-center justify-center border border-white/10 rounded-2xl">
            <span className="text-2xl font-light text-white/20">...</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
