import { motion, Variants } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function ContactPage() {

  return (
    <div className="relative pt-48 pb-32 min-h-screen bg-stone-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-100/50 to-transparent pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="font-headline text-5xl md:text-8xl font-bold text-stone-900 tracking-tight mb-16"
            >
              Get in <span className="italic font-normal">Touch</span>
            </motion.h1>

            <div className="space-y-12">
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-center gap-8 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-stone-900 border border-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-1">Email Us</h3>
                  <a href="mailto:u3649491@connect.hku.hk" className="font-headline text-2xl text-stone-900 hover:text-stone-600 transition-colors">
                    u3649491@connect.hku.hk
                  </a>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-center gap-8 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-stone-900 border border-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-1">Location</h3>
                  <p className="font-headline text-2xl text-stone-900">
                    Hong Kong Region, China
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Form-like UI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* Form Card with Glassmorphism feel */}
            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] border border-stone-100 relative z-10">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-stone-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Vivian Zhou"
                    className="w-full bg-stone-50 border border-transparent rounded-2xl px-6 py-4 font-body text-stone-900 placeholder:text-stone-300 focus:bg-white focus:border-stone-200 focus:ring-0 transition-all outline-none"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-stone-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hello@example.com"
                    className="w-full bg-stone-50 border border-transparent rounded-2xl px-6 py-4 font-body text-stone-900 placeholder:text-stone-300 focus:bg-white focus:border-stone-200 focus:ring-0 transition-all outline-none"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-stone-400 ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-stone-50 border border-transparent rounded-2xl px-6 py-4 font-body text-stone-900 placeholder:text-stone-300 focus:bg-white focus:border-stone-200 focus:ring-0 transition-all outline-none resize-none"
                  />
                </motion.div>

                <motion.button 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-stone-900 text-white py-5 rounded-2xl font-label text-xs tracking-[0.2em] uppercase hover:bg-stone-800 transition-all flex items-center justify-center gap-3 group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-stone-700 to-stone-900 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.button>
              </form>
            </div>
            
            {/* Decorative element behind card */}
            <div className="absolute -inset-4 bg-stone-100 rounded-[3.5rem] -z-10 transform rotate-2 opacity-50" />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
