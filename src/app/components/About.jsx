import React, { useState, useEffect } from 'react';

const LumiLanding = () => {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible((prev) => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting,
                    }));
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[id^="section-"]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-[#2C3333] overflow-hidden">
            {/* Animated Background */}
            {/*  */}

            <div className="relative">
                {/* Hero Section */}
                <div className="mt-28 mb-28 flex items-center justify-center p-2">
                    <div className="text-center max-w-4xl">
                        <p className="text-[#FAFAFA] text-xl leading-snug">
                            The digital powerhouse that turns scattered efforts into a{' '}
                            <span className="relative inline-block mx-1 px-1">
                                <span className="relative z-10 text-[#FF8A00] font-semibold">
                                    symphonic
                                </span>
                            </span>
                            marketing experience.
                        </p>
                    </div>
                </div>

                {/* Content Sections */}
                <div>
                    {[...Array(4)].map((_, i) => (
                        <section key={i} id={`section-${i}`} className={`relative ${i % 2 === 0 ? 'bg-[#2C3333]/50' : ''}`}>
                            <div className="container mx-auto px-4">
                                <div className={`flex flex-col gap-12 ml-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} p-10 items-center`}>
                                    <div className="w-full md:w-1/2">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A00] to-[#FFD700] opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="relative bg-[#2C3333] p-10 rounded-xl">
                                                <p className="text-lg text-[#FAFAFA] leading-relaxed">
                                                    {[
                                                        'We don\'t just automate processes—we orchestrate your brand\'s entire narrative.',
                                                        'Imagine a platform that\'s part strategist, part storyteller, and part efficiency engine.',
                                                        'From conceptualization to execution, we\'re not just a tool—we\'re your strategic partner.',
                                                        'Lumi cuts through complexity, delivering precision-targeted content that resonates.',
                                                    ][i]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center md:w-1/2">
                                        <div key={0} className="aspect-square rounded-lg bg-gradient-to-br from-[#FF8A00] to-[#FFD700] opacity-20 hover:opacity-40 transition-opacity duration-300 w-[70%] h-[80%] " />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LumiLanding;
