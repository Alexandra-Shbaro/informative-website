"use client";
import './globals.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showNewText, setShowNewText] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const animateTimeout = setTimeout(() => setAnimate(true), 500);
    const textTimeout = setTimeout(() => setShowNewText(true), 2500);

    return () => {
      clearTimeout(animateTimeout);
      clearTimeout(textTimeout);
    }
  }, [])

  if (!isMounted) {
    return null;
  }

  const textSections = [
    { top: '10%', bottom: '30%' }, // For "Create"
    { top: '40%', bottom: '60%' }, // For "Communicate"
    { top: '70%', bottom: '90%' }, // For "Elevate"
  ];

  const generateBulbs = (count, side) => {
    return Array(count)
      .fill()
      .map((_, index) => {
        const section = textSections[Math.floor(Math.random() * textSections.length)];
        return {
          top: `${
            Math.random() * (parseFloat(section.bottom) - parseFloat(section.top)) +
            parseFloat(section.top)
          }%`,
          [side]: `${Math.random() * 5 + 2}%`, // Bring bulbs closer to the center
          animationDuration: `${Math.random() * 2 + 2}s`,
          size: Math.random() * 20 + 25, // Increase bulb sizes
        };
      });
  };
  

  const leftBulbs = generateBulbs(6, 'left');
  const rightBulbs = generateBulbs(6, 'right');


  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
        {leftBulbs.map((bulb, i) => (
          <div
            key={`left-${i}`}
            className="absolute animate-pulse"
            style={{
              top: bulb.top,
              left: bulb.left,
              animationDuration: bulb.animationDuration,
            }}
          >
            <svg
              width={bulb.size}
              height={bulb.size}
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id={`gradient-left-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF8A00" />
                  <stop offset="100%" stopColor="#FFD700" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#gradient-left-${i})`}
                d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
              />
            </svg>
          </div>
        ))}

        {/* Right side light bulbs */}
        {rightBulbs.map((bulb, i) => (
          <div
            key={`right-${i}`}
            className="absolute animate-pulse"
            style={{
              top: bulb.top,
              right: bulb.right,
              animationDuration: bulb.animationDuration,
            }}
          >
            <svg
              width={bulb.size}
              height={bulb.size}
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id={`gradient-right-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF8A00" />
                  <stop offset="100%" stopColor="#FFD700" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#gradient-right-${i})`}
                d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
              />
            </svg>
          </div>
        ))}
        <div className="w-full max-w-4xl pl-16">
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
      </main>


      <div className="flex items-center justify-center min-h-screen bg-logoOrange">
        <div className="relative">
          {/* Breaking box */}
          <div className={`relative ${animate ? 'animate-[shake_0.8s_ease-in-out]' : ''}`}>
            <div
              className={`
              border-4 border-white p-8 text-4xl font-bold text-white
              ${animate ? 'animate-[disappear_0.5s_ease-in-out_forwards_0.8s]' : ''}
              relative
            `}
            >
              RULES
            </div>

            {/* Breaking pieces */}
            {animate && (
              <>
                {/* Top pieces */}
                <div className="absolute top-0 left-0 w-1/4 h-1/4 border-t-4 border-l-4 border-white animate-[flyTopLeft_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute top-0 left-1/4 w-1/4 h-1/4 border-t-4 border-white animate-[flyTop1_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute top-0 right-1/4 w-1/4 h-1/4 border-t-4 border-white animate-[flyTop2_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute top-0 right-0 w-1/4 h-1/4 border-t-4 border-r-4 border-white animate-[flyTopRight_1.5s_ease-in-out_forwards_0.8s]" />

                {/* Middle pieces */}
                <div className="absolute top-1/4 left-0 w-1/4 h-1/2 border-l-4 border-white animate-[flyLeft_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute top-1/4 right-0 w-1/4 h-1/2 border-r-4 border-white animate-[flyRight_1.5s_ease-in-out_forwards_0.8s]" />

                {/* Bottom pieces */}
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 border-b-4 border-l-4 border-white animate-[flyBottomLeft_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 border-b-4 border-white animate-[flyBottom1_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 border-b-4 border-white animate-[flyBottom2_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute bottom-0 right-0 w-1/4 h-1/4 border-b-4 border-r-4 border-white animate-[flyBottomRight_1.5s_ease-in-out_forwards_0.8s]" />
              </>
            )}
          </div>

          {/* New text that fades in */}
          <div
            className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            text-3xl font-bold text-white text-center
            opacity-0 ${showNewText ? 'animate-[fadeIn_1s_ease-in-out_forwards]' : ''}
          `}
          >
            <div className="w-96 md:w-[32rem] lg:w-[40rem]"> {/* Added wider container */}
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Lumi breaks old marketing rules</p>
              <p className="text-xl md:text-2xl mt-6 text-white px-4">Break free from fragmented marketing chaos.</p>
            </div>
          </div>

        </div>

        <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          25% { transform: translateX(-10px) rotate(-2deg); }
          75% { transform: translateX(10px) rotate(2deg); }
        }

        @keyframes disappear {
          to {
            opacity: 0;
          }
        }

        @keyframes flyTopLeft {
          0% { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(-150px, -150px) rotate(-45deg); opacity: 0; }
        }

        @keyframes flyTop1 {
          0% { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(-50px, -200px) rotate(-15deg); opacity: 0; }
        }

        @keyframes flyTop2 {
          0% { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(50px, -200px) rotate(15deg); opacity: 0; }
        }

        @keyframes flyTopRight {
          0% { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(150px, -150px) rotate(45deg); opacity: 0; }
        }

        @keyframes flyLeft {
          0% { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(-200px, 0) rotate(-30deg); opacity: 0; }
        }

        @keyframes flyRight {
          0% { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(200px, 0) rotate(30deg); opacity: 0; }
        }

        @keyframes flyBottomLeft {
          0% { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(-150px, 150px) rotate(45deg); opacity: 0; }
        }

        @keyframes flyBottom1 {
          0% { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(-50px, 200px) rotate(15deg); opacity: 0; }
        }

        @keyframes flyBottom2 {
          0% { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(50px, 200px) rotate(-15deg); opacity: 0; }
        }

        @keyframes flyBottomRight {
          0% { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(150px, 150px) rotate(-45deg); opacity: 0; }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
      </div>
    </>
  );
}
