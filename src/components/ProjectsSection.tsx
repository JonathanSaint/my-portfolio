import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Gamepad2, Smartphone, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Space Defender',
      description: 'A fast-paced arcade shooter built with Unity and C#. Features procedural level generation and adaptive difficulty.',
      tags: ['Unity', 'C#', 'Game Dev'],
      icon: Gamepad2,
      gradient: 'from-purple-500 to-pink-500',
      links: { github: '#', demo: '#' },
    },
    {
      title: 'TaskFlow Mobile',
      description: 'Cross-platform productivity app built with React Native. Includes offline sync and push notifications.',
      tags: ['React Native', 'Firebase', 'Mobile'],
      icon: Smartphone,
      gradient: 'from-cyan-500 to-blue-500',
      links: { github: '#', demo: '#' },
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Interactive portfolio tracker with real-time data visualization. Built with React and modern APIs.',
      tags: ['React', 'JavaScript', 'API'],
      icon: Globe,
      gradient: 'from-green-500 to-emerald-500',
      links: { github: '#', demo: '#' },
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-4" ref={ref}>
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
            <span className="text-gradient">PROJECTS</span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Here are some projects I've worked on. Each one taught me something new.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative glass rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                {/* Pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '20px 20px',
                  }}
                />
                
                {/* Icon */}
                <div className="absolute bottom-4 left-6">
                  <div className="w-14 h-14 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4"
                >
                  <motion.a
                    href={project.links.github}
                    className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.links.demo}
                    className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  boxShadow: 'inset 0 0 0 1px hsl(180 100% 50% / 0.3)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-display text-sm"
            whileHover={{ x: 5 }}
          >
            View all projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
