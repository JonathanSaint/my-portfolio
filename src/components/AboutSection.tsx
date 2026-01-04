import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Gamepad2, Smartphone, Zap } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Building modern, responsive web applications with JavaScript and React',
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Creating immersive gaming experiences with Unity and C#',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Developing cross-platform mobile applications with React Native',
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Passionate about finding elegant solutions to complex challenges',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">ABOUT </span>
            <span className="text-gradient">ME</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hey there! I'm <span className="text-primary font-semibold">Jonathan Saint</span>, 
              a passionate junior developer with a love for creating digital experiences that 
              leave an impression.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in tech started with a curiosity for how games and apps work behind 
              the scenes. That curiosity turned into a passion, and now I spend my days 
              crafting code and bringing ideas to life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's building interactive web applications, developing engaging mobile 
              apps, or creating game mechanics that keep players hooked — I'm always excited 
              to take on new challenges and grow as a developer.
            </p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: '10+', label: 'Projects' },
                { value: '3', label: 'Languages' },
                { value: '∞', label: 'Curiosity' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center glass rounded-lg p-4">
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass rounded-xl p-6 hover:bg-primary/5 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-sm font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
