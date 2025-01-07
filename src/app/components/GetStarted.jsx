import React from 'react';

const GetStartedSection = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center justify-center space-y-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Go on... take the plunge
      </h2>
      
      <button 
        className="px-6 py-3 bg-logoOrange-500 hover:bg-logoOrange-600 
                   text-white font-medium rounded-md
                   transition-all duration-300 ease-in-out
                   transform hover:-translate-y-0.5
                   focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
      >
        Get Started
      </button>
    </section>
  );
};

export default GetStartedSection;