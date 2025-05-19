import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t, dir } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.achievements'), path: '/achievements' },
    { name: t('nav.certificates'), path: '/certificates' },
    { name: t('nav.participations'), path: '/participations' },
  ];

  const navClasses = scrolled
    ? 'fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md'
    : 'absolute top-0 left-0 right-0 bg-transparent';

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20 
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: dir === 'rtl' ? '100%' : '-100%',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <motion.header
      className={`${navClasses} z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 lg:px-12 py-4`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold tracking-tight relative group"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {t('siteName')}
            </span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center space-x-6 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={closeMenu}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all transform hover:scale-105"
                onClick={toggleLanguage}
                aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              >
                <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all transform hover:scale-105"
                onClick={toggleTheme}
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-700" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-300" />
                )}
              </button>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all transform hover:scale-105"
              >
                {t('nav.downloadCV')}
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all transform hover:scale-105"
              onClick={toggleLanguage}
              aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all transform hover:scale-105"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-50 lg:hidden"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={closeMenu} />
                <motion.nav
                  className={`absolute top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} bottom-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl flex flex-col`}
                  initial={{ x: dir === 'rtl' ? '-100%' : '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: dir === 'rtl' ? '-100%' : '100%' }}
                  transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                >
                  <div className="flex justify-end p-4">
                    <button
                      onClick={closeMenu}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="flex flex-col p-6 space-y-6">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          to={link.path}
                          className={`text-xl font-medium ${
                            location.pathname === link.path
                              ? 'text-primary-600 dark:text-primary-400'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                          onClick={closeMenu}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                    >
                      <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all transform hover:scale-105"
                        onClick={closeMenu}
                      >
                        {t('nav.downloadCV')}
                      </a>
                    </motion.div>
                  </div>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;