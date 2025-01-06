"use client";
import './globals.css';
import Banner from "./components/Banner";
import dynamic from 'next/dynamic';

const Rules = dynamic(() => import('./components/Rules'), { ssr: false, });

export default function Home() {
  return (
    <>
    <Banner/>
    <Rules/>
    </>
  );
}