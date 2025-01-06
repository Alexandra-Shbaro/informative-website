"use client";

import '../globals.css';
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

                    <div className="cursor-pointer z-50" onClick={() => setIsOpen(prev => !prev)}>
                        <Image
                            src="/images/hamburger.svg"
                            alt="Menu"
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
            </nav>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Side Menu */}
            <div
                className={`fixed top-0 right-0 h-full bg-softBlack text-white w-96 z-50 transition-transform duration-300 transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                aria-hidden={!isOpen}
            >
                <div
                    className="cursor-pointer flex items-center justify-end p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        src="/images/hamburgerWhite.svg"
                        alt="Close Menu"
                        width={24}
                        height={24}
                    />
                </div>

                <ul className="m-8 space-y-1 text-lg">
                    <li>
                        <a href="/" className="block p-4 hover:lightGrey rounded-md">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="block p-3 hover:lightGrey rounded-md">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/automation" className="block p-3 hover:lightGrey rounded-md">
                            Agency Automation
                        </a>
                    </li>
                    <li>
                        <a href="/pricing" className="block p-3 hover:lightGrey rounded-md">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="block p-3 hover:lightGrey rounded-md">
                            Contact Us
                        </a>
                    </li>
                </ul>

                <div className="absolute bottom-0 left-0 w-full p-4 text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col space-x-4 space-y-4">
                            <p className="text-sm">Find us, Everywhere!</p>
                            <div className="flex space-x-4">
                                {/* Social Icons */}
                            </div>
                        </div>

                        <div className="text-right">
                            <p>Contact Us</p>
                            <a href="mailto:lumi@support.com" className="hover:underline">
                                lumi@support.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
