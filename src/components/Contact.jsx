import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Star } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="py-24 relative overflow-hidden bg-black/80">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-neon-purple)] to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col relative h-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {t('contact.title')}
              <span className="text-[var(--color-neon-purple)]">.</span>
            </h2>
            
            <p className="text-xl font-light text-gray-400 mb-10 italic border-l-2 border-[var(--color-neon-purple)] pl-4">
              "{t('contact.motto')}"
            </p>

            <div className="space-y-6">
              <a href="mailto:musabugrademir@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--color-neon-blue)] transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">{t('contact.personal')}</div>
                  <div className="text-lg">musabugrademir@gmail.com</div>
                </div>
              </a>
              
              <a href="mailto:musabugrademir@ieee.org" className="flex items-center gap-4 text-gray-300 hover:text-[var(--color-neon-purple)] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--color-neon-purple)] transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">{t('contact.ieee')}</div>
                  <div className="text-lg">musabugrademir@ieee.org</div>
                </div>
              </a>

              <div className="flex gap-4 pt-6">
                <a href="https://www.linkedin.com/in/musabugrademir/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/30 flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:shadow-[0_0_20px_#0077b5] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://github.com/NightKnight-nx2" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 text-white border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a href="https://linktr.ee/MusaBugraDemir" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#43E660]/10 text-[#43E660] border border-[#43E660]/30 flex items-center justify-center hover:bg-[#43E660] hover:text-black hover:shadow-[0_0_20px_#43E660] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13.736 5.853l4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.334-5.74-5.769v11.9h-3.304v-11.9l-5.74 5.769-2.325-2.334 4.229-4.108H4.925V8.121h5.908l-4.2-4.005 2.325-2.38 4.005 4.117V0h3.304v5.853z" /></svg>
                </a>
              </div>
            </div>

            {/* Animated Stars */}
            <div className="hidden md:block absolute bottom-16 right-16 pointer-events-none z-0">
              <Sparkles size={48} className="absolute -top-12 right-0 text-[var(--color-neon-blue)] animate-pulse" style={{ animationDuration: '3s' }} />
              <Star size={24} className="absolute top-8 -left-20 text-[var(--color-neon-purple)] animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
            </div>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="glass-panel p-1 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(176,38,255,0.2)] transition-shadow duration-500 border border-[var(--color-neon-purple)]/20">
              <img 
                src="https://github-readme-stats-xi-seven-54.vercel.app/api?username=NightKnight-nx2&show_icons=true&theme=radical&include_all_commits=true&count_private=true&bg_color=050505&hide_border=true&title_color=b026ff&icon_color=00f3ff&text_color=ffffff" 
                alt="GitHub Stats" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            
            <div className="glass-panel p-1 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-shadow duration-500 border border-[var(--color-neon-blue)]/20">
              <img 
                src="https://github-readme-stats-xi-seven-54.vercel.app/api/top-langs/?username=NightKnight-nx2&layout=compact&theme=radical&bg_color=050505&hide_border=true&title_color=00f3ff&text_color=ffffff" 
                alt="Top Languages" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} Musa Buğra Demir. All rights reserved.</p>
          </div>

          <div className="flex-1 hidden md:block">
            {/* Empty space for the center to keep flex layout balanced */}
          </div>

          <div className="flex-1 flex items-center justify-center md:justify-end gap-2">
            <span>Built with React & Tailwind</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-neon-green)] animate-pulse"></span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
