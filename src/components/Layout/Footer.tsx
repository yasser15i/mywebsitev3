import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: <Twitter size={20} />, url: 'https://twitter.com/yas15i', name: 'Twitter' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com', name: 'Instagram' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/yasser-alshareef/', name: 'LinkedIn' },
    { icon: <Github size={20} />, url: 'https://github.com/yasser15i', name: 'GitHub' },
  ];

  return (
    <footer className="py-8 px-6 md:px-12 bg-gray-100 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {t('siteName')}
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          {t('footer.copyright')}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;