import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import AchievementsPage from '../pages/AchievementsPage';
import CertificatesPage from '../pages/CertificatesPage';
import ParticipationsPage from '../pages/ParticipationsPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/participations" element={<ParticipationsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;