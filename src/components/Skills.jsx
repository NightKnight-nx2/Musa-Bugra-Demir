import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    titleKey: "skills.cat.lang",
    skills: ["C", "C++", "C#", "Python", "Java", "JS", "HTML", "CSS", "Dart", "Solidity", "SQL"],
    color: "var(--color-neon-blue)"
  },
  {
    titleKey: "skills.cat.web",
    skills: ["React", "Vite", "Tailwind CSS", "Figma", "Canva", "Photoshop"],
    color: "#ff00aa"
  },
  {
    titleKey: "skills.cat.ai",
    skills: ["OpenCV", "YOLO", "PyTorch", "TensorRT"],
    color: "var(--color-neon-purple)"
  },
  {
    titleKey: "skills.cat.rob",
    skills: ["ROS 2", "Gazebo", "Arduino", "STM32", "EPS32"],
    color: "var(--color-neon-green)"
  },
  {
    titleKey: "skills.cat.game",
    skills: ["Unity", "Unreal Engine", "Blender", "SolidWorks"],
    color: "var(--color-neon-blue)"
  },
  {
    titleKey: "Web3", // Keeping as is since Web3 is universal
    skills: ["Smart Contracts", "Monad", "Sui"],
    color: "var(--color-neon-purple)"
  }
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 relative border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t('skills.title')}
              <span className="text-[var(--color-neon-blue)]">.</span>
            </h2>
            <p className="text-gray-400 font-light text-lg">
              {t('skills.desc')}
            </p>
            
            <div className="mt-12 hidden lg:block w-full h-[320px] border border-white/10 rounded-2xl relative overflow-hidden bg-[#0d0d12] shadow-[0_0_30px_rgba(0,243,255,0.05)] group">
               <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-neon-blue)]/5 to-transparent"></div>
               <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                 {/* Decorative creative code pattern */}
                 <div className="p-6 font-mono text-xs leading-loose">
                    <span className="text-[var(--color-neon-purple)]">import</span> <span className="text-white">&#123;</span> Vision <span className="text-white">&#125;</span> <span className="text-[var(--color-neon-purple)]">from</span> <span className="text-[var(--color-neon-green)]">'@ai/core'</span>;<br/>
                    <span className="text-[var(--color-neon-purple)]">import</span> <span className="text-white">&#123;</span> AutonomousAgent <span className="text-white">&#125;</span> <span className="text-[var(--color-neon-purple)]">from</span> <span className="text-[var(--color-neon-green)]">'ros2'</span>;<br/>
                    <br/>
                    <span className="text-[var(--color-neon-purple)]">async function</span> <span className="text-[var(--color-neon-blue)] font-bold">buildFuture</span><span className="text-white">() &#123;</span><br/>
                    &nbsp;&nbsp;<span className="text-gray-500 italic">// Initialize hardware & neural nets</span><br/>
                    &nbsp;&nbsp;<span className="text-[var(--color-neon-purple)]">const</span> <span className="text-white">agent</span> = <span className="text-[var(--color-neon-purple)]">new</span> <span className="text-[#ff00aa]">AutonomousAgent</span><span className="text-white">();</span><br/>
                    &nbsp;&nbsp;<span className="text-[var(--color-neon-purple)]">await</span> <span className="text-white">agent.train(Vision.model(</span><span className="text-[var(--color-neon-green)]">'YOLOv11'</span><span className="text-white">));</span><br/>
                    <br/>
                    &nbsp;&nbsp;<span className="text-[var(--color-neon-purple)]">while</span> <span className="text-white">(</span><span className="text-[var(--color-neon-blue)]">true</span><span className="text-white">) &#123;</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">agent.innovate();</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white">agent.pushLimits();</span><br/>
                    &nbsp;&nbsp;<span className="text-white">&#125;</span><br/>
                    <span className="text-white">&#125;</span><br/>
                    <br/>
                    <span className="text-[var(--color-neon-blue)] font-bold">buildFuture</span><span className="text-white">();</span>
                 </div>
               </div>
            </div>
          </motion.div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={category.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl group hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color, boxShadow: `0 0 10px ${category.color}` }}></div>
                  <h3 className="font-bold text-lg tracking-wide">{category.titleKey === 'Web3' ? 'Web3' : t(category.titleKey)}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 group-hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
