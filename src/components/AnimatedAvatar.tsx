import { motion } from 'framer-motion';
import jonathanAvatar from '../assets/jonathan-avatar.png';

const AnimatedAvatar = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute -inset-4 rounded-full opacity-60"
        style={{
          background: 'linear-gradient(135deg, hsl(180 100% 50% / 0.3), hsl(270 100% 65% / 0.3))',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Rotating border */}
      <motion.div
        className="absolute -inset-1 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, hsl(180 100% 50%), hsl(270 100% 65%), hsl(180 100% 50%))',
          padding: '3px',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-full h-full rounded-full bg-background" />
      </motion.div>

      {/* Avatar container */}
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Scan line effect */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(transparent 0%, hsl(180 100% 50% / 0.1) 50%, transparent 100%)',
            height: '50%',
          }}
          animate={{
            y: ['-100%', '300%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Avatar image */}
        <img
          src={jonathanAvatar}
          alt="Jonathan Saint"
          className="w-full h-full object-cover"
        />

        {/* Overlay gradient */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 60%, hsl(180 100% 50% / 0.2) 100%)',
          }}
        />
      </motion.div>

      {/* Tech decorations */}
      <motion.div
        className="absolute -right-2 top-1/4 w-3 h-3 rounded-full bg-primary"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -left-2 bottom-1/3 w-2 h-2 rounded-full bg-secondary"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </motion.div>
  );
};

export default AnimatedAvatar;
