"use client";
import React from 'react';

const CinemaExperience = () => {

  // Create multiple rows of audience members
  const AudienceRow = ({ rowIndex }) => {
    const baseWidth = 100 - rowIndex * 8; // Each row gets wider towards the back
    const numberOfPeople = 8 + rowIndex * 2; // More people in back rows
    
    return (
      <div 
        className="flex justify-center absolute w-full" 
        style={{ 
          bottom: `${rowIndex * 24}px`,
          transform: `scale(${1 - rowIndex * 0.1})` // People get slightly smaller in back rows
        }}
      >
        <div className={`flex justify-between w-${baseWidth}%`}>
          {[...Array(numberOfPeople)].map((_, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-3 h-4 rounded-full bg-black opacity-40" /> {/* Head */}
              <div className="w-5 h-3 rounded-t-sm bg-black opacity-40" /> {/* Shoulders */}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-full max-w-6xl aspect-[2.35/1]"> {/* Cinema scope aspect ratio */}
        {/* Cinema screen with perspective */}
        <div className="relative w-full h-full transform perspective-1000 preserve-3d">
          {/* Screen border */}
          <div className="absolute inset-0 border-8 border-lightGrey rounded-lg transform -translate-z-2" />
          
          {/* Main screen content */}
          <div className="absolute inset-4 bg-black rounded">
            {/* Video placeholder - replace with your video component */}
            <div className="w-full h-full flex items-center justify-center text-white">
              Video Content Here
            </div>

            {/* Screen glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-logoOrange/20 to-logoYellow/20 mix-blend-overlay" />
          </div>

          {/* Side light effects */}
          <div className="absolute -left-8 top-0 h-full w-32 bg-gradient-to-r from-offWhite/20 to-transparent animate-pulse" />
          <div className="absolute -right-8 top-0 h-full w-32 bg-gradient-to-l from-offWhite/20 to-transparent animate-pulse" />
        </div>

        {/* Theatre floor with gradient */}
        <div className="absolute -bottom-48 -left-24 -right-24 h-64 bg-gradient-to-t from-softBlack to-mediumGrey/20 transform perspective-1000 rotateX-60" />

        {/* Audience container */}
        <div className="absolute -bottom-32 left-0 right-0 h-64 overflow-hidden">
          {[...Array(5)].map((_, idx) => (
            <AudienceRow key={idx} rowIndex={idx} />
          ))}
        </div>

        {/* Screen reflection on floor */}
        <div className="absolute -bottom-48 left-0 right-0 h-48 bg-gradient-to-b from-white/5 to-transparent transform-gpu perspective-1000 rotateX-60 blur-sm" />
      </div>
    </div>
  );
};

export default CinemaExperience;