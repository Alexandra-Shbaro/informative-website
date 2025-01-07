"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Barrier() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            gsap.from(".heading", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });

            gsap.from(".subtext", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: "power2.out"
            });

            gsap.from(".emphasis", {
                y: 20,
                opacity: 0,
                duration: 0.6,
                delay: 0.4,
                ease: "power2.out"
            });
        }
    }, [isVisible]);

    return (
        <div ref={sectionRef} className="flex flex-col items-center justify-center min-h-screen p-4">
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