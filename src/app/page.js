import './globals.css'; 
import Head from 'next/head'; 
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
    <div className="p-5">
      <Navbar />
    </div>
    </>
  );
}
