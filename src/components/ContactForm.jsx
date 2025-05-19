import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Using the actual EmailJS credentials provided
    emailjs.sendForm(
      'service_7pykk6s', 
      'template_3vwdtkn', // Your provided template ID
      formRef.current, 
      'e74mviVfjhRAu0ZGq' // Your provided public key
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus({
          submitted: true,
          success: true,
          message: language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!'
        });
        setFormData({ name: '', email: '', message: '' });
        setLoading(false);
      }, (error) => {
        console.error('Email sending failed:', error.text);
        setStatus({
          submitted: true,
          success: false,
          message: language === 'ar' ? 'حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.' : 'There was an error sending your message. Please try again.'
        });
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#f5f8ff] dark:bg-[#121629] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">
              {language === 'ar' ? 'تواصل معي 📬' : 'Get in Touch 📬'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {language === 'ar' 
                ? 'مهتم بالعمل معًا؟ تواصل معي.'
                : 'Interested in working together? Reach out to me.'
              }
            </p>
            
            <div className="bg-white dark:bg-[#1e2235] rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                  <a href="mailto:yasser30ds@gmail.com" className="text-blue-600 hover:underline">yasser30ds@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h3>
                  <a href="tel:+966530581899" className="text-green-600 hover:underline">+966 530581899</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-[#1e2235] rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                {language === 'ar' ? 'أرسل رسالة' : 'Send a Message'}
              </h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'ar' ? 'الاسم' : 'Name'} 👤
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-[#2d304d] text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email'} 📧
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-[#2d304d] text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'ar' ? 'الرسالة' : 'Message'} 💬
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-[#2d304d] text-gray-900 dark:text-white"
                ></textarea>
              </div>
              
              {status.submitted && (
                <div className={`p-4 mb-6 rounded-lg ${status.success ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                  {status.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'ar' ? 'جارٍ الإرسال...' : 'Sending...'}
                  </>
                ) : (
                  <>{language === 'ar' ? 'إرسال الرسالة 🚀' : 'Send Message 🚀'}</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
