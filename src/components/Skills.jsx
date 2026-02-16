import { motion } from "framer-motion";
import { Code2, Database, Palette, Wrench } from "lucide-react";
import { useLanguage } from "../utils/LanguageContext";

const skillsData = [
  {
    icon: Code2,
    skills: [
      { name: "HTML5/CSS3", level: 100 },
      { name: "JavaScript", level: 90 },
      { name: "Jquery", level: 70 },
      { name: "SCSS", level: 75 },
      { name: "SASS", level: 65 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 100 },
    ],
  },
  {
    icon: Database,
    skills: [
      { name: "Node.js", level: 40 },
      { name: "Express", level: 35 },
      { name: "MongoDB", level: 30 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    icon: Palette,
    skills: [
      { name: "Responsive Design", level: 100 },
      { name: "Figma", level: 100 },
      {name: "Photopea" , level: 100},
      { name: "UI Components", level: 100 },
      { name: "Animations", level: 75 },
    ],
  },
  {
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Vite", level: 85 },
      { name: "NPM", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = skillsData.map((cat, index) => ({
    ...cat,
    title: t.skills.categories[index].title,
  }));

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.skills.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border hover:border-primary transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center"
                >
                  <category.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 + 0.5 }}
                        className="text-primary font-semibold"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: skillIndex * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-foreground/70">
            {t.skills.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
