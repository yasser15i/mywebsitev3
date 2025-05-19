import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageTransition from '../components/UI/PageTransition';

const HomePage: React.FC = () => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const projectItems = [
    {
      id: 1,
      title: 'Project One',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Project Two',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Project Three',
      category: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const emojis = ['👨‍💻', '🎨', '📱', '⚡️', '🚀'];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-secondary-100 dark:from-primary-950 dark:via-gray-900 dark:to-secondary-950 animate-gradient-xy opacity-50" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 relative"
            >
              <img
                src="https://avatars.githubusercontent.com/u/147551314?v=4"
                alt="Yasser Memoji"
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="absolute -right-2 -bottom-2 text-4xl"
              >
                👋
              </motion.div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-3"
            >
              {t('hero.greeting')}
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 tracking-tight"
            >
              {t('siteName')}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center gap-4 mb-6"
            >
              {emojis.map((emoji, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.6 + index * 0.1
                  }}
                  className="text-3xl"
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-8"
            >
              {t('hero.tagline')}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              {t('hero.description')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button 
                onClick={() => navigate('/projects')}
                className={`group px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all transform hover:scale-105 flex items-center gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
              >
                {t('hero.cta')}
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${dir === 'rtl' ? '-scale-x-100' : ''}`} />
              </button>
              <button 
                onClick={scrollToAbout}
                className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium shadow-sm transition-all transform hover:scale-105"
              >
                {t('about.title')}
              </button>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <button 
            onClick={scrollToAbout}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all transform hover:scale-110"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t('about.title')}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Frontend</h3>
                  <p className="text-gray-600 dark:text-gray-400">React js, HTML, CSS, JavaScript, Angular, TailwindCSS, Bootstrap</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Backend</h3>
                  <p className="text-gray-600 dark:text-gray-400">Node.js, Express, PHP, Firebase </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Design</h3>
                  <p className="text-gray-600 dark:text-gray-400">Figma, Adobe XD, Photoshop, Illustrator, Canva, Linearity Curve & Move </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Mobile</h3>
                  <p className="text-gray-600 dark:text-gray-400">React Native, Flutter </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="aspect-square rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform"
              >
                <img 
                  src="https://pbs.twimg.com/media/Gp-zttRXcAE3MlE?format=jpg&name=large" 
                  alt="Yasser ALshareef"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-5 -right-5 bg-primary-600 text-white p-4 rounded-lg shadow-lg transform hover:scale-110 transition-transform"
              >
                <p className="text-sm font-medium">1+ Years Experience 🚀</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              {t('projects.title')} ✨
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              {t('projects.description')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectItems.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-primary-600 bg-primary-100 dark:text-primary-300 dark:bg-primary-900/30 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <a 
                    href={`/projects#${project.id}`}
                    className={`mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                  >
                    {t('projects.viewAll')}
                    {dir === 'rtl' ? <ArrowRight className="mx-2 -scale-x-100" size={16} /> : <ArrowRight className="mx-2" size={16} />}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => navigate('/projects')}
              className="px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all transform hover:scale-105"
            >
              {t('projects.viewAll')} 🎯
            </motion.button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                {t('contact.title')} 📬
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              >
                {t('contact.description')}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                    <a href="mailto:contact@yasseralshareef.com" className="text-primary-600 dark:text-primary-400">yasser30ds@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                    <a href="tel:+966123456789" className="text-primary-600 dark:text-primary-400">+966530581899</a>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.nameLabel')} 👤
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.emailLabel')} ✉️
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.messageLabel')} 💭
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all transform hover:scale-105"
                >
                  {t('contact.submitButton')} 🚀
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-200 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary-200 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-40"></div>
      </section>
    </PageTransition>
  );
};

export default HomePage;