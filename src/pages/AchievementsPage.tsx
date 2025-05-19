import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import PageTransition from '../components/UI/PageTransition';
import { Award, Flag, Trophy, Target } from 'lucide-react';

const AchievementsPage: React.FC = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      id: 1,
      title: 'Best Web Developer Award',
      description: 'Recognized as the best web developer in the annual tech conference.',
      year: '2024',
      icon: <Trophy />,
    },
    {
      id: 2,
      title: 'Innovation Excellence',
      description: 'Received the innovation excellence award for creating a groundbreaking mobile application.',
      year: '2023',
      icon: <Flag />,
    },
    {
      id: 3,
      title: 'Top Performer',
      description: 'Acknowledged as the top performer in the development team for three consecutive quarters.',
      year: '2022',
      icon: <Award />,
    },
    {
      id: 4,
      title: 'Project Leadership Award',
      description: 'Led a team to successfully deliver a complex project ahead of schedule.',
      year: '2021',
      icon: <Target />,
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
            {t('achievements.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {t('achievements.description')}
          </motion.p>
        </div>

        {/* Achievements Timeline */}
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative mb-16 last:mb-0"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  {achievement.icon}
                </div>
                <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {achievement.year}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg ml-16">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default AchievementsPage;