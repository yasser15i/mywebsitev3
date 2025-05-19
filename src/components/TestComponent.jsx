import React from 'react';

const TestComponent = () => {
  return (
    <div className="bg-red-500 p-4 m-4 rounded-lg">
      <h3 className="text-white">إذا كنت ترى هذا المربع الأحمر، فهذا يعني أن خادم التطوير يعمل بشكل صحيح!</h3>
      <p className="text-white">الوقت الحالي: {new Date().toLocaleTimeString()}</p>
    </div>
  );
};

export default TestComponent;
