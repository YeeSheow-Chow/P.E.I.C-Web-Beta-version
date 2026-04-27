import { Shield, Leaf, Cpu, Radio, EyeOff, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function LandingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after some time if needed, or keep it as success
  };

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-8"
            >
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xs uppercase tracking-[0.3em] text-secondary mb-12 block font-label font-bold"
              >
                Intelligent Sensing INDOOR CONTROL SYSTEM
              </motion.span>
              <h1 className="leading-[0.95] tracking-tighter mb-20 text-6xl md:text-8xl lg:text-9xl font-headline font-extralight" style={{ fontWeight: 200 }}>
                The unseen intelligence of space.
              </h1>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="lg:col-span-4 lg:pt-64"
            >
              <p className="text-2xl text-secondary font-body font-light leading-relaxed max-w-sm italic opacity-80" style={{ fontWeight: 300 }}>
                PEIC is a privacy-first indoor control system balancing human comfort with radical energy efficiency through intelligent sensor fusion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Hero Image */}
      <section className="px-6 md:px-12 mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          className="max-w-screen-2xl mx-auto"
        >
          <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-2xl border border-stone-100">
            <img 
              alt="Intelligent library environment" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]" 
              src="/images/chiwha.jpg"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      {/* Feature Highlight Section */}
      <section className="relative w-full overflow-hidden flex items-end py-24 aspect-[5/3]">
        <div className="absolute inset-0 z-0">
          <img 
            alt="High-resolution modern office environment" 
            className="w-full h-full object-cover contrast-[1.02] brightness-[0.75]" 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2560"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-20 w-full max-w-screen-xl mx-auto px-6 md:px-12 h-2/3 flex flex-col justify-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            {/* Feature 1 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              className="group border border-white/20 p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-500 backdrop-blur-md"
            >
              <div className="w-20 h-20 rounded-full border border-white/30 bg-white/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                <Shield className="text-white" size={32} strokeWidth={1} />
              </div>
              <h3 className="font-headline text-2xl tracking-tight text-white mb-3">Privacy Protection</h3>
              <p className="text-sm font-body leading-relaxed text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[240px]">
                mmWave-first detection reduces unnecessary camera activation and better protects user privacy.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              className="group border border-white/20 p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-500 backdrop-blur-md"
            >
              <div className="w-20 h-20 rounded-full border border-white/30 bg-white/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                <Leaf className="text-white" size={32} strokeWidth={1} />
              </div>
              <h3 className="font-headline text-2xl tracking-tight text-white mb-3">Energy Efficient</h3>
              <p className="text-sm font-body leading-relaxed text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[240px]">
                Occupancy-aware control reduces wasted lighting and air-conditioning energy consumption.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              className="group border border-white/20 p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-500 backdrop-blur-md"
            >
              <div className="w-20 h-20 rounded-full border border-white/30 bg-white/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                <Cpu className="text-white" size={32} strokeWidth={1} />
              </div>
              <h3 className="font-headline text-2xl tracking-tight text-white mb-3">Smart & Advanced</h3>
              <p className="text-sm font-body leading-relaxed text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[240px]">
                Sensor fusion enables more accurate, adaptive, and intelligent indoor environmental control.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="px-6 md:px-12 py-40 bg-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] grayscale" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida/ADBb0ugXud5u22b4TrrTYRw0ydTDNARym99dFSfKvD_crRIH693AtJDy4XipTHNu5q-OZb1LG0m2Q3hMKvGA6k_cqvYO_HL2nNEjyypoUrCi3B37ohK7BlmV1P-w5wzpx_7A96MrhAUrH2Z07bIS30hBdtzEIms64b6Uj56cNLWYPe3v76ahCLLnIVrlK1GshJoRZHfV-tua2ajc4r77l4C9Z7sAklAZmnAplCnIPmCVHSLZvwOSaYDBira7s4aZ_AsZEUnMfE12JH8rww")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:col-span-5 md:sticky md:top-40 h-fit"
            >
              <h2 className="text-5xl font-headline font-bold italic tracking-tight mb-8">Dual-Layer Awareness</h2>
              <p className="text-secondary font-body text-xl leading-loose mb-12 italic opacity-80">Privacy is not a feature; it is our foundation.</p>
              <div className="font-body text-stone-700 leading-relaxed text-lg">Combining millimeter-wave Radar with edge-processed YOLO vision, AURA understands presence without ever identifying the person.</div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
                  hidden: {}
                }}
                className="space-y-8 mt-16"
              >
                {[
                  { label: "Radar Precision", delay: 0 },
                  { label: "Visual Semantics", delay: 0.2 }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                    }}
                    className="flex items-center gap-6 group cursor-default"
                  >
                    <div className="w-12 h-px bg-stone-400 group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>
                    <span className="font-label text-xs uppercase tracking-[0.3em] text-stone-500 group-hover:text-primary transition-colors">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                className="bg-white p-12 aspect-[4/5] flex flex-col justify-between rounded-2xl shadow-sm border border-stone-100 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <Radio className="text-primary" size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-headline mb-6">Radar Analytics</h3>
                  <p className="text-base font-body text-secondary leading-relaxed opacity-80">Continuous micro-motion detection tracks heartbeat and respiration for 100% occupancy accuracy, even in static states.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                className="md:mt-12 bg-white p-12 aspect-[4/5] flex flex-col justify-between rounded-2xl shadow-sm border border-stone-100 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <EyeOff className="text-primary" size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-headline mb-6">YOLO on Camera</h3>
                  <p className="text-base font-body text-secondary leading-relaxed opacity-80">Anonymized object detection identifies activities and density without storing or transmitting personal imagery.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="px-6 md:px-12 py-40 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 group relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-2xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
            <img 
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-[1.02]" 
              alt="Abstract architectural shot" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUc9NeVSzr_PTMUi_v01j8ZSKFqjCobwM7mvTlBZDNnqrNLoZz5enzgwnaleowklgXJI1ww6OjZMsGyKjix2a3My7UG8WnjiVaFdVe5oRvw4SltRpLzpDaeKbMYU4tfKx6uVBD_-I0t0yzbDsty74SJblB8xMHMrLnIFAneML2CTxGi-H3_PjCP32xume8AxPKuyVojTZAH7vSuTlJPSNuUIWpyCelC6rXoj5ivRYyNIRQ_3G-SAU1FAtbA-HGQfBT8spZoi9pRSk"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 space-y-12"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-secondary font-label font-bold">eco-friendly for everyone</span>
            <h2 className="text-6xl font-headline font-light leading-[1.1] tracking-tighter text-primary">Sustainability Starts with Your Choice.</h2>
            <p className="text-xl font-body text-secondary leading-loose max-w-md opacity-80 italic">The world faces growing energy waste and severe environmental pollution. Excessive energy consumption leads to rising carbon emissions and ecological damage, hindering long-term sustainable development. PEIC enables everyone to better manage their energy use, making sustainable practices easier to achieve step by step.</p>
            <motion.a 
              href="https://www.climatecentral.org/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group text-primary font-label text-sm uppercase tracking-widest font-bold cursor-pointer"
            >
              <span>Learn more about our mission</span>
              <div className="w-12 h-px bg-primary group-hover:w-20 transition-all duration-500"></div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="w-full md:w-2/3 overflow-hidden rounded-r-xl md:rounded-r-none">
            <img 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Co-working space" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uiDzKq2Vnd0kTkBpaO6ZUGp2rN4_05txtll79hFLL7pZFSAat-Ku8VGwMdHq6MFvruBezpP4VNw584QO5_mXB2mwso8Ulfs5sMoIuRq60rH-k8XReSSAZj4_awgc3hXCcCFicxvjHxxRYa7-KvMHtDOUk-PpcuJIIq5ex81jC_wPUNKNYxsbreUaHBCJPNGeW-_VmJTmeS08BG06OVEH5vsk849Sbt2ByKsBvKR4FRZadFCl3uJMsD182nhtTtKo0JkYONVdDNqOg=s2048"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.01, backgroundColor: "#1c1917" }}
            className="w-full md:w-1/3 bg-stone-900 p-16 md:p-24 text-white flex flex-col justify-center rounded-l-xl md:rounded-l-none transition-colors duration-500 cursor-default"
          >
            <h2 className="text-3xl lg:text-4xl font-headline font-light italic leading-relaxed opacity-90">
              "PEIC has transformed how we perceive our workspace capacity."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 py-40 bg-surface overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-screen-md mx-auto text-center"
        >
          <h2 className="text-6xl font-headline font-light mb-16 tracking-tight text-primary">Explore your intelligent space now！</h2>
          <motion.form 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
              hidden: {}
            }}
            onSubmit={handleSubmit}
            className="space-y-12 text-left"
          >
            {[
              { placeholder: "Full Name", type: "text" },
              { placeholder: "Email Address", type: "email" },
              { placeholder: "Request Details", type: "textarea" }
            ].map((field, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                }}
                className="relative group"
              >
                {field.type === "textarea" ? (
                  <textarea className="w-full bg-transparent border-b border-stone-200 py-4 focus:ring-0 focus:border-primary transition-all text-lg font-body placeholder:text-stone-300 outline-none group-hover:border-stone-400" placeholder={field.placeholder} rows={4}></textarea>
                ) : (
                  <input className="w-full bg-transparent border-b border-stone-200 py-4 focus:ring-0 focus:border-primary transition-all text-lg font-body placeholder:text-stone-300 outline-none group-hover:border-stone-400" placeholder={field.placeholder} type={field.type} />
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-focus-within:w-full"></div>
              </motion.div>
            ))}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="pt-12 flex justify-center"
            >
              <motion.button 
                type="submit"
                disabled={isSubmitted}
                whileHover={isSubmitted ? {} : { scale: 1.02, backgroundColor: "#2a2a2a" }}
                whileTap={isSubmitted ? {} : { scale: 0.98 }}
                className={`w-full md:w-auto min-w-[240px] h-16 flex items-center justify-center uppercase font-bold text-[12px] tracking-[0.2em] transition-all rounded-xl shadow-lg ${
                  isSubmitted 
                    ? "bg-green-500 shadow-green-500/20 cursor-default" 
                    : "bg-primary text-white shadow-primary/10 hover:opacity-90"
                }`}
              >
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.span
                      key="text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      BEGIN WITH US!
                    </motion.span>
                  ) : (
                    <motion.div
                      key="check"
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      }}
                    >
                      <Check size={24} className="text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </section>
    </div>
  );
}
