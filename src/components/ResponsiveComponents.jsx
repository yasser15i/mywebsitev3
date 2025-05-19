import React from 'react';

// مكون عنوان متجاوب
export const ResponsiveHeading = ({ children, className = '' }) => {
  return (
    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${className}`}>
      {children}
    </h2>
  );
};

// مكون فقرة نصية متجاوبة
export const ResponsiveText = ({ children, className = '' }) => {
  return (
    <p className={`text-sm sm:text-base md:text-lg ${className}`}>
      {children}
    </p>
  );
};

// مكون بطاقة متجاوبة
export const ResponsiveCard = ({ title, content, link, linkText, className = '' }) => {
  return (
    <div className={`bg-slate-700 p-4 rounded-lg hover:shadow-lg transition-shadow ${className}`}>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{content}</p>
      {link && (
        <a href={link} className="text-blue-400 hover:text-blue-300">{linkText || 'عرض المزيد'}</a>
      )}
    </div>
  );
};

// مكون قائمة متجاوبة
export const ResponsiveGrid = ({ children, cols = { default: 1, sm: 2, md: 3, lg: 4 }, className = '' }) => {
  const gridCols = `grid-cols-${cols.default} sm:grid-cols-${cols.sm} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg}`;
  
  return (
    <div className={`grid ${gridCols} gap-4 md:gap-6 ${className}`}>
      {children}
    </div>
  );
};

// مكون زر متجاوب
export const ResponsiveButton = ({ onClick, children, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex justify-center py-2 px-3 sm:px-4 border border-transparent shadow-sm text-sm sm:text-base font-medium rounded-md transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

// مكون صورة متجاوبة
export const ResponsiveImage = ({ src, alt, className = '', fallback = 'https://via.placeholder.com/300' }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`w-full h-auto ${className}`}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallback;
      }}
    />
  );
};
