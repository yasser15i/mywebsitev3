import React from 'react';

function AboutMe({ language }) {
  return (
    <div className="py-16 bg-[#121629]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-white">
          {language === 'ar' ? 'عني' : 'About Me'}
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side content */}
          <div className="lg:w-1/2">
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              {language === 'ar' 
                ? 'أنا ياسر الشريف، خريج جديد في تكنولوجيا المعلومات، مطور ومصمم شغوف ومهتم بالتقنية مع حب عميق لكل ما يتعلق بالكمبيوتر والابتكار. خلال رحلتي الأكاديمية والمهنية، فزت بفخر بأكثر من 10 هاكاثون وحصلت على أكثر من 4 جوائز في مجالات التكنولوجيا وريادة الأعمال.'
                : 'I\'m Yasser Alshareef, a fresh graduate in Information Technology, a passionate developer, designer, and tech enthusiast with a deep love for everything related to computers and innovation. Throughout my academic and professional journey, I\'ve proudly won more than 10 hackathons and received over 4 awards in the fields of technology and entrepreneurship.'
              }
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              {language === 'ar'
                ? 'أجمع بين الخبرة التقنية القوية والعقلية الإبداعية لتقديم منتجات رقمية عالية الجودة تركز على المستخدم. من واجهات المستخدم الأمامية إلى أنظمة الخلفية والتطبيقات المحمولة، أنا متخصص في إنشاء تجارب ليست وظيفية فحسب — بل ممتعة أيضًا.'
                : 'I combine strong technical expertise with a creative mindset to deliver high-quality, user-focused digital products. From frontend interfaces to backend systems and mobile applications, I specialize in creating experiences that are not only functional — but delightful.'
              }
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {/* Frontend */}
              <div className="bg-[#1e2235] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  {language === 'ar' ? 'الواجهة الأمامية' : 'Frontend'}
                </h3>
                <p className="text-gray-300">
                  React.js, HTML, CSS, JavaScript, TailwindCSS, Bootstrap
                </p>
              </div>
              
              {/* Backend */}
              <div className="bg-[#1e2235] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-400">
                  {language === 'ar' ? 'الخلفية' : 'Backend'}
                </h3>
                <p className="text-gray-300">
                  Node.js, PHP, Firebase
                </p>
              </div>
              
              {/* Design */}
              <div className="bg-[#1e2235] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-teal-400">
                  {language === 'ar' ? 'التصميم' : 'Design'}
                </h3>
                <p className="text-gray-300">
                  Figma, Adobe XD, Photoshop, Illustrator, Canva, Linearity Curve & Move
                </p>
              </div>
              
              {/* Mobile */}
              <div className="bg-[#1e2235] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-amber-400">
                  {language === 'ar' ? 'تطوير الجوال' : 'Mobile'}
                </h3>
                <p className="text-gray-300">
                  React Native, Flutter
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side image */}
          <div className="lg:w-1/2 relative">
            <img 
              src="/coding-image.jpg" 
              alt="Developer coding" 
              className="rounded-lg w-full h-full object-cover shadow-lg"
            />
            <div className="absolute bottom-5 right-5">
              <div className="bg-[#3b82f6] text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold">1+ Years Experience 🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
