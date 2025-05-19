import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true); // افتراضيًا وضع الظلام مفعل
  
  useEffect(() => {
    // تحقق من تفضيل المستخدم المحفوظ
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // استخدم تفضيلات النظام كافتراضي
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(userPrefersDark);
      document.documentElement.classList.toggle('dark', userPrefersDark);
    }
  }, []);
  
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };
  
  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full bg-slate-700 text-slate-200 hover:text-white hover:bg-slate-600 transition-colors control-button mobile-fixed-right"
      aria-label="تبديل المظهر"
      style={{ right: '1rem', left: 'auto' }} /* تحديد الموضع في اليمين بشكل مباشر */
    >
      {isDarkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;
