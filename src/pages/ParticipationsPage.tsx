import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import PageTransition from '../components/UI/PageTransition';
import { Calendar, MapPin, Users } from 'lucide-react';

const ParticipationsPage: React.FC = () => {
  const { t } = useLanguage();

  const participations = [
    {
      id: 1,
      title: 'Web Summit 2024',
      type: 'Conference',
      date: 'November 2024',
      location: 'Lisbon, Portugal',
      description: 'Speaker at the world\'s leading technology conference, presenting on modern web development practices.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'React Conference 2023',
      type: 'Conference',
      date: 'June 2023',
      location: 'Berlin, Germany',
      description: 'Participated as a panel member discussing the future of React and component architecture.',
      image: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Global Hackathon 2023',
      type: 'Hackathon',
      date: 'March 2023',
      location: 'San Francisco, USA',
      description: 'Led a team of developers to create an innovative solution for healthcare accessibility.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'UX Design Workshop Series',
      type: 'Workshop',
      date: 'January-March 2022',
      location: 'Online',
      description: 'Conducted a series of workshops on user experience design principles and practices.',
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
            {t('participations.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {t('participations.description')}
          </motion.p>
        </div>

        {/* Participations List */}
        <div className="max-w-5xl mx-auto">
          {participations.map((participation, index) => (
            <motion.div
              key={participation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img 
                    src={participation.image} 
                    alt={participation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-medium text-primary-600 bg-primary-100 dark:text-primary-300 dark:bg-primary-900/30 rounded-full">
                      {participation.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{participation.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                      {participation.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                      {participation.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                      Participant
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{participation.description}</p>
                  <a 
                    href={`#participation-${participation.id}`}
                    className="inline-block mt-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default ParticipationsPage;