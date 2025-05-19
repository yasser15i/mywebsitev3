import { useState, useEffect } from 'react';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ language, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // القائمة بكلا اللغتين
  const menuItems = [
    { 
      id: 'home', 
      titleAr: 'الرئيسية', 
      titleEn: 'Home',
      href: '#'
    },
    { 
      id: 'about', 
      titleAr: 'نبذة عني', 
      titleEn: 'About Me',
      href: '#about'
    },
    { 
      id: 'projects', 
      titleAr: 'المشاريع', 
      titleEn: 'Projects',
      href: '#projects'
    },
    { 
      id: 'certificates', 
      titleAr: 'الشهادات', 
      titleEn: 'Certificates',
      href: '#certificates'
    },
    { 
      id: 'achievements', 
      titleAr: 'الإنجازات', 
      titleEn: 'Achievements',
      href: '#achievements'
    },
    { 
      id: 'contact', 
      titleAr: 'تواصل معي', 
      titleEn: 'Contact',
      href: '#contact'
    }
  ];

  // مراقبة التمرير لتغيير مظهر الـ navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-800/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="responsive-container relative">
        {/* أزرار التحكم (اللغة والمظهر) - دائمًا في اليمين بغض النظر عن اللغة */}
        <div className="absolute right-0 top-0 h-16 hidden md:flex items-center gap-3 z-10">
          <ThemeToggle />
          <LanguageToggle language={language} onToggle={onLanguageChange} />
        </div>

        <div className="flex items-center justify-between h-16">
          {/* لوجو - جعل ترتيبه مناسبًا */}
          <div className={`flex-shrink-0 ${language === 'ar' ? 'order-2' : 'order-1'}`}>
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {language === 'ar' ? 'ياسر الشريف' : 'Yasser Alshareef'}
              </span>
            </a>
          </div>

          {/* زر القائمة للجوال */}
          <div className={`md:hidden ${language === 'ar' ? 'order-1' : 'order-3'}`}>
            <button 
              type="button" 
              className="text-gray-400 hover:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">{language === 'ar' ? 'فتح القائمة' : 'Open menu'}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* قائمة الدسكتوب - في المنتصف */}
          <div className="hidden md:block flex-grow order-2 mx-auto px-8">
            <div className={`flex items-center justify-center space-x-4 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              {menuItems.map(item => (
                <a
                  key={item.id}
                  href={item.href}
                  className="px-3 py-2 text-gray-300 hover:text-white hover:bg-blue-600/20 rounded-lg transition-colors"
                >
                  {language === 'ar' ? item.titleAr : item.titleEn}
                </a>
              ))}
            </div>
          </div>

          {/* عنصر وهمي للحفاظ على التوازن وإتاحة مساحة لأزرار التحكم */}
          <div className="hidden md:block order-3 flex-shrink-0 w-28"></div>
        </div>
      </div>

      {/* قائمة الجوال */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-slate-800 shadow-xl`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-blue-600/20 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === 'ar' ? item.titleAr : item.titleEn}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
