import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            className="font-display text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-foreground">J</span>
            <span className="text-gradient">S</span>
          </motion.div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jonathan Saint. All rights reserved.
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-6 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
