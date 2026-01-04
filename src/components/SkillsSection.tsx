import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
    { name: 'C#', level: 75, color: 'from-purple-400 to-purple-600' },
    { name: 'React Native', level: 70, color: 'from-cyan-400 to-blue-500' },
    { name: 'React', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'Unity', level: 65, color: 'from-gray-400 to-gray-600' },
    { name: 'TypeScript', level: 70, color: 'from-blue-500 to-blue-700' },
  ];

  const technologies = [
    'Git', 'VS Code', 'Node.js', 'HTML5', 'CSS3', 'Tailwind', 
    'Firebase', 'REST APIs', 'Figma', 'Blender', 'Agile', 'npm'
  ];

  return (
    <section id="skills" className="relative py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">MY </span>
            <span className="text-gradient">SKILLS</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill bars */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-xl text-foreground mb-6">Core Technologies</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary text-sm">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                    style={{
                      boxShadow: '0 0 20px currentColor',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technologies grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display text-xl text-foreground mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="glass rounded-lg p-4 text-center hover:bg-primary/10 transition-all duration-300 group cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              className="mt-8 p-6 glass rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
                <div>
                  <h4 className="font-display text-foreground font-semibold">Always Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Currently exploring game physics and AI systems
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
