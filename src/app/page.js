"use client";
import './globals.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showNewText, setShowNewText] = useState(false);
  const [bulbs, setBulbs] = useState([]);

  useEffect(() => {
    const generateBulbs = (count) => {
      const newBulbs = [];
      for (let i = 0; i < count; i++) {
        newBulbs.push({
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 40 + 20,
          delay: Math.random() * 2,
        });
      }
      return newBulbs;
    };

    setBulbs(generateBulbs(20));
    setIsMounted(true);
    const animateTimeout = setTimeout(() => setAnimate(true), 500);
    const textTimeout = setTimeout(() => setShowNewText(true), 2500);

    return () => {
      clearTimeout(animateTimeout);
      clearTimeout(textTimeout);
    }
  }, []);

  if (!isMounted) {
    return null;
  }

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

      <div className="flex items-center justify-center min-h-screen bg-logoOrange">
        <div className="relative">
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

            {animate && (
              <>
                <div className="absolute top-0 left-0 w-1/4 h-1/4 border-t-4 border-l-4 border-white animate-[flyTopLeft_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute top-0 left-1/4 w-1/4 h-1/4 border-t-4 border-white animate-[flyTop1_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute top-0 right-1/4 w-1/4 h-1/4 border-t-4 border-white animate-[flyTop2_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute top-0 right-0 w-1/4 h-1/4 border-t-4 border-r-4 border-white animate-[flyTopRight_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute top-1/4 left-0 w-1/4 h-1/2 border-l-4 border-white animate-[flyLeft_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute top-1/4 right-0 w-1/4 h-1/2 border-r-4 border-white animate-[flyRight_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 border-b-4 border-l-4 border-white animate-[flyBottomLeft_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 border-b-4 border-white animate-[flyBottom1_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 border-b-4 border-white animate-[flyBottom2_1.5s_ease-in-out_forwards_0.8s]" />
                <div className="absolute bottom-0 right-0 w-1/4 h-1/4 border-b-4 border-r-4 border-white animate-[flyBottomRight_1.5s_ease-in-out_forwards_0.8s]" />
              </>
            )}
          </div>

          <div
            className={`
              absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              text-3xl font-bold text-white text-center
              opacity-0 ${showNewText ? 'animate-[fadeIn_1s_ease-in-out_forwards]' : ''}
            `}
          >
            <div className="w-96 md:w-[32rem] lg:w-[40rem]">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Lumi breaks old marketing rules
              </p>
              <p className="text-xl md:text-2xl mt-6 text-white px-4">
                Break free from fragmented marketing chaos.
              </p>
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