import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "../utils/LanguageContext";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 text-foreground/70">
            <span>© {currentYear} Portfolio. {t.footer.madeWith}</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>{t.footer.using}</span>
          </div>
          
          <div className="flex gap-6 text-sm text-foreground/60">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              className="hover:text-primary transition-colors"
            >
              {t.nav.about}
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="hover:text-primary transition-colors"
            >
              {t.nav.projects}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
