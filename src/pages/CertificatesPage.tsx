import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import PageTransition from '../components/UI/PageTransition';
import { BookOpen, ArrowUpRight } from 'lucide-react';

const CertificatesPage: React.FC = () => {
  const { t } = useLanguage();

  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'August 2024',
      description: 'Professional certification for designing distributed systems on AWS.',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: 'May 2023',
      description: 'Certification for building scalable applications on Google Cloud Platform.',
      image: 'https://images.pexels.com/photos/1036841/pexels-photo-1036841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: 'January 2023',
      description: 'Certification for developing solutions on Microsoft Azure.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'React.js Advanced Certification',
      issuer: 'React Training',
      date: 'July 2022',
      description: 'Advanced certification for building complex applications with React.js.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            {t('certificates.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {t('certificates.description')}
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{certificate.issuer}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{certificate.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{certificate.date}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{certificate.description}</p>
                <a 
                  href={`#certificate-${certificate.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                >
                  View Certificate
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default CertificatesPage;