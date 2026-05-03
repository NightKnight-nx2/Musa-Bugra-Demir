import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Terminal } from 'lucide-react';

const TypewriterText = ({ text, onComplete }) => {
  // Use framer motion stagger for typewriter effect
  const characters = Array.from(text);
  
  return (
    <motion.span
      className="inline-block whitespace-pre-wrap"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05 } }
      }}
      onAnimationComplete={() => onComplete && onComplete()}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline"
          variants={{
            hidden: { display: 'none', opacity: 0 },
            visible: { display: 'inline', opacity: 1 }
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span 
        animate={{ opacity: [1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block ml-1 w-2 h-[0.9em] bg-[var(--color-neon-purple)] align-bottom"
      />
    </motion.span>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // When language changes, we reset the typing animation
  React.useEffect(() => {
    setIsTypingComplete(false);
  }, [i18n.language]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = './assets/cvmusabugrademir.pdf';
    link.download = 'Musa_Bugra_Demir_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-neon-purple)]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-neon-blue)]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 min-h-[400px] flex flex-col justify-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[var(--color-neon-green)] mb-4">
              <Terminal size={14} />
              <span>System.out.println("Hello World");</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight min-h-[120px] md:min-h-[160px]">
              {/* Force re-mount on language change to restart typing effect */}
              <TypewriterText key={i18n.language} text={t('hero.title')} onComplete={() => setIsTypingComplete(true)} />
            </h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTypingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg leading-relaxed whitespace-pre-line">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#experience" className="group relative px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.btn.projects')}
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-blue)] opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
              
              <button onClick={handleDownloadCV} className="group px-8 py-4 glass-panel glass-panel-hover font-bold rounded-lg flex items-center gap-2 text-white">
                <Download size={18} className="group-hover:-translate-y-1 transition-transform text-[var(--color-neon-blue)]" />
                {t('hero.btn.cv')}
              </button>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Image/Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Geometric Accents */}
            <div className="absolute inset-0 border-2 border-[var(--color-neon-purple)]/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-[var(--color-neon-blue)]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 border border-white/10 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
            
            <div className="absolute inset-4 rounded-full overflow-hidden border border-white/10 glass-panel z-10">
              <img 
                src="./assets/pp.webp" 
                alt="Musa Buğra Demir" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400?text=MBD';
                }}
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
