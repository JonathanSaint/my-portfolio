import { motion } from 'framer-motion';
import AnimatedAvatar from './AnimatedAvatar';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(hsl(180 50% 20% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(180 50% 20% / 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto">
        {/* Avatar */}
        <AnimatedAvatar />

        {/* Content */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.p
            className="text-primary font-display text-sm md:text-base tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            JUNIOR DEVELOPER
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-foreground">JONATHAN</span>
            <br />
            <span className="text-gradient glow-text">SAINT</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Software & Game Developer crafting immersive digital experiences with code
          </motion.p>

          {/* Social links */}
          <motion.div
            className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                onClick={(e) => {
                  if (social.href.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(social.href.slice(1));
                  }
                }}
                className="glass p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="relative overflow-hidden px-8 py-4 rounded-lg font-display text-sm tracking-wider group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gradient border */}
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-secondary p-[2px]">
              <span className="flex items-center justify-center w-full h-full rounded-lg bg-background">
                <span className="sr-only">View My Work</span>
              </span>
            </span>
            
            {/* Text */}
            <span className="relative z-10 text-gradient group-hover:opacity-80 transition-opacity">
              VIEW MY WORK
            </span>

            {/* Hover glow */}
            <motion.span
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                boxShadow: '0 0 30px hsl(180 100% 50% / 0.5)',
              }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="w-6 h-6 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
