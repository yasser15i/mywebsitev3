import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout/Layout';
import AppRoutes from './routes/AppRoutes';
import './i18n/i18n';
import CustomCursor from './components/UI/CustomCursor';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider>
          <div className="app font-sans transition-colors duration-300">
            <CustomCursor />
            <Layout>
              <AnimatePresence mode="wait">
                <AppRoutes />
              </AnimatePresence>
            </Layout>
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;