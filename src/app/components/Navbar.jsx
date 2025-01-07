"use client";

import '../globals.css';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-between items-center w-full h-14 p-16">
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
                    <a href="/" className="px-4 py-2 text-white rounded-md bg-logoOrange">
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

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}/>
            )}

            <div
                className={`fixed top-0 right-0 h-full bg-softBlack text-white w-96 z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
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
                        <a href="/" className="block p-3 hover:lightGrey rounded-md">
                            Home
                        </a>
                    </li>
                    <li>
                        <Link href="/#about">
                        <a className="block p-3 hover:lightGrey rounded-md">
                            About
                        </a>
                        </Link>
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
                                <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.523A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.631A4.114 4.114 0 0 0 21.447 4.1a8.233 8.233 0 0 1-2.605.979A4.105 4.105 0 0 0 15.847 3c-2.28 0-4.124 1.836-4.124 4.1 0 .322.037.636.107.937A11.675 11.675 0 0 1 3.077 4.616a4.045 4.045 0 0 0-.556 2.062c0 1.424.734 2.684 1.846 3.423a4.117 4.117 0 0 1-1.866-.514v.052c0 1.988 1.417 3.645 3.293 4.018a4.124 4.124 0 0 1-1.857.07 4.112 4.112 0 0 0 3.845 2.844A8.253 8.253 0 0 1 2 18.407 11.616 11.616 0 0 0 6.29 19.95c7.547 0 11.675-6.155 11.675-11.495z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.408.593 24 1.325 24h11.495v-9.294H9.689v-3.622h3.131V8.413c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.463.099 2.794.144v3.24h-1.918c-1.504 0-1.796.714-1.796 1.76v2.309h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.408 0 22.675 0z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-3.312 0-3.742.014-5.043.072-1.304.058-2.2.255-2.977.546A5.967 5.967 0 0 0 2.48 1.36a5.96 5.96 0 0 0-1.176 1.5c-.292.777-.488 1.673-.546 2.977C.015 7.14 0 7.67 0 12s.015 4.86.072 6.163c.058 1.304.255 2.2.546 2.977.292.776.683 1.435 1.176 1.5.774.292 1.672.488 2.976.546C8.26 23.985 8.688 24 12 24s3.742-.015 5.043-.072c1.304-.058 2.2-.255 2.977-.546a5.957 5.957 0 0 0 1.5-1.176 5.96 5.96 0 0 0 1.176-1.5c.292-.777.488-1.673.546-2.977C23.985 16.86 24 16.33 24 12s-.015-4.86-.072-6.163c-.058-1.304-.255-2.2-.546-2.977a5.962 5.962 0 0 0-1.176-1.5 5.967 5.967 0 0 0-1.5-1.176c-.777-.292-1.673-.488-2.977-.546C15.74.015 15.312 0 12 0zm0 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zm0 1.621a4.542 4.542 0 1 0 0 9.084 4.542 4.542 0 0 0 0-9.084zm6.406-3.054a1.497 1.497 0 1 1-2.994 0 1.497 1.497 0 0 1 2.994 0z" />
                                    </svg>
                                </a>
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
