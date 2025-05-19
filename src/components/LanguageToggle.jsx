import { useState, useEffect } from 'react';

function LanguageToggle({ language = 'ar', onToggle }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    // كشف حجم الشاشة عند تحميل المكون
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    onToggle(newLang);
  };
  
  return (
    <button 
      onClick={toggleLanguage} 
      className={`
        ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-2 text-base'}
        bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center gap-2 control-button mobile-fixed-right
      `}
      aria-label="تبديل اللغة"
      style={{ right: '1rem', left: 'auto' }} /* تحديد الموضع في اليمين بشكل مباشر */
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span>{language === 'ar' ? 'English' : 'العربية'}</span>
    </button>
  );
}

export default LanguageToggle;
