import './globals.css'; 

export default function Home() {
  return (
    <>
    <main className="ml-20 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl ">
        <div className="text-left">
          <h2 className="text-black text-5xl font-bold tracking-wide">
            Create
          </h2>
          <p className="text-gray-400 text-l ml-20 italic mt-2">
            Forge Boundless Imaginaries
          </p>
        </div>
        
        <div className="text-left ml-40 mt-8">
          <h2 className="text-black text-5xl font-bold tracking-wide">
            Communicate
          </h2>
          <p className="text-gray-400 text-l ml-20 italic mt-2">
            Weave Profound Connections
          </p>
        </div>
        
        <div className="text-left ml-96 pl-20 mt-8">
          <h2 className="text-black text-5xl font-bold tracking-wide">
            Elevate
          </h2>
          <p className="text-gray-400 text-l ml-20 italic mt-2">
            Transcend Ordinary Boundaries
          </p>
        </div>
      </div>
    </main>
    </>
  );
}
