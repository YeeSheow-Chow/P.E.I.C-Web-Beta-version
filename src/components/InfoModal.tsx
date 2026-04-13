import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function InfoModal({ isOpen, onClose, title, content }: InfoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-stone-900/60 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-6 top-[10%] bottom-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-[101] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-stone-100"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
              <h2 className="font-headline text-2xl font-bold text-stone-900 tracking-tight">{title}</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-stone-200/50 transition-colors text-stone-400 hover:text-stone-900"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 scrollbar-thin scrollbar-thumb-stone-200 scrollbar-track-transparent">
              <div className="prose prose-stone max-w-none prose-headings:font-headline prose-headings:tracking-tight prose-p:font-body prose-p:text-stone-600 prose-li:font-body prose-li:text-stone-600">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-8 py-6 border-t border-stone-100 bg-stone-50/50 flex justify-end">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-stone-900 text-white text-xs font-label tracking-widest uppercase rounded-xl hover:bg-stone-800 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
