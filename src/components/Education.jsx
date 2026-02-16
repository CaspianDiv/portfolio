import { motion } from "framer-motion";
import { Calendar, Award, BookOpen } from "lucide-react";
import { useLanguage } from "../utils/LanguageContext";

export const Education = () => {
  const { t } = useLanguage();

  const skills1 = ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Git"];
  const skills2 = ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"];

  const education = [
    {
      date: t.education.items[0].date,
      title: t.education.items[0].title,
      institution: t.education.items[0].institution,
      description: t.education.items[0].description,
      skills: skills1,
      icon: BookOpen,
      status: t.education.items[0].status,
    },
    {
      date: t.education.items[1].date,
      title: t.education.items[1].title,
      institution: t.education.items[1].institution,
      description: t.education.items[1].description,
      skills: skills2,
      icon: Award,
      status: t.education.items[1].status,
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.education.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex gap-6 items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary"
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  {index !== education.length - 1 && (
                    <div className="w-1 h-full bg-gradient-to-b from-primary to-transparent mt-2" />
                  )}
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 p-6 rounded-2xl bg-background border border-border hover:border-primary transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                      <p className="text-foreground/60 font-medium">{item.institution}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      index === 0
                        ? "bg-green-500/20 text-green-600 dark:text-green-400" 
                        : "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <p className="text-foreground/80 mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
