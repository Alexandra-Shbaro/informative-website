"use client"; 

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); 

    return (
        <>
            <nav className="flex justify-between items-center w-full h-14 p-5">
                {/* Logo Section */}
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

                {/* Right Section */}
                <div className="flex items-center justify-end space-x-4">
                    <a
                        href="/"
                        className="px-4 py-2 text-white rounded-md"
                        style={{ backgroundColor: '#ff8a00' }} 
                    >
                        Get Started
                    </a>

                    {/* Menu Icon */}
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
            <div className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-end p-4">
                    <button onClick={() => setIsOpen(false)} className="text-white">Close</button>
                </div>
                <ul className="mt-10">
                    {["Home", "About", "Agency Automation", "Pricing", "Contact Us"].map((page, index) => (
                        <li key={index} className="p-4 hover:bg-gray-700">
                            <a href={`/${page.toLowerCase().replace(/\s/g, '')}`}>{page}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}