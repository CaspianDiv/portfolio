import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { HoverCard } from "./HoverCard";
import { useState, useEffect } from "react";
import { SkeletonCard } from "./Skeleton";
import { useLanguage } from "../utils/LanguageContext";
import project_1 from "../public/proyekt_1.png";
import project_2 from "../public/proyekt_2.png";
import project_3 from "../public/proyekt_3.png";
import project_4 from "../public/proyekt_4.png";
import project_5 from "../public/proyekt_5.png";
import project_6 from "../public/proyekt_6.png";
import project_7 from "../public/proyekt_7.png";
import project_8 from "../public/proyekt_8.png";
import project_9 from "../public/proyekt_9.png";
import project_10 from "../public/proyekt_10.png";
import project_11 from "../public/proyekt_11.png";
import project_12 from "../public/proyekt_12.png";
import project_13 from "../public/proyekt_13.png";
import project_14 from "../public/proyekt_14.png";
import project_15 from "../public/proyekt_15.png";
import project_16 from "../public/proyekt_16.png";
import project_17 from "../public/proyekt_17.png";
import project_18 from "../public/proyekt_18.png";
import project_19 from "../public/proyekt_19.png";
import project_20 from "../public/proyekt_20.png";
import project_21 from "../public/proyekt_21.png";


