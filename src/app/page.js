"use client";
import './globals.css';
import { useState, useEffect, useRef } from 'react';

export default function Home() {

  const [isMounted, setIsMounted] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [showNewText, setShowNewText] = useState(false)
  const animationRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animateTimeout = setTimeout(() => setAnimate(true), 500)
          const textTimeout = setTimeout(() => setShowNewText(true), 2500)

          observer.disconnect()

          return () => {
            clearTimeout(animateTimeout)
            clearTimeout(textTimeout)
          }
        }
      },
      {
        threshold: 0.5
      }
    )

    if (animationRef.current) {
      observer.observe(animationRef.current)
    }

    return () => observer.disconnect()
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
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
      <div ref={animationRef} className="flex items-center justify-center min-h-screen bg-gray-900">
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
          <div className={`
              absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              text-3xl font-bold text-white text-center
              opacity-0 ${showNewText ? 'animate-[fadeIn_1s_ease-in-out_forwards]' : ''}
            `}
          >
            Lumi breaks old marketing rules
            <p className="text-m">Break free from fragmented marketing chaos. </p>
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
    </>
  );
}
