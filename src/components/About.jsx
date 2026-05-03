import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Quote, Code2, BrainCircuit } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 relative relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            {t('about.title')}
            <span className="text-[var(--color-neon-blue)]">.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-neon-purple)]/20 blur-[50px] rounded-full"></div>
            
            <Code2 size={40} className="text-[var(--color-neon-purple)] mb-6" />
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              {t('about.p1')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-7 glass-panel p-8 rounded-3xl relative overflow-hidden group"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-neon-blue)]/10 rounded-full blur-[40px] group-hover:bg-[var(--color-neon-blue)]/20 transition-all duration-500"></div>
            
            <BrainCircuit size={32} className="text-[var(--color-neon-blue)] mb-6" />
            <div className="relative">
              <p className="text-xl md:text-2xl font-bold italic mb-6 leading-snug relative z-10">
                {t('about.quote')}
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('about.p2')}
            </p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
