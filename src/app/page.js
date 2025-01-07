"use client";
import './globals.css';
import Banner from "./components/Banner";
import dynamic from 'next/dynamic';
import About from './components/About';
import Barrier from './components/Barrier';
import CinemaExperience from './components/Cinema';
import GetStartedSection from './components/GetStarted';
import Footer from './components/Footer';

const Rules = dynamic(() => import('./components/Rules'), { ssr: false, });

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF8A00', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="url(#grad1)" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <Banner />
      <Rules />
      <About />
      <Barrier/>
      <CinemaExperience/>
      <GetStartedSection/>
      <Footer/>
    </>
  );
}