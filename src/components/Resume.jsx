import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import resumePDF from '../assets/Devi_Sri_Charan_IIITD_FS_2024.pdf';
import { motion } from 'framer-motion';

const Resume = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Blurred Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      
      {/* Resume Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className={`${styles.paddingX} fixed inset-0 z-50 flex items-center justify-center`}
      >
        <div className="relative w-full max-w-5xl h-[90vh] bg-tertiary rounded-xl p-4 shadow-2xl">
          {/* Close Button */}
          <button
            onClick={() => navigate('/')}
            className="absolute -top-4 -right-4 w-10 h-10 bg-tertiary rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-all duration-300 z-50"
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
  );
};

export default Resume; 