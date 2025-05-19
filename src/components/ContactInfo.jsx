import React from 'react';

const ContactInfo = ({ email, phone, language }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className={`bg-slate-700/50 p-6 rounded-lg flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''} gap-4`}>
        <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-gray-300 text-sm mb-1">
            {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
          </p>
          <a 
            href={`mailto:${email}`} 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            {email}
          </a>
        </div>
      </div>
      
      <div className={`bg-slate-700/50 p-6 rounded-lg flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''} gap-4`}>
        <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-gray-300 text-sm mb-1">
            {language === 'ar' ? 'رقم الجوال' : 'Phone'}
          </p>
          <a 
            href={`tel:${phone}`} 
            className="text-blue-400 hover:text-blue-300 transition-colors dir-ltr"
            dir="ltr"
          >
            {language === 'ar' ? `+${phone}` : phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
