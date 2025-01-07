"use client";

import { useEffect } from 'react';
import gsap from 'gsap';

export default function Barrier() {
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(".heading", { opacity: 0, y: 50 });
        gsap.set(".subtext", { opacity: 0, y: 30 });
        gsap.set(".emphasis", { opacity: 0, y: 20 });

        tl.to(".heading", {
            opacity: 1,
            y: 0,
            duration: 1,
        })
        .to(".subtext", {
            opacity: 1,
            y: 0,
            duration: 0.8,
        }, "-=0.5")  
        .to(".emphasis", {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.1,
        }, "-=0.3"); 

    }, []); 

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
            <div className="text-center space-y-2">
                <h1 className="heading text-3xl md:text-4xl lg:text-5xl font-light text-gray-800">
                    Lumi isn't just software.
                </h1>
                <p className="subtext text-2xl md:text-3xl lg:text-4xl text-softBlack">
                    It's <span className="emphasis font-medium italic text-black">your unfair advantage.</span>
                </p>
            </div>
        </div>
    );
}