import React, { useState, useEffect } from 'react';

const LumiLanding = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#2C3333] overflow-hidden relative">
            {/* Animated gradient background */}
            <div className="fixed inset-0 opacity-[0.15]">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[80vw] h-[80vw] rounded-full"
                        style={{
                            background: `radial-gradient(circle, #FF8A00 0%, transparent 70%)`,
                            top: `${i * 30}%`,
                            left: `${i * 20}%`,
                            animation: `float ${10 + i * 2}s ease-in-out infinite`,
                            animationDelay: `${i * 2}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative">
                {/* Hero */}
                <div className="min-h-screen flex items-center justify-center p-6">
                    <div className="text-center max-w-4xl relative">
                        <div className="mb-8">
                        </div>
                        <p className="text-[#FAFAFA] text-2xl leading-relaxed">
                            The digital powerhouse that turns scattered efforts into a
                            <span className="relative inline-block mx-2 px-2">
                                <span className="relative z-10 text-[#FF8A00] font-semibold">symphonic</span>
                                <span className="absolute inset-0 bg-[#FFD700] opacity-20 animate-ping"></span>
                            </span>
                            marketing experience.
                        </p>
                    </div>
                </div>

                {/* Content sections with diagonal dividers */}
                <div className="space-y-32 pb-32">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className={`relative ${i % 2 === 0 ? 'bg-[#2C3333]/50' : ''}`}>
                            <div className="container mx-auto px-6 py-20">
                                <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                                    <div className="w-full md:w-1/2">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00] to-[#FFD700] opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="relative bg-[#2C3333] p-8 rounded-xl">
                                                <div className="text-xl text-[#FAFAFA] leading-relaxed">
                                                    {[
                                                        "We don't just automate processes—we orchestrate your brand's entire narrative, transforming data points and creative sparks into a compelling story that captivates and converts.",
                                                        "Imagine a platform that's part strategist, part storyteller, and part efficiency engine. Lumi weaves together campaign management, content creation, and client insights, giving you a razor-sharp edge in a noise-saturated digital landscape.",
                                                        "From conceptualization to execution, we're not just a tool—we're your strategic partner.",
                                                        "Lumi cuts through complexity, delivering precision-targeted content that resonates, engages, and drives meaningful connections with your audience."
                                                    ][i]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <div className="grid grid-cols-2 gap-4">
                                            {[...Array(4)].map((_, j) => (
                                                <div
                                                    key={j}
                                                    className="aspect-square rounded-lg bg-gradient-to-br from-[#FF8A00] to-[#FFD700] opacity-20 hover:opacity-40 transition-opacity duration-300"
                                                    style={{
                                                        animation: `float ${3 + j}s ease-in-out infinite`,
                                                        animationDelay: `${j * 0.5}s`
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 pointer-events-none">
                                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id={`grad${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#FF8A00', stopOpacity: 0.1 }} />
                                            <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 0.1 }} />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d={`M0,0 L100,${i % 2 ? 20 : -20} L100,100 L0,${i % 2 ? 80 : 120} Z`}
                                        fill={`url(#grad${i})`}
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -10px) rotate(5deg); }
        }
      `}</style> */}
        </div>
    );
};


export default LumiLanding;