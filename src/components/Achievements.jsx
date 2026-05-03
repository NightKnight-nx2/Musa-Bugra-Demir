import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star, Sparkles, Lightbulb, BookOpen, Users, Code, GraduationCap } from 'lucide-react';

const Achievements = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--color-neon-blue)]/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            {t('achievements.title')}
            <span className="text-[var(--color-neon-green)]">.</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-neon-green)] to-[var(--color-neon-blue)] rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]"
        >
          {/* Monad Blitz Hackathon */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy size={120} className="text-[var(--color-neon-purple)]" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-neon-purple)]/20 text-[var(--color-neon-purple)] rounded-full text-xs font-bold mb-6 border border-[var(--color-neon-purple)]/30">
                  <Sparkles size={14} /> Winner
                </div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-glow-purple transition-all">Monad Blitz Hackathon</h3>
                <p className="text-xl text-gray-300 font-light mb-6">{t('ach.monad.sub')}</p>
              </div>
              
              <div className="flex gap-3">
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm">Smart Contracts</span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm">Web3</span>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm">Flutter</span>
              </div>
            </div>
          </motion.div>

          {/* IEEEXtreme */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 lg:col-span-1 glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden group border-t-2 border-t-[var(--color-neon-blue)]/50 flex flex-col justify-center items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[var(--color-neon-blue)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Medal size={40} className="text-[var(--color-neon-blue)]" />
            </div>
            <h3 className="text-xl font-bold mb-2">IEEEXtreme Global</h3>
            <p className="text-sm text-gray-400 mb-4">{t('ach.ieee.sub')}</p>
            
            <div className="w-full flex justify-between px-4 py-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-neon-blue)]">33</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{t('ach.ieee.tr')}</div>
              </div>
              <div className="w-px bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1071</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{t('ach.ieee.world')}</div>
              </div>
            </div>
          </motion.div>

          {/* STEM Projects */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex flex-col items-center text-center p-6 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/5">
                <Star size={48} className="text-[var(--color-neon-green)] mb-4" />
                <h3 className="text-2xl font-bold mb-2">{t('ach.stem.title')}</h3>
                <p className="text-sm text-gray-400">{t('ach.stem.desc')}</p>
              </div>
              
              <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { nameKey: "ach.stem.p1", icon: Lightbulb },
                  { nameKey: "ach.stem.p2", icon: BookOpen },
                  { nameKey: "ach.stem.p3", icon: Users },
                  { nameKey: "ach.stem.p4", icon: Code },
                  { nameKey: "ach.stem.p5", icon: GraduationCap }
                ].map((project, i) => {
                  const Icon = project.icon;
                  return (
                    <div key={i} className="p-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/10 flex items-center gap-3 justify-center min-h-[80px]">
                      <Icon size={20} className="text-[var(--color-neon-green)] flex-shrink-0" />
                      <h4 className="font-bold text-sm text-center">{t(project.nameKey)}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
