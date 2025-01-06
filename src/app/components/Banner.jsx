"use client";
import '../globals.css';
import { useState, useEffect } from 'react';

export default function Banner() {
  
  const [bulbs, setBulbs] = useState([]);

  useEffect(() => {
    const generateBulbs = (count = 20, size = 40) => {
      const bulbs = [];
      const rows = 4; 
      const cols = 5; 
    
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (row === col && !(row === 0 && col === 0)) {
            continue;
          }
    
          const top = row * (100 / rows) + Math.random() * 5; 
          const left = col * (100 / cols) + Math.random() * 5; 
          bulbs.push({
            top: top,    
            left: left,  
            size: size,  
            delay: Math.random() * 2 
          });
        }
      }
    
      return bulbs.sort(() => Math.random() - 0.5);
    };
    
    const bulbs = generateBulbs(20); 
    setBulbs(bulbs);
    
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {bulbs.map((bulb, i) => (
            <div
              key={`bulb-${i}`}
              className="absolute animate-float"
              style={{
                top: `${bulb.top}vh`,
                left: `${bulb.left}vw`,
                animationDelay: `${bulb.delay}s`,
              }}
            >
              <svg
                width={bulb.size}
                height={bulb.size}
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id={`gradient-bulb-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF8A00" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                  <linearGradient id={`gradient-rays-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FF4500" />
                  </linearGradient>
                  <linearGradient id={`gradient-screw-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C0C0C0" />
                    <stop offset="100%" stopColor="#808080" />
                  </linearGradient>
                </defs>
                <g>
                  <line
                    x1="32"
                    y1="4"
                    x2="32"
                    y2="12"
                    stroke={`url(#gradient-rays-${i})`}
                    strokeWidth="2"
                  />
                  <line
                    x1="12"
                    y1="12"
                    x2="16"
                    y2="16"
                    stroke={`url(#gradient-rays-${i})`}
                    strokeWidth="2"
                  />
                  <line
                    x1="4"
                    y1="32"
                    x2="12"
                    y2="32"
                    stroke={`url(#gradient-rays-${i})`}
                    strokeWidth="2"
                  />
                  <line
                    x1="12"
                    y1="52"
                    x2="16"
                    y2="48"
                    stroke={`url(#gradient-rays-${i})`}
                    strokeWidth="2"
                  />
                  <line
                    x1="32"
                    y1="60"
                    x2="32"
                    y2="52"
                    stroke={`url(#gradient-rays-${i})`}
                    strokeWidth="2"
                  />
                  <line
                    x1="52"
                    y1="52"
                    x2="48"
                    y2="48"
                    stroke={`url(#gradient-rays-${i})`}
                    strokeWidth="2"
                  />
                  <line
                    x1="60"
                    y1="32"
                    x2="52"
                    y2="32"
                    stroke={`url(#gradient-rays-${i})`}
                    strokeWidth="2"
                  />
                  <line
                    x1="52"
                    y1="12"
                    x2="48"
                    y2="16"
                    stroke={`url(#gradient-rays-${i})`}
                    strokeWidth="2"
                  />
                </g>
                <path
                  d="M32,12 C22,12 14,20 14,30 C14,36 18,42 22,45 L22,48 C22,50 24,52 26,52 L38,52 C40,52 42,50 42,48 L42,45 C46,42 50,36 50,30 C50,20 42,12 32,12 Z"
                  fill={`url(#gradient-bulb-${i})`}
                />
                <g>
                  <line
                    x1="26"
                    y1="52"
                    x2="26"
                    y2="58"
                    stroke={`url(#gradient-screw-${i})`}
                    strokeWidth="2"
                  />
                  <line
                    x1="38"
                    y1="52"
                    x2="38"
                    y2="58"
                    stroke={`url(#gradient-screw-${i})`}
                    strokeWidth="2"
                  />
                  <rect
                    x="28"
                    y="58"
                    width="8"
                    height="4"
                    fill={`url(#gradient-screw-${i})`}
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
          ))}
        </div>

        <div className="w-full max-w-6xl pl-52">
          <div className="text-left">
            <h2 className="text-softBlack text-5xl font-bold tracking-wide">
              Create
            </h2>
            <p className="text-gray-400 text-l ml-20 italic mt-2">
              Forge Boundless Imaginaries
            </p>
          </div>

          <div className="text-left ml-40 mt-8">
            <h2 className="text-softBlack text-5xl font-bold tracking-wide">
              Communicate
            </h2>
            <p className="text-gray-400 text-l ml-20 italic mt-2">
              Weave Profound Connections
            </p>
          </div>

          <div className="text-left ml-96 pl-20 mt-8">
            <h2 className="text-softBlack text-5xl font-bold tracking-wide">
              Elevate
            </h2>
            <p className="text-gray-400 text-l ml-20 italic mt-2">
              Transcend Ordinary Boundaries
            </p>
          </div>
        </div>
      </div>
    </>
  );
}