const projectsData = [
  {
    title: { az: "Dünya ölkələri üzrə web tətbiq", en: "World Countries Web application", ru: "Веб-приложение стран мира" },
    description: { 
      az: "Modern və responsive Dünya ölkələri veb səhifəsi. HTML5, CSS3 və JavaScript istifadə edərək hazırlanıb.",
      en: "Modern and responsive World Countries website. Built using HTML5, CSS3 and JavaScript.",
      ru: "Современный и адаптивный веб-сайт, посвященный странам мира. Создан с использованием HTML5, CSS3 и JavaScript."
    },
    image: `${project_1}`,
    tags: ["HTML5", "CSS3", "Vanilla JS"],
    github: "https://github.com/CaspianDiv/Country_App",
    demo: "https://country-app-beryl.vercel.app",
  },
  {
    title: { az: "Samsung Clone", en: "Samsung Clone", ru: "Клон Samsung" },
    description: { 
      az: "Samsung rəsmi saytının klon versiyası 0 - dan vibe coding ilə manual olaraq yazılmışdır.Xoş seyirlər",
      en: "The clone version of the Samsung official website is written manually with vibe coding from version 0. Enjoy watching.",
      ru: "Клонированная версия официального сайта Samsung написана вручную с использованием Vibe Code, начиная с версии 0. Приятного просмотра.."
    },
    image: `${project_2}`,
    tags: ["HTML5", "CSS3", "BootStrap"],
    github: "https://github.com/CaspianDiv/Samsung_Clone",
    demo: "https://samsung-clone-pink.vercel.app",
  },
  {
    title: { az: "Polo 360", en: "Polo 360", ru: "Поло 360" },
    description: { 
      az: "Veb Sayt şablonuna baxaraq 0 - dan yazdığım daha çox CSS3 və HTML5 yönümlü ilk proyektim)",
      en: "My first project, more CSS3 and HTML5 oriented, which I wrote from scratch by looking at the Website template)",
      ru: "Мой первый проект, в большей степени ориентированный на CSS3 и HTML5, который я написал с нуля, изучив шаблон сайта."
    },
    image: `${project_3}`,
    tags: ["HTML5", "CSS3", "Vanilla JS"],
    github: "https://github.com/CaspianDiv/Polo_360",
    demo: "https://polo-360-delta.vercel.app",
  },
  {
    title: { az: "Doc Med", en: "Doc Med", ru: "Doc Med" },
    description: { 
      az: "Tibbi Şablon Layihəsi Bootstrap, HTML və CSS istifadə edərək hazırlanmış uyğun tibbi veb sayt şablon layihəsi. Səhifə həkimlər, klinikalar və tibb müəssisələri üçün nümunəvi dizayn təqdim edir.✔️ Tam uyğun dizayn ✔️ Bootstrap 5 ilə qurulmuşdur ✔️ Çevik şablon strukturu ✔️ Sadə və təmiz kodlaşdırma",
      en: "Medical Template Project Responsive medical website template project developed using Bootstrap, HTML and CSS. The page provides an exemplary design for doctors, clinics and medical facilities.✔️ Fully responsive design ✔️ Built with Bootstrap 5 ✔️ Flexible template structure ✔️ Simple and clean coding",
      ru: "Проект медицинского шаблона. Адаптивный шаблон медицинского веб-сайта, разработанный с использованием Bootstrap, HTML и CSS. Страница представляет собой образцовый дизайн для врачей, клиник и медицинских учреждений. ✔️ Полностью адаптивный дизайн ✔️ Создан на основе Bootstrap 5 ✔️ Гибкая структура шаблона ✔️ Простой и понятный код"
    },
    image: `${project_4}`,
    tags: ["HTML5", "CSS3", "BootStrap"],
    github: "https://github.com/CaspianDiv/Docmed-with-BootStrap-",
    demo: "https://docmed-sand.vercel.app",
  },
  {
    title: { az: "Switch!", en: "Switch!", ru: "Bыключатель!" },
    description: { 
      az: "CSS Flexbox istifadə edərək hazırlanmış sadə, müasir veb səhifə, cavabdeh dizaynla",
      en: "Simple, modern web page made using CSS Flexbox with responsive design",
      ru: "Простая, современная веб-страница, созданная с использованием CSS Flexbox и адаптивного дизайна."
    },
    image: `${project_5}`,
    tags: ["HTML5", "CSS3", "BootStrap"],
    github: "https://github.com/CaspianDiv/Switch-Site-with-flexbox-",
    demo: "https://switch-site-with-flexbox.vercel.app",
  },
  {
    title: { az: "Foody", en: "Foody", ru: "Любитель еды" },
    description: { 
      az: "Salam, bu sayt CSS3, HTML5, BootStrap texnologiyaları ilə qurduğum responsiv saytdı .Sizə xoş baxış arzulayıram.",
      en: "Hello, this is a responsive website that I built with CSS3, HTML5, and BootStrap technologies. I wish you a pleasant browsing.",
      ru: "Здравствуйте! Это адаптивный веб-сайт, созданный мной с использованием технологий CSS3, HTML5 и Bootstrap. Желаю вам приятного просмотра."
    },
    image: `${project_6}`,
    tags: ["HTML5", "CSS3", "BootStrap"],
    github: "https://github.com/CaspianDiv/Foody",
    demo: "https://foody-ochre.vercel.app",
  },
  {
    title: { az: "Landing Vebsayt", en: "Landing Website", ru: "Целевая страница веб-сайта еды" },
    description: { 
      az: "Bu, ekran funksiyalarından istifadə edərək CSS3, HTML5, Figma ilə yaratdığım veb saytdır.",
      en: "This is a website I created with CSS3, HTML5, Figma using display functions.",
      ru: "Здравствуйте! Это адаптивный веб-сайт, созданный мной с использованием технологий CSS3, HTML5 и Bootstrap. Желаю вам приятного просмотра."
    },
    image: `${project_7}`,
    tags: ["HTML5", "CSS3", "BootStrap"],
    github: "https://github.com/CaspianDiv/Landing-Website-with-Figma-",
    demo: "https://landingwebsite-five.vercel.app",
  },
  {
    title: { az: "Imagine Vebsayt", en: "Imagine Website", ru: "Представить веб-сайт" },
    description: { 
      az: "Bu sayt HTML5, CSS3 və Bootstrap texnologiyalarından istifadə edilərək hazırlanmışdır. Responsiv dizayna malik sayt müxtəlif ekran ölçülərində yaxşı görünür. Layihədə Bootstrap şəbəkə sistemi, komponentləri və dinamik xüsusiyyətlərindən istifadə edilmişdir. Saytda menyu, banner, xidmətlər və əlaqə bölmələri mövcuddur.",
      en: "This site was developed using HTML5, CSS3 and Bootstrap technologies. A site with a responsive design looks good on different screen sizes. Bootstrap grid system, components and dynamic features were used in the project. The site has menu, banner, services and contact sections.",
      ru: "Этот сайт разработан с использованием технологий HTML5, CSS3 и Bootstrap. Сайт с адаптивным дизайном хорошо выглядит на экранах разных размеров. В проекте использовались сеточная система Bootstrap, компоненты и динамические функции. Сайт содержит разделы меню, баннер, услуги и контакты."
    },
    image: `${project_8}`,
    tags: ["HTML5", "CSS3", "BootStrap"],
    github: "https://github.com/CaspianDiv/Imagine",
    demo: "https://imagine-two-snowy.vercel.app",
  },
  {
    title: { az: "Fitness Vebsayt", en: "Fitness Website", ru: "Фитнес вебсайт" },
    description: { 
      az: "Salam hər kəsə, gününüz xoş keçsin! Mən bu layihəni HTML5 və CSS3 float  texnologiya ilə hazırlayıram. Ümid edirəm ki, layihələrim xoşunuza gələcək) Xoş izləmələr",
      en: "Hello everyone have a good days! I make it this project HTML5 and CSS3 width float technology I hope you like my projects) Happy watching",
      ru: "Всем привет и хорошего дня! Этот проект создан с использованием HTML5 и CSS3 с применением технологии width float. Надеюсь, вам понравятся мои проекты! Приятного просмотра!"
    },
    image: `${project_9}`,
    tags: ["HTML5", "CSS3"],
    github: "https://github.com/CaspianDiv/Fitness_site_with-float-technology-",
    demo: "https://fitness-site-with-float-technology.vercel.app",
  },
  {
    title: { az: "Tibbi Vebsayt", en: "Medical Website", ru: "Медицинский веб-сайт" },
    description: { 
      az: "Bu sayt HTML5, CSS3 və Bootstrap texnologiyalarından istifadə edilərək hazırlanmışdır. Responsiv dizayna malik sayt müxtəlif ekran ölçülərində yaxşı görünür. Layihədə Bootstrap şəbəkə sistemi, komponentləri və dinamik xüsusiyyətlərindən istifadə edilmişdir. Saytda menyu, banner, xidmətlər və əlaqə bölmələri mövcuddur.",
      en: "This site was developed using HTML5, CSS3 and Bootstrap technologies. A site with a responsive design looks good on different screen sizes. Bootstrap grid system, components and dynamic features were used in the project. The site has menu, banner, services and contact sections.",
      ru: "Этот сайт разработан с использованием технологий HTML5, CSS3 и Bootstrap. Сайт с адаптивным дизайном хорошо выглядит на экранах разных размеров. В проекте использовались сеточная система Bootstrap, компоненты и динамические функции. Сайт содержит разделы меню, баннер, услуги и контакты."
    },
    image: `${project_10}`,
    tags: ["HTML5", "CSS3", "BootStrap"],
    github: "https://github.com/CaspianDiv/Medical_Site-with-BootStrap-",
    demo: "https://medicalsite-five.vercel.app",
  },
  {
    title: { az: "Səfərlər Veb Saytı", en: "Trips Website", ru: "Веб-сайт путешествий" },
    description: { 
      az: "Responsiv veb sayt hazırlanmışdır - Flexbox ilə dizayn - Tamamilə responsiv dizayn yaradılmışdır - Display flex texnologiyasından istifadə edilmişdir - Mobil və masaüstü ekranlar üçün optimallaşdırılmışdır",
      en: "Responsive website developed - design with Flexbox - A fully responsive design was created - Display flex technology was used - Optimized for mobile and desktop screens",
      ru: "Разработан адаптивный веб-сайт — дизайн с использованием Flexbox — создан полностью адаптивный дизайн — использована технология DisplayFlex — оптимизирован для мобильных и настольных экранов."
    },
    image: `${project_11}`,
    tags: ["HTML5", "CSS3"],
    github: "https://github.com/CaspianDiv/Trips",
    demo: "https://trips-nine.vercel.app",
  },
  {
    title: { az: "Sayt.az Kloun", en: "Sayt.az Cloune", ru: "Сайт.az Клоун" },
    description: { 
      az: "Məşhur Azərbaycan saytı.az platformasının klonu. HTML5, CSS3, JavaScript və Tailwind CSS ilə yenidən dizayn edilib. Müasir interfeys və cavabdeh dizayn təklif edir. Tailwind komponentləri və əlavə kitabxanalardan istifadə olunub.",
      en: "Clone of the popular Azerbaijani site.az platform. Redesigned with HTML5, CSS3, JavaScript and Tailwind CSS. Offers a modern interface and responsive design. Tailwind components and additional libraries were used.",
      ru: "Клон популярной азербайджанской платформы site.az. Переработан с использованием HTML5, CSS3, JavaScript и Tailwind CSS. Предлагает современный интерфейс и адаптивный дизайн. Использованы компоненты Tailwind и дополнительные библиотеки."
    },
    image: `${project_12}`,
    tags: ["HTML5", "CSS3" , "Vanilla JS" ,"Tailwind CSS" , "Swiper JS"],
    github: "https://github.com/CaspianDiv/Site.az--cloun-",
    demo: "https://site-az-cloun.vercel.app/index.htm",
  },
  {
    title: { az: "Oxu.az Kloun", en: "Oxu.az Cloune", ru: "Чтение.az Клоун" },
    description: { 
      az: "Bu veb tətbiq istifadəçilərə dünyanın müxtəlif ölkələri haqqında xəbər məlumatlarını oxumağa imkan verir. O, HTML5, CSS3, Vanilla JS və Tailwind CSS istifadə edilərək hazırlanmışdır.",
      en: "This web application allows users to read news information about countries around the world. It is developed using HTML5, CSS3, Vanilla JS, and Tailwind CSS.",
      ru: "Это веб-приложение позволяет пользователям читать новости о странах по всему миру. Оно разработано с использованием HTML5, CSS3, чистого JavaScript и Tailwind CSS."
    },
    image: `${project_13}`,
    tags: ["HTML5", "CSS3" , "Vanilla JS" ,"Tailwind CSS", "Swiper JS"],
    github: "https://github.com/CaspianDiv/oxu.az-cloun_website-/tree/main/img",
    demo: "https://oxu-az-cloun-website.vercel.app",
  },
  {
    title: { az: "Papa John's Kloun", en: "Papa John's Cloune", ru: "Папа Джонс Клоун" },
    description: { 
      az: "Bu layihə rəsmi Papa John's veb saytının klonudur. HTML5, CSS3, Vanilla JS, Tailwind CSS, Flowbite, MambaUI və SweetAlert kitabxanalarından istifadə edilərək yaradılmışdır. Təhsil və təcrübi məqsədlər üçün nəzərdə tutulub.",
      en: "This project is a clone of the official Papa John's website. It was created using HTML5, CSS3, Vanilla JS, Tailwind CSS, Flowbite, MambaUI, and SweetAlert libraries. It is intended for educational and experimental purposes.",
      ru: "Этот проект — клон официального сайта Papa John's. Он создан с использованием HTML5, CSS3, Vanilla JS, Tailwind CSS, Flowbite, MambaUI и библиотек SweetAlert. Предназначен для образовательных и экспериментальных целей."
    },
    image: `${project_14}`,
    tags: ["HTML5", "CSS3" , "Vanilla JS" ,"Tailwind CSS", "Flowbite UI" , "Mamba UI" , "Sweet Alert" , "Swiper JS"],
    github: "https://github.com/CaspianDiv/PapaJohn-s-Cloune-WebSite-",
    demo: "https://papa-john-s-cloune-web-site.vercel.app",
  },
  {
    title: { az: "Shapely Vebsayt Şablon Colorlib", en: "Shapely Web Site template Colorlib", ru: "Папа Джонс Клоун" },
    description: { 
      az: "Hər kəsə salam, gününüz xoş keçsin, bu, CSS3 və HTML5 ilə yaratdığım veb saytdır, float texnologiyasından və ekran funksiyalarından istifadə etdim.",
      en: "Hello everyone, have a nice day, this is a website I created with CSS3 and HTML5, I used float technology and display functions.",
      ru: "Всем привет, хорошего дня! Это сайт, который я создал с помощью CSS3 и HTML5, используя технологию float и функции display."
    },
    image: `${project_15}`,
    tags: ["HTML5", "CSS3" , "Vanilla JS" ,"BootStrap"],
    github: "https://github.com/CaspianDiv/Shapely",
    demo: "https://shapely-vert.vercel.app/index.htm",
  },
  {
    title: { az: "Shapely Vebsayt Şablon Colorlib - React.JS + Vite", en: "Shapely Web Site template Colorlib - React JS + Vite", ru: "Шаблон сайта Shapely от Colorlib - React.JS + Vite" },
    description: { 
      az: "React.JS, Bootstrap, Tailwind CSS və Vite ilə qurulmuş müasir, cavabdeh veb şablon. Bütün cihazlar üçün tam cavabdeh dizayn.",
      en: "Modern responsive web template built with React.JS, Bootstrap, Tailwind CSS and Vite. Fully responsive design for all devices.",
      ru: "Современный адаптивный веб-шаблон, созданный с использованием React.JS, Bootstrap, Tailwind CSS и Vite. Полностью адаптивный дизайн для всех устройств."
    },
    image: `${project_16}`,
    tags: ["HTML5", "CSS3" , "React JS" ,"BootStrap"],
    github: "https://github.com/CaspianDiv/shapely_site_react-with-React-",
    demo: "https://shapely-site-react-with-react.vercel.app",
  },
  {
    title: { az: "Qarlı Veb Sayt", en: "Snowy Web Site", ru: "Снежный веб-сайт" },
    description: { 
      az: "Vanilla JS ilə yaradılmış dinamik qar yağışı animasiyası. Qar dənəciklərini real vaxt rejimində müxtəlif ölçülərdə, sürətlərdə və şəffaflıqla canlandırır. Təmiz HTML5, CSS3 və Vanilla JS ilə hazırlamışam.",
      en: "Dynamic snowfall animation created with Vanilla JS. It animates snowflakes in real time with different sizes, speeds, and transparency. I made it with pure HTML5, CSS3, and Vanilla JS.",
      ru: "Динамическая анимация снегопада, созданная с помощью чистого JavaScript. Она анимирует снежинки в реальном времени с различными размерами, скоростью и прозрачностью. Я создал её с использованием чистого HTML5, CSS3 и чистого JavaScript."
    },
    image: `${project_17}`,
    tags: ["HTML5", "CSS3" , "Vanilla JS"],
    github: "https://github.com/CaspianDiv/Snowy_Site_JS",
    demo: "https://snowy-site-js.vercel.app",
  },
  {
    title: { az: "Libraff Klon Veb Sayt", en: "Libraff Clone Website", ru: "Веб-сайт клоуна Либраффа" },
    description: { 
      az: "HTML5, CSS3, Tailwind CSS və Vanilla JS ilə qurulmuş müasir kitabxana idarəetmə sistemi",
      en: "Modern library management system built with HTML5, CSS3, Tailwind CSS, and Vanilla JS",
      ru: "Современная система управления библиотекой, созданная с использованием HTML5, CSS3, Tailwind CSS и Vanilla JS."
    },
    image: `${project_18}`,
    tags: ["HTML5", "CSS3" , "Tailwind CSS", "Vanilla JS" , "Sweet Alert", "REST API" , "Swiper JS" , "Flowbite UI"],
    github: "https://github.com/CaspianDiv/libraff_Cloune-with-JS-",
    demo: "https://libraff-cloune-with-js.vercel.app/index.htm",
  },
  {
    title: { az: "Dünya ölkələri Veb Tətbiqi React + Vite", en: "World Countries Web App React + Vite", ru: "Веб-приложение для стран мира на React + Vite" },
    description: { 
      az: "Hamıya salam! Bu layihə əvvəllər Vanilla JS istifadə etdiyim və ya ölkə tətbiqi veb saytı yazdığım bir layihədir. Bu dəfə fərqli bir layihədir, çünki mən React JS ilə kod yazıram. Bu layihəni Mamba UI kitabxanası və HTML5, CSS3, React JS istifadə edərək tam olaraq qaranlıq və işıqlı rejimdə tətbiq edirəm. Zövq alın.",
      en: "Hello everyone! This project is a project where I used Vanilla JS before or wrote a country application website. This time it is a different project because I am writing code with React JS. I am implementing this project using Mamba UI library and HTML5, CSS3, React JS in full dark and light mode. Enjoy.",
      ru: "Привет всем! В этом проекте я раньше использовал чистый JavaScript для создания веб-сайтов, посвященных разным странам. На этот раз всё по-другому, потому что я пишу код на React JS. Для реализации проекта я использую библиотеку Mamba UI, HTML5, CSS3 и React JS, включая полностью темный и светлый режимы. Приятного просмотра!"
    },
    image: `${project_19}`,
    tags: ["HTML5", "CSS3" , "Tailwind CSS + Vite", "React JS + Vite"],
    github: "https://github.com/CaspianDiv/country_app-React.js-",
    demo: "https://country-app-react-js.vercel.app",
  },
  {
    title: { az: "Apple kalkulyator virtual", en: "Apple virtual calculator", ru: "виртуальный калькулятор Apple" },
    description: { 
      az: "Vanilla JS ilə yazılmış virtual apple kalkulyatoru təqdim edirəm.Tam dinamikdir bütün funksiyaları işləkdir.",
      en: "I present a virtual apple calculator written in Vanilla JS. It is fully dynamic and all functions are functional.",
      ru: "Представляю виртуальный калькулятор в виде яблока, написанный на чистом JavaScript. Он полностью динамический, и все функции работают."
    },
    image: `${project_20}`,
    tags: ["HTML5", "CSS3" , "Vanilla JS"],
    demo: "https://caclulator-with-js.vercel.app",
  },
  {
    title: { az: "Turbo.az klone veb sayt", en: "Turbo.az clone website", ru: "Веб-сайт клонирования Turbo.az" },
    description: { 
      az: "🚗 Turbo.az Clone | HTML5 • CSS3 • Vanilla JS • TailwindCSS.",
      en: "🚗 Turbo.az Clone | HTML5 • CSS3 • Vanilla JS • TailwindCSS.",
      ru: "🚗 Клон Turbo.az | HTML5 • CSS3 • Чистый JavaScript • TailwindCSS."
    },
    image: `${project_21}`,
    tags: ["HTML5", "CSS3" , "Vanilla JS", "Swiper JS"],
    github: "https://github.com/CaspianDiv/turbo.az-Cloune-Website-",
    demo: "https://turboaz-cloune-website.netlify.app",
  },

];

export const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const projects = projectsData.map(proj => ({
    ...proj,
    title: proj.title[language],
    description: proj.description[language],
  }));

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.projects.title}
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-blue-600 mx-auto rounded-full" />
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {loading ? (
            <>
              {[...Array(4)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </>
          ) : (
            projects.map((project, index) => (
              <HoverCard key={index} containerClassName="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl bg-background border border-border overflow-hidden h-full flex flex-col"
                >
                  {/* Image with preview */}
                  <div className="relative group cursor-pointer overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedImage(project.image)}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-full"
                      >
                        <Eye className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-foreground/70 mb-4 flex-1">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary hover:bg-accent border border-border rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>{t.projects.github}</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{t.projects.demo}</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </HoverCard>
            ))
          )}
        </div>

        {/* Image Preview Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-[90vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};
