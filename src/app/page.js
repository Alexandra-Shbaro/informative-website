import './globals.css'; // Import global CSS
import Head from 'next/head'; // Import Head for custom fonts or meta tags
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <>
    <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
    </Head>
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to the Navbar Example!</h1>
      </main>
    </div>
    </>
  );
}
