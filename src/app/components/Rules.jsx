"use client";
import '../globals.css';
import { useState, useEffect } from 'react';

export default function Rules() {
    const [isMounted, setIsMounted] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [showNewText, setShowNewText] = useState(false);
    const [disappear, setDisappear] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Set animations
        const animateTimeout = setTimeout(() => setAnimate(true), 500);
        const textTimeout = setTimeout(() => setShowNewText(true), 2500);
        
        // Set the disappear timeout with delay to trigger display change after animation
        const disappearTimeout = setTimeout(() => {
            setDisappear(true);
            document.getElementById("rules-box").style.display = "none";  // Set display to none after animation
        }, 3500); // 3500ms matches the duration of the fade-out animation

        return () => {
            clearTimeout(animateTimeout);
            clearTimeout(textTimeout);
            clearTimeout(disappearTimeout);
        };
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-logoOrange">
            <div className="relative">
                <div className={`relative ${animate ? 'animate-[shake_0.8s_ease-in-out]' : ''}`}>
                    <div
                        id="rules-box"  // Add ID for better targeting
                        className={`border-4 border-white p-8 text-4xl font-bold text-white ${animate && !disappear ? 'animate-[disappear_0.8s_ease-in-out_forwards]' : ''} relative`}>
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

                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white text-center opacity-0 ${showNewText ? 'animate-[fadeIn_1s_ease-in-out_forwards]' : ''} `}>
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
                    0% {
                        opacity: 1;
                    }
                    100% {
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
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}
