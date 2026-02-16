import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket } from "lucide-react";
import { useLanguage } from "../utils/LanguageContext";

export const About = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: GraduationCap,
      title: t.about.features[0].title,
      description: t.about.features[0].description,
    },
    {
      icon: Code,
      title: t.about.features[1].title,
      description: t.about.features[1].description,
    },
    {
      icon: Rocket,
      title: t.about.features[2].title,
      description: t.about.features[2].description,
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.about.title}
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-secondary border border-border hover:border-primary transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-foreground/80 leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
