"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-between items-center w-full h-14 p-5">
                <div className="relative w-32 h-14">
                    <Image
                        src="/images/logoSVG.svg"
                        alt="Logo"
                        layout="responsive"
                        width={128}
                        height={56}
                        quality={100}
                    />
                </div>

                <div className="flex items-center justify-end space-x-4">
                    <a
                        href="/"
                        className="px-4 py-2 text-white rounded-md"
                        style={{ backgroundColor: '#ff8a00' }}
                    >
                        Get Started
                    </a>

                    <div className="cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                        <Image
                            src="/images/hamburger.svg"
                            alt="Menu"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
            </nav>

            {/* Side Menu */}
            <div className={`fixed top-0 right-0 h-full bg-#E7E7E7 text-white w-64 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-hidden={!isOpen}>
                {/* Close Button */}
                <div className="cursor-pointer flex items-center justify-end p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        src="/images/hamburgerWhite.svg" 
                        alt="Close Menu"
                        width={24}
                        height={24}
                    />
                </div>

                {/* Menu Items */}
                <ul className="mt-10 space-y-2">
                    <li>
                        <a
                            href="/"
                            className="block p-4 hover:bg-gray-700 rounded-md"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="block p-4 hover:bg-gray-700 rounded-md"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/automation"
                            className="block p-4 hover:bg-gray-700 rounded-md"
                        >
                            Agency Automation
                        </a>
                    </li>
                    <li>
                        <a
                            href="/pricing"
                            className="block p-4 hover:bg-gray-700 rounded-md"
                        >
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="block p-4 hover:bg-gray-700 rounded-md"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

        </>
    );
}