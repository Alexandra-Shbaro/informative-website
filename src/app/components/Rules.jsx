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

        const animateTimeout = setTimeout(() => setAnimate(true), 500);
        const textTimeout = setTimeout(() => setShowNewText(true), 2500);
        
        const disappearTimeout = setTimeout(() => {
            setDisappear(true);
            document.getElementById("rules-box").style.display = "none";  
        }, 3500); 

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
                        id="rules-box" 
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
        </div>
    );
}
