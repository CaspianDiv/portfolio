import { motion } from "framer-motion";
import { Award, Download, ExternalLink, Eye, Trophy, Medal, Star } from "lucide-react";
import { useState } from "react";
import { HoverCard } from "./HoverCard";
import { useLanguage } from "../utils/LanguageContext";
import diplom from "../public/front_end_diplom.jpeg";


const achievementsData = [
  {
    id: 1,
    title: {
      az: "Front-End Developer Diplomu",
      en: "Front-End Developer Diploma",
      ru: "Диплом Front-End разработчика"
    },
    institution: "DivAcademy",
    date: "2024-2025",
    level: {
      az: "Birinci Dərəcə",
      en: "First Class",
      ru: "Первая степень"
    },
    image: `${diplom}`,
    certificateUrl: "https://drive.google.com/file/d/1vQ9iE6830bQOmBYj0kkMRgaZ5hsGJ3mc/view?usp=sharing",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 2,
    title: {
      az: "Karyeraya İlk Addım",
      en: "Career Foundation Program",
      ru: "Программа Развития Карьеры"
    },
    institution: "DivAcademy",
    date: "2025",
    level: {
      az: "Tamamlandı",
      en: "Completed",
      ru: "Завершено"
    },
    image: "https://i.ibb.co/tjqrh3M/front-end-sertifikat.jpg", // Öz şəkilinlə əvəz et
    certificateUrl: "https://drive.google.com/file/d/1vQ9iE6830bQOmBYj0kkMRgaZ5hsGJ3mc/view", // Sertifikat linki buraya
    icon: Award,
    color: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    title: {
      az: "Backend for Frontend",
      en: "Career Foundation Program",
      ru: "Программа Развития Карьеры"
    },
    institution: "Xsolla",
    date: "2026",
    level: {
      az: "Tamamlandı",
      en: "Completed",
      ru: "Завершено"
    },
    image: "https://i.ibb.co/DH5dQZ6W/full-stack-developer-sertifikat.jpg", // Öz şəkilinlə əvəz et
    certificateUrl: "https://drive.google.com/file/d/1OhwsQk290fpa-89z5jYdTgWr_2VcGGIs/view?usp=drive_link", // Sertifikat linki buraya
    icon: Award,
    color: "from-green-500 to-teal-500",
  },
  // ========================================
  // YENİ SERTİFİKAT ƏLAVƏ ETMƏK ÜÇÜN BURAYA KOPYALA-YAPIŞDIR:
  // ========================================
  // {
  //   id: 3,
  //   title: {
  //     az: "Sertifikat Adı (Azərbaycan dilində)",
  //     en: "Certificate Name (English)",
  //     ru: "Название сертификата (Русский)"
  //   },
  //   institution: "Platform/Akademiya adı",
  //   date: "2025",
  //   level: {
  //     az: "Səviyyə (məsələn: İleri, Orta, Başlanğıc)",
  //     en: "Level (e.g: Advanced, Intermediate, Beginner)",
  //     ru: "Уровень (например: Продвинутый, Средний, Начальный)"
  //   },
  //   image: "/path-to-image.jpg", // Şəkil yolu - public qovluğuna qoy
  //   certificateUrl: "https://certificate-link.com", // Sertifikat PDF linki
  //   icon: Star, // İkonlar: Trophy, Medal, Award, Star
  //   color: "from-purple-500 to-pink-500", // Tailwind gradient rəngləri
  // },
  // ========================================
  {
    id: 4,
    title: {
      az: "Full Stack Developer (Davam edir)",
      en: "Full Stack Developer (In Progress)",
      ru: "Full Stack разработчик (В процессе)"
    },
    institution: "DivAcademy",
    date: "2024 - 2026",
    level: {
      az: "İrəliləyir",
      en: "In Progress",
      ru: "В процессе"
    },
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    certificateUrl: null,
    icon: Medal,
    color: "from-blue-500 to-purple-500",
    inProgress: true,
  },
];

export const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t, language } = useLanguage();

  const achievements = achievementsData.map(ach => ({
    ...ach,
    title: ach.title[language],
    level: ach.level[language],
  }));

  const handleDownloadCV = () => {
    const cvUrl = "https://drive.google.com/file/d/1VFrKF4K0-sBO0igPceCzy-l_3bMwIQss/view?usp=sharing";
    window.open(cvUrl, "_blank");
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.achievements.title}
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-blue-600 mx-auto rounded-full" />
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            {t.achievements.subtitle}
          </p>
        </motion.div>

        {/* CV Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-linear-to-r from-primary to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="w-5 h-5" />
            <span className="text-lg">{t.achievements.downloadCV}</span>
          </motion.button>
        </motion.div>

        {/* Achievements Grid - 3 sütun (lg screen-də) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <HoverCard key={achievement.id} containerClassName="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-background border border-border overflow-hidden h-full flex flex-col relative"
              >
                {achievement.inProgress && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium backdrop-blur-sm">
                      {t.achievements.inProgress}
                    </span>
                  </div>
                )}

                {/* Image */}
                <div 
                  className="relative group cursor-pointer overflow-hidden h-48"
                  onClick={() => setSelectedImage(achievement.image)}
                >
                  <motion.img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
                    >
                      <Eye className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  <div className={`absolute top-4 left-4 w-12 h-12 bg-linear-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{achievement.title}</h3>
                  
                  <div className="flex flex-col gap-1 text-sm text-foreground/60 mb-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-3 h-3" />
                      <span className="font-medium">{achievement.institution}</span>
                    </div>
                    <span className="text-xs">{achievement.date}</span>
                  </div>

                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      achievement.inProgress 
                        ? "bg-blue-500/20 text-blue-600 dark:text-blue-400"
                        : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400"
                    }`}>
                      {achievement.level}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-3">
                    {achievement.certificateUrl ? (
                      <div className="flex gap-2">
                        <motion.a
                          href={achievement.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>{t.achievements.viewCertificate}</span>
                        </motion.a>
                        <motion.button
                          onClick={() => setSelectedImage(achievement.image)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-2 bg-secondary hover:bg-accent border border-border rounded-lg transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </motion.button>
                      </div>
                    ) : (
                      <div className="text-center py-2 bg-secondary/50 rounded-lg text-sm text-foreground/60">
                        {t.achievements.comingSoon}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </HoverCard>
          ))}
        </div>

        {/* Future Achievement Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <HoverCard>
            <div className="p-8 rounded-2xl bg-linear-to-br from-primary/10 via-blue-500/10 to-purple-500/10 border-2 border-dashed border-primary/30 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block mb-4"
              >
                <Trophy className="w-16 h-16 text-primary/50" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">{t.achievements.futureTitle}</h3>
              <p className="text-foreground/70">
                {t.achievements.futureDescription}
              </p>
            </div>
          </HoverCard>
        </motion.div>

        {/* Image Preview Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm"
              >
                ✕
              </motion.button>
              <img
                src={selectedImage}
                alt="Certificate preview"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};