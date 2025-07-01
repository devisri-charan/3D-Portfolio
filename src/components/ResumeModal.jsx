import { useEffect } from 'react';
import resumePDF from '../assets/Devi_Sri_Charan_IIITD_SDE_2024.pdf';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blurred Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={handleBackdropClick}
          />
          
          {/* Resume Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <div className="relative w-full max-w-5xl h-[90vh] bg-tertiary rounded-xl p-4 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-4 -right-4 w-10 h-10 bg-tertiary rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-all duration-300 z-50 border-2 border-white/20"
                aria-label="Close Resume"
              >
                <span className="text-white text-2xl font-bold">×</span>
              </button>

              {/* PDF Container */}
              <div className="w-full h-full rounded-lg overflow-hidden">
                <iframe
                  src={resumePDF}
                  className="w-full h-full"
                  title="Resume"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;