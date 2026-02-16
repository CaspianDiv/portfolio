import { motion } from "framer-motion";
import { Code2, Database, Palette, Terminal } from "lucide-react";
import { useLanguage } from "../utils/LanguageContext";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";


const floatingIcons = [
  { Icon: Code2, delay: 0, x: -20, y: -30 },
  { Icon: Database, delay: 0.2, x: 20, y: -40 },
  { Icon: Palette, delay: 0.4, x: -30, y: 40 },
  { Icon: Terminal, delay: 0.6, x: 30, y: 35 },
];

export const Hero = () => {
  const { t } = useLanguage();
  const [scroll , setShowScroll] = useState(false);
  

  
  function handleUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true)
      }else {
        setShowScroll(false)
      }
    };

    window.addEventListener("scroll" , handleScroll)
        return () => window.removeEventListener("scroll" , handleScroll)
  },[]);
      
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-secondary/10 animate-gradient" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating tech icons */}
          <div className="relative mb-12">
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.2, 1],
                  x: [x, x + 10, x],
                  y: [y, y - 10, y],
                }}
                transition={{
                  duration: 4,
                  delay: delay,
                  repeat: Infinity,
                }}
                className="absolute hidden lg:block"
                style={{ 
                  left: `calc(50% + ${x * 4}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <Icon className="w-12 h-12 text-primary/40" />
              </motion.div>
            ))}
          </div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.greeting}{" "}
              <span className="bg-linear-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                {t.hero.title}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                {t.hero.viewProjects}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-secondary border border-border rounded-lg font-semibold hover:bg-accent transition-colors"
              >
                {t.hero.contactMe}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
     { scroll &&
       <div className="relative">
        <div onClick={handleUp} className="cursor-pointer fixed right-10 border-2 p-4 rounded-full border-[#2563eb] hover:bg-linear-to-t hover:bg-[#1553d8] hover:text-white transition-all duration-300">
          <IoIosArrowUp  />
        </div>
      </div>}
      </div>
    </section>
  );
};
