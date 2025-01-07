import React from 'react';

const GetStartedSection = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center justify-center space-y-6 mt-28 mb-28">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Go on... take the plunge
      </h2>
      
      <button 
        className="px-4 py-2 text-white rounded-md bg-logoOrange
                   transition-all duration-300 ease-in-out
                   transform hover:-translate-y-0.5
                   focus:outline-none focus:ring-2 focus:ring-logoOrange focus:ring-opacity-50"
      >
        Get Started
      </button>
    </section>
  );
};

export default GetStartedSection;