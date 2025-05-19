import ContactForm from './components/ContactForm';
import LanguageToggle from './components/LanguageToggle';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import ContactInfo from './components/ContactInfo';
import AboutMe from './components/AboutMe';

import { useEffect, useState } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [language, setLanguage] = useState('ar');

  // تعيين اللغة الافتراضية وكشف حجم الشاشة عند تحميل الصفحة
  useEffect(() => {
    document.documentElement.lang = language;
    document.body.style.direction = language === 'ar' ? 'rtl' : 'ltr';

    // إضافة مراقب لتغيير حجم الشاشة
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [language]);

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
  };

  return (
    <>
      <div className={`font-ibm min-h-screen bg-slate-900 text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}>
          {/* القائمة العلوية */}
          <Navbar language={language} onLanguageChange={handleLanguageChange} />

          {/* أزرار تبديل اللغة والمظهر للأجهزة الصغيرة فقط - دائمًا في اليمين */}
          {isMobile && (
              <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4">
                  <ThemeToggle />
                  <LanguageToggle language={language} onToggle={handleLanguageChange} />
              </div>
          )}

          <main className="pt-16">
              {/* إضافة padding للأعلى لمنع التداخل مع الـ navbar */}
              {/* قسم الهيرو */}
              <section className="py-12 md:py-20 bg-gradient-to-br from-slate-800 to-slate-900">
                  <div className="responsive-container">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                          <div className={`text-center md:text-${language === 'ar' ? 'right' : 'left'} md:w-2/3`}>
                              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                  {language === 'ar' ? 'مرحباً، أنا ياسر الشريف' : 'Hello, I\'m Yasser Alshareef'}
                              </h1>
                              <p className="text-xl md:text-2xl mb-4 text-gray-300">
                                  {language === 'ar' ? 'مطور ومصمم' : 'Developer & Designer'}
                              </p>
                              <p className="mb-8 text-gray-400 max-w-lg mx-auto md:mx-0">
                                  {language === 'ar'
                                      ? 'أقوم بإنشاء تجارب رقمية مذهلة تتواصل مع المستخدمين وتحقق أهداف العمل'
                                      : 'I create stunning digital experiences that connect with users and achieve business goals'}
                              </p>
                              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                  <a
                                      href="#contact"
                                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg"
                                  >
                                      {language === 'ar' ? 'تواصل معي' : 'Contact Me'}
                                  </a>
                                  <a
                                      href="#projects"
                                      className="px-6 py-3 bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600/10 rounded-lg transition-colors"
                                  >
                                      {language === 'ar' ? 'استعرض أعمالي' : 'View My Work'}
                                  </a>
                              </div>
                          </div>
                          <div className="w-48 h-48 md:w-64 md:h-64 relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-70 blur-xl"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-500 overflow-hidden">
                                      <img
                                          src="/images/profile.jpg"
                                          alt={language === 'ar' ? "ياسر الشريف" : "Yasser Alshareef"}
                                          className="w-full h-full object-cover"
                                          onError={(e) => {
                                              e.target.onerror = null;
                                              e.target.src = 'https://via.placeholder.com/300?text=Profile+Photo';
                                          } } />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              {/* قسم نبذة عني */}
              <section id="about" className="py-16 bg-slate-900">
                  <div className="responsive-container">
                      <div className="text-center mb-12">
                          <h2 className="text-3xl font-bold mb-4">
                              {language === 'ar' ? 'نبذة عني' : 'About Me'}
                          </h2>
                          <p className="text-gray-400 max-w-2xl mx-auto">
                              {language === 'ar'
                                  ? 'تعرف على مسيرتي، مهاراتي، وشغفي بالتكنولوجيا'
                                  : 'Learn about my journey, skills, and passion for technology'}
                          </p>
                      </div>

                      <AboutMe language={language} />

                      {/* إضافة قسم التقنيات والأدوات */}
                      <div className="mt-16">
                          <div className="text-center mb-8">
                              <h3 className="text-2xl font-bold mb-3">
                                  {language === 'ar' ? 'المهارات والتقنيات' : 'Skills & Technologies'}
                              </h3>
                              <p className="text-gray-400 max-w-2xl mx-auto">
                                  {language === 'ar'
                                      ? 'التقنيات والأدوات التي أستخدمها لتحويل الأفكار إلى منتجات رقمية متميزة'
                                      : 'The technologies and tools I use to transform ideas into outstanding digital products'}
                              </p>
                          </div>

                          <div className="bg-slate-800/50 rounded-xl p-8">
                              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center">
                                  {/* HTML5 */}
                                  <div className="flex flex-col items-center">
                                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                                          <img
                                              src="/images/tech/html5.svg"
                                              alt="HTML5"
                                              className="max-w-full max-h-full"
                                              onError={(e) => {
                                                  e.target.onerror = null;
                                                  e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg';
                                              }} />
                                      </div>
                                      <span className="text-sm text-center">HTML5</span>
                                  </div>

                                  {/* CSS3 */}
                                  <div className="flex flex-col items-center">
                                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                                          <img
                                              src="/images/tech/css3.svg"
                                              alt="CSS3"
                                              className="max-w-full max-h-full"
                                              onError={(e) => {
                                                  e.target.onerror = null;
                                                  e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg';
                                              }} />
                                      </div>
                                      <span className="text-sm text-center">CSS3</span>
                                  </div>

                                  {/* JavaScript */}
                                  <div className="flex flex-col items-center">
                                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                                          <img
                                              src="/images/tech/javascript.svg"
                                              alt="JavaScript"
                                              className="max-w-full max-h-full"
                                              onError={(e) => {
                                                  e.target.onerror = null;
                                                  e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
                                              }} />
                                      </div>
                                      <span className="text-sm text-center">JavaScript</span>
                                  </div>

                                  {/* React */}
                                  <div className="flex flex-col items-center">
                                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                                          <img
                                              src="/images/tech/react.svg"
                                              alt="React"
                                              className="max-w-full max-h-full"
                                              onError={(e) => {
                                                  e.target.onerror = null;
                                                  e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
                                              }} />
                                      </div>
                                      <span className="text-sm text-center">React</span>
                                  </div>

                                  {/* TailwindCSS */}
                                  <div className="flex flex-col items-center">
                                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                                          <img
                                              src="/images/tech/tailwindcss.svg"
                                              alt="TailwindCSS"
                                              className="max-w-full max-h-full"
                                              onError={(e) => {
                                                  e.target.onerror = null;
                                                  e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg';
                                              }} />
                                      </div>
                                      <span className="text-sm text-center">Tailwind</span>
                                  </div>

                                  {/* Bootstrap */}
                                  <div className="flex flex-col items-center">
                                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                                          <img
                                              src="/images/tech/bootstrap.svg"
                                              alt="Bootstrap"
                                              className="max-w-full max-h-full"
                                              onError={(e) => {
                                                  e.target.onerror = null;
                                                  e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg';
                                              }} />
                                      </div>
                                      <span className="text-sm text-center">Bootstrap</span>
                                  </div>

                                  {/* Firebase */}
                                  <div className="flex flex-col items-center">
                                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                                          <img
                                              src="/images/tech/firebase.svg"
                                              alt="Firebase"
                                              className="max-w-full max-h-full"
                                              onError={(e) => {
                                                  e.target.onerror = null;
                                                  e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg';
                                              }} />
                                      </div>
                                      <span className="text-sm text-center">Firebase</span>
                                  </div>

                                  {/* Figma */}
                                  <div className="flex flex-col items-center">
                                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                                          <img
                                              src="/images/tech/figma.svg"
                                              alt="Figma"
                                              className="max-w-full max-h-full"
                                              onError={(e) => {
                                                  e.target.onerror = null;
                                                  e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg';
                                              }} />
                                      </div>
                                      <span className="text-sm text-center">Figma</span>
                                  </div>

                                  {/* Flutter */}
                                  <div className="flex flex-col items-center">
                                      <div className="w-16 h-16 flex items-center justify-center mb-2">
                                          <img
                                              src="/images/tech/flutter.svg"
                                              alt="Flutter"
                                              className="max-w-full max-h-full"
                                              onError={(e) => {
                                                  e.target.onerror = null;
                                                  e.target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg';
                                              }} />
                                      </div>
                                      <span className="text-sm text-center">Flutter</span>
                                  </div>
                              </div>
                          </div>

                          {/* قسم الإحصائيات */}
                          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                                  <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                                  <div className="text-sm text-gray-300">
                                      {language === 'ar' ? 'هاكاثون فائز' : 'Hackathon Wins'}
                                  </div>
                              </div>

                              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                                  <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                                  <div className="text-sm text-gray-300">
                                      {language === 'ar' ? 'مشروع منجز' : 'Projects Completed'}
                                  </div>
                              </div>

                              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                                  <div className="text-3xl font-bold text-teal-400 mb-2">4+</div>
                                  <div className="text-sm text-gray-300">
                                      {language === 'ar' ? 'جوائز تقنية' : 'Tech Awards'}
                                  </div>
                              </div>

                              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                                  <div className="text-3xl font-bold text-amber-400 mb-2">1</div>
                                  <div className="text-sm text-gray-300">
                                      {language === 'ar' ? 'شركة ناشئة' : 'Tech Startup'}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              {/* قسم المشاريع */}
              <section id="projects" className="py-16 bg-slate-800">
                  <div className="responsive-container">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4">
                          {language === 'ar' ? 'مشاريعي' : 'My Projects'}
                      </h2>
                      <p className="text-gray-400 max-w-2xl mx-auto">
                          {language === 'ar'
                              ? 'مجموعة من المشاريع المتنوعة التي تعرض مهاراتي في تطوير الويب والتصميم'
                              : 'A collection of diverse projects showcasing my skills in web development and design'}
                      </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[1, 2, 3].map((project) => (
                          <div key={project} className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-xl transition-shadow group">
                              <div className="h-48 bg-slate-600 overflow-hidden">
                                  <img
                                      src={`/images/project-${project}.jpg`}
                                      alt={language === 'ar' ? `مشروع ${project}` : `Project ${project}`}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                      onError={(e) => {
                                          e.target.onerror = null;
                                          e.target.src = 'https://via.placeholder.com/600x400?text=Project+Image';
                                      } } />
                              </div>
                              <div className="p-6">
                                  <h3 className="text-xl font-bold mb-2">
                                      {language === 'ar' ? `مشروع ${project}` : `Project ${project}`}
                                  </h3>
                                  <p className="text-gray-300 mb-4">
                                      {language === 'ar'
                                          ? 'وصف مختصر للمشروع. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.'
                                          : 'A short description of the project. This is an example text that can be replaced.'}
                                  </p>
                                  <div className="flex flex-wrap gap-2 mb-4">
                                      <span className="px-3 py-1 bg-blue-600/30 text-blue-400 rounded-full text-xs">React</span>
                                      <span className="px-3 py-1 bg-blue-600/30 text-blue-400 rounded-full text-xs">Tailwind</span>
                                      <span className="px-3 py-1 bg-blue-600/30 text-blue-400 rounded-full text-xs">Node.js</span>
                                  </div>
                                  <a
                                      href="#"
                                      className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
                                  >
                                      {language === 'ar' ? 'عرض المشروع →' : 'View Project →'}
                                  </a>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
          {/* قسم المؤهلات */}
          <section id="certificates" className="py-16 bg-slate-900">
              <div className="responsive-container">
                  <h2 className="text-3xl font-bold mb-12 text-center">
                      {language === 'ar' ? 'شهاداتي ومؤهلاتي' : 'My Certificates & Qualifications'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {[1, 2, 3, 4].map((cert) => (
                          <div
                              key={cert}
                              className={`bg-slate-800 p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-shadow flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} gap-4 items-start`}
                          >
                              <div className={`mt-1 ${language === 'ar' ? 'ml-4' : 'mr-4'}`}>
                                  <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                      </svg>
                                  </div>
                              </div>
                              <div>
                                  <h3 className="text-xl font-bold mb-2">
                                      {language === 'ar' ? `شهادة ${cert}` : `Certificate ${cert}`}
                                  </h3>
                                  <p className="text-gray-300 mb-1">
                                      {language === 'ar' ? 'الجهة المانحة' : 'Issuing Organization'}
                                  </p>
                                  <p className="text-gray-400 text-sm mb-2">
                                      {language === 'ar' ? 'يناير 2023' : 'January 2023'}
                                  </p>
                                  <a href="#" className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center">
                                      {language === 'ar' ? 'عرض الشهادة' : 'View Certificate'}
                                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${language === 'ar' ? 'mr-1 rotate-180' : 'ml-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                      </svg>
                                  </a>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
          {/* قسم نموذج الاتصال */}
          <section id="contact" className="py-16 bg-slate-800">
              <div className="responsive-container">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4">
                          {language === 'ar' ? 'تواصل معي' : 'Contact Me'}
                      </h2>
                      <p className="text-gray-400 max-w-2xl mx-auto">
                          {language === 'ar'
                              ? 'هل لديك مشروع جديد أو تحتاج إلى مساعدة؟ أنا متاح للعمل الحر والمشاريع كاملة الدوام.'
                              : 'Have a new project or need help? I\'m available for freelancing and full-time projects.'}
                      </p>
                  </div>

                  {/* إضافة معلومات التواصل */}
                  <div className="max-w-3xl mx-auto mb-8">
                      <ContactInfo
                          email="yasser30ds@gmail.com"
                          phone="0530581899"
                          language={language} />
                  </div>

                  <div className="max-w-3xl mx-auto">
                      <ContactForm language={language} />
                  </div>
              </div>
          </section>
      </main>
        {/* قسم التذييل */}  
      <footer className="bg-slate-900 py-8 border-t border-slate-800">
              <div className="responsive-container">
                  <div className={`flex flex-col md:flex-row gap-6 justify-between items-center ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}>
                      <div>
                          <h2 className="text-xl font-bold mb-2">
                              {language === 'ar' ? 'ياسر الشريف' : 'Yasser Alshareef'}
                          </h2>
                          <p className="text-gray-400">
                              {language === 'ar' ? 'مطور ومصمم' : 'Developer & Designer'}
                          </p>
                      </div>
                      <div className="flex flex-wrap gap-6 justify-center">
                          <a href="#" className="text-gray-400 hover:text-white transition-colors">
                              {language === 'ar' ? 'الرئيسية' : 'Home'}
                          </a>
                          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                              {language === 'ar' ? 'نبذة عني' : 'About Me'}
                          </a>
                          <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                              {language === 'ar' ? 'المشاريع' : 'Projects'}
                          </a>
                          <a href="#certificates" className="text-gray-400 hover:text-white transition-colors">
                              {language === 'ar' ? 'الشهادات' : 'Certificates'}
                          </a>
                          <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                              {language === 'ar' ? 'تواصل معي' : 'Contact Me'}
                          </a>
                      </div>
                      <div className="flex space-x-4">
                          <a href="#" className="text-gray-400 hover:text-white transition-colors">
                              <span className="sr-only">GitHub</span>
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                          </a>
                          <a href="#" className="text-gray-400 hover:text-white transition-colors">
                              <span className="sr-only">LinkedIn</span>
                              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                              </svg>
                          </a>
                      </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                      <p className="text-gray-500">
                          &copy; {new Date().getFullYear()} {language === 'ar' ? 'ياسر الشريف. جميع الحقوق محفوظة' : 'Yasser Alshareef. All rights reserved'}
                      </p>
                      {/* Development info - can be removed in production */}
                      <div className="mt-4 p-4 bg-slate-800 rounded-lg text-sm">
                          <h3 className="font-bold text-blue-400 mb-2">
                              {language === 'ar' ? 'تشغيل المشروع على سيرفر محلي' : 'Run on Local Development Server'}
                          </h3>
                          <div className="text-gray-300 text-left rtl:text-right">
                              <p className="mb-2">1. {language === 'ar' ? 'افتح الترمينال في مجلد المشروع' : 'Open terminal in project folder'}</p>
                              <code className="block bg-slate-900 p-2 rounded mb-2">cd /Users/yasseralshareef/Downloads/profilio_2025_v2-main</code>
                              <p className="mb-2">2. {language === 'ar' ? 'تثبيت التبعيات (إذا لم تكن مثبتة مسبقاً)' : 'Install dependencies (if not already installed)'}</p>
                              <code className="block bg-slate-900 p-2 rounded mb-2">npm install</code>
                              <p className="mb-2">3. {language === 'ar' ? 'تشغيل سيرفر التطوير المحلي' : 'Start local development server'}</p>
                              <code className="block bg-slate-900 p-2 rounded">npm run dev</code>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
    </>
  );
}

export default App;
