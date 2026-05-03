import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Network, Ship, Crosshair, Satellite, Gamepad2, Cpu } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-right"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            <span className="text-[var(--color-neon-purple)]">.</span>
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-[var(--color-neon-purple)] to-[var(--color-neon-blue)] rounded-full ml-auto"></div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[250px]"
        >
          
          {/* Main IEEE Card - Spans 2 cols, 2 rows */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 lg:col-span-3 row-span-2 glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-neon-blue)]/0 rounded-full blur-[80px] group-hover:bg-[var(--color-neon-blue)]/20 transition-all duration-500"></div>
            <div className="relative z-10">
              <img 
                src="./assets/ieee-mb-blue.webp" 
                alt="IEEE Logo" 
                className="w-12 h-12 mb-4 object-contain opacity-70 brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_var(--color-neon-blue)] transition-all duration-300" 
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
              />
              <Network size={32} className="text-white opacity-70 mb-4 hidden group-hover:text-[var(--color-neon-blue)] group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_var(--color-neon-blue)] transition-all duration-300" />
              
              <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--color-neon-blue)]">IEEE Ege Student Branch</h3>
              <p className="text-[var(--color-neon-blue)] font-medium text-sm mb-4">{t('exp.ieee.role')}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {t('exp.ieee.desc')}
              </p>
            </div>
            <div className="mt-4 relative z-10">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-bold group-hover:text-[var(--color-neon-blue)]/80 transition-colors duration-300">{t('exp.ieee.tag')}</span>
            </div>
          </motion.div>

          {/* Ege Mavi Inci - Spans 2 cols, 1 row */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 row-span-1 glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden border-t border-t-white/10 hover:border-t-[var(--color-neon-blue)]/50 transition-colors duration-300"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--color-neon-blue)]/0 rounded-full blur-[40px] group-hover:bg-[var(--color-neon-blue)]/20 transition-all duration-500"></div>
            <div className="flex items-start justify-between relative z-10 mb-2">
              <div>
                <h3 className="text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-[var(--color-neon-blue)]">{t('exp.usv.title')}</h3>
              </div>
              <Ship size={28} className="text-white opacity-70 group-hover:text-[var(--color-neon-blue)] group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_var(--color-neon-blue)] transition-all duration-300 shrink-0 ml-4" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed relative z-10 mb-4">{t('exp.usv.desc')}</p>
            <p className="text-sm text-[var(--color-neon-blue)] font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10 mt-auto">{t('exp.usv.tag')}</p>
          </motion.div>

          {/* Ege ODBARS - 1 col, 1 row */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-2 row-span-1 glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3333]/0 rounded-full blur-[40px] group-hover:bg-[#ff3333]/20 transition-all duration-500"></div>
             <div className="relative z-10 mb-2">
                <Cpu size={28} className="text-white opacity-70 mb-3 group-hover:text-[#ff3333] group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_#ff3333] transition-all duration-300" />
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#ff3333]">{t('exp.ugv.title')}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{t('exp.ugv.desc')}</p>
             </div>
             <p className="text-sm text-[#ff3333] font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10 mt-auto">{t('exp.ugv.tag')}</p>
          </motion.div>

          {/* Aegean Crafters - 1 col, 1 row */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-1 row-span-1 glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col items-center justify-center text-center group relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[var(--color-neon-purple)]/0 group-hover:bg-[var(--color-neon-purple)]/10 blur-xl transition-all duration-500"></div>
             <Gamepad2 size={36} className="text-white opacity-70 group-hover:opacity-100 group-hover:text-[var(--color-neon-purple)] group-hover:drop-shadow-[0_0_15px_var(--color-neon-purple)] transition-all duration-300 mb-3 relative z-10" />
             <h3 className="text-md font-bold leading-tight transition-colors duration-300 group-hover:text-[var(--color-neon-purple)] relative z-10">Aegean Crafters</h3>
             <p className="text-gray-400 text-xs mt-2 relative z-10">{t('exp.crafters.role')}</p>
          </motion.div>

          {/* Ege Çelikgöz - Spans 2 cols, 1 row */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 row-span-1 glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3333]/0 rounded-full blur-[40px] group-hover:bg-[#ff3333]/20 transition-all duration-500"></div>
            <div className="relative z-10 mb-2">
              <Crosshair size={28} className="text-white opacity-70 mb-3 group-hover:text-[#ff3333] group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_#ff3333] transition-all duration-300" />
              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#ff3333]">{t('exp.celikgoz.title')}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{t('exp.celikgoz.desc')}</p>
            </div>
            <p className="text-sm text-[#ff3333] font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10 mt-auto">{t('exp.celikgoz.tag')}</p>
          </motion.div>

          {/* Ege CubeSat - Spans 2 cols, 1 row */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 row-span-1 glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-neon-purple)]/0 rounded-full blur-[40px] group-hover:bg-[var(--color-neon-purple)]/20 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative z-10 mb-2">
              <Satellite size={28} className="text-white opacity-70 mb-3 group-hover:text-[var(--color-neon-purple)] group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_var(--color-neon-purple)] transition-all duration-300" />
              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--color-neon-purple)]">{t('exp.cubesat.title')}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{t('exp.cubesat.desc')}</p>
            </div>
            <p className="text-sm text-[var(--color-neon-purple)] font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10 mt-auto">{t('exp.cubesat.tag')}</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
