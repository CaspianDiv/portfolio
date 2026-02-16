import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { CopyToClipboard } from "./CopyToClipboard";
import { HoverCard } from "./HoverCard";
import { useLanguage } from "../utils/LanguageContext";

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/CaspianDiv",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/in/shahin-jafarzadeh",
    color: "hover:text-blue-600",
  },
];

export const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.labels.email,
      value: "jafarzadehsahin@gmail.com",
      link: "https://jafarzadehsahin@gmail.com",
    },
    {
      icon: Phone,
      label: t.contact.labels.phone,
      value: "+994 XX XXX XX XX",
      link: "https://wa.me/0503878700",
    },
    {
      icon: MapPin,
      label: t.contact.labels.location,
      value: t.contact.labels.locationValue,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t.contact.title}
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-blue-600 mx-auto rounded-full" />
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">{t.contact.info}</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground/80">{item.label}</span>
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="ml-13 text-foreground hover:text-primary transition-colors"
                      >
                        <CopyToClipboard text={item.value} className="w-full" />
                      </a>
                    ) : (
                      <div className="ml-13">
                        <CopyToClipboard text={item.value} className="w-full" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4 text-foreground/80">{t.contact.social}</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-secondary border border-border rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <HoverCard>
                <form className="space-y-4 p-8 rounded-2xl bg-background border border-border">
                  <h3 className="text-2xl font-bold mb-6">{t.contact.form.title}</h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.contact.form.name}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t.contact.form.email}</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t.contact.form.message}</label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder={t.contact.form.messagePlaceholder}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Send className="w-5 h-5" />
                    {t.contact.form.send}
                  </motion.button>
                </form>
              </HoverCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
