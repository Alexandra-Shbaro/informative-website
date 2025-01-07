import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.scrollY > 400) {
                setShowScroll(true);
            } else if (showScroll && window.scrollY <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-softBlack text-offWhite relative z-10">
            <button
                onClick={scrollToTop}
                className={`fixed right-8 bottom-20 bg-gradient-to-r from-logoOrange to-logoYellow p-3 rounded-full shadow-lg 
              hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:-translate-y-1
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50
              ${showScroll ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6 text-white" />
            </button>


            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-logoOrange">Lumi</h2>
                        <p className="text-sm">
                            Illuminating the path to digital excellence through innovative solutions.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="w-5 h-5 hover:text-logoOrange cursor-pointer" />
                            <Twitter className="w-5 h-5 hover:text-logoOrange cursor-pointer" />
                            <Instagram className="w-5 h-5 hover:text-logoOrange cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-logoOrange">About Us</a></li>
                            <li><a href="#" className="hover:text-logoOrangeorange-500">Agency Automation</a></li>
                            <li><a href="#" className="hover:text-logoOrange">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Features</h3>
                        <ul className="space-y-2">
                            <li>Real-Time Collaboration</li>
                            <li>Customizable Dashboards</li>
                            <li>AI-Powered Insights</li>
                            <li>Secure Data Management</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-2">
                            <p className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                lumi@support.com
                            </p>
                            <p>Beirut Digital District</p>
                            <p>Beirut, Lebanon</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-offWhite mt-8 pt-8">
                 
                        
                        <div className="flex space-x-6 mt-4 md:mt-0">
                        <p className="text-sm">© 2025 Lumi. All rights reserved.</p>
                        </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;