// pages/agency-automation.js
import Head from 'next/head';

export default function AgencyAutomation() {
  return (
    <>
      <Head>
        <title>Agency Automation | Lumi Platform</title>
        <meta name="description" content="Discover how Lumi automates the digital marketing process through four key phases." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-offWhite text-softBlack">
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold text-logoOrange mb-4">Agency Automation with Lumi</h1>
          <p className="text-lg text-mediumGrey mx-auto w-4/5 md:w-2/3">
            Discover how Lumi automates the digital marketing process through four key phases to streamline your agency's workflow and drive results.
          </p>
        </section>

        <section className="py-16 px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Phase 1: Strategy */}
            <div className="bg-lightGrey p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-logoOrange mb-4">Phase 1: Strategy</h2>
              <p className="text-mediumGrey">
                {/* Replace with your description of the strategy phase */}
                Define your digital marketing goals, target audience, and key performance indicators (KPIs) to set the foundation for success.
              </p>
            </div>

            {/* Phase 2: Design */}
            <div className="bg-lightGrey p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-logoOrange mb-4">Phase 2: Design</h2>
              <p className="text-mediumGrey">
                {/* Replace with your description of the design phase */}
                Create visually compelling and user-friendly designs that resonate with your audience and align with your strategy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* Phase 3: Prototype */}
            <div className="bg-lightGrey p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-logoOrange mb-4">Phase 3: Prototype</h2>
              <p className="text-mediumGrey">
                {/* Replace with your description of the prototype phase */}
                Build interactive prototypes to visualize the user experience and test different design concepts for effectiveness.
              </p>
            </div>

            {/* Phase 4: Analysis */}
            <div className="bg-lightGrey p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-logoOrange mb-4">Phase 4: Analysis</h2>
              <p className="text-mediumGrey">
                {/* Replace with your description of the analysis phase */}
                Analyze data from the campaign to optimize performance and make informed decisions for future marketing efforts.
              </p>
            </div>
          </div>
        </section>

        {/* Clients Section: Share Progress with Clients */}
        <section className="py-16 px-6 md:px-20">
          <h2 className="text-3xl font-semibold text-logoOrange text-center mb-8">Seamlessly Share Progress with Your Clients</h2>
          <p className="text-lg text-mediumGrey text-center mb-8">
            Lumi enables agencies to effortlessly share real-time progress with clients, ensuring transparency and collaboration throughout the digital marketing journey. 
            With Lumi, clients can stay informed at every phase with visual reports and interactive dashboards.
          </p>

          {/* Example of Progress Sharing (This can be a dashboard or progress bar) */}
          <div className="flex justify-center gap-10">
            <div className="bg-lightGrey p-8 rounded-lg shadow-lg w-1/3">
              <h3 className="text-xl font-semibold text-logoOrange mb-4">Progress Dashboard</h3>
              <p className="text-mediumGrey mb-4">
                Keep your clients updated with a personalized dashboard that highlights the key metrics and progress of each campaign.
              </p>
              <div className="w-full h-2 bg-lightGrey rounded-full">
                <div className="w-3/4 h-full bg-logoOrange rounded-full"></div>
              </div>
              <p className="text-mediumGrey text-center mt-2">75% of the strategy phase completed</p>
            </div>

            <div className="bg-lightGrey p-8 rounded-lg shadow-lg w-1/3">
              <h3 className="text-xl font-semibold text-logoOrange mb-4">Real-Time Updates</h3>
              <p className="text-mediumGrey mb-4">
                Clients can receive real-time updates on campaign performance, changes, and results to maintain alignment with agency objectives.
              </p>
              <div className="w-full h-2 bg-lightGrey rounded-full">
                <div className="w-50 h-full bg-logoYellow rounded-full"></div>
              </div>
              <p className="text-mediumGrey text-center mt-2">50% of the design phase completed</p>
            </div>
          </div>
        </section>

        {/* Hierarchy Tree Section */}
        <section className="py-16 px-6 md:px-20">
          <h2 className="text-3xl font-semibold text-logoOrange text-center mb-8">Hierarchy of Roles and Workflow</h2>
          <p className="text-lg text-mediumGrey text-center mb-8">
            Below is a visual representation of the roles and workflow in Lumi's platform, showing the structure and interactions between teams and clients.
          </p>

          {/* SVG Hierarchy Tree */}
          <div className="flex justify-center">
            <svg className="w-full max-w-3xl" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
              {/* Root Node */}
              <circle cx="250" cy="30" r="20" fill="logoOrange" />
              <text x="250" y="30" fontSize="12" textAnchor="middle" fill="white">Agency</text>

              {/* Connecting Lines */}
              <line x1="250" y1="50" x2="120" y2="100" stroke="logoOrange" strokeWidth="2" />
              <line x1="250" y1="50" x2="380" y2="100" stroke="logoOrange" strokeWidth="2" />
              <line x1="120" y1="120" x2="90" y2="170" stroke="logoOrange" strokeWidth="2" />
              <line x1="380" y1="120" x2="410" y2="170" stroke="logoOrange" strokeWidth="2" />

              {/* Roles */}
              <circle cx="120" cy="100" r="20" fill="logoYellow" />
              <text x="120" y="100" fontSize="12" textAnchor="middle" fill="white">Client Manager</text>

              <circle cx="380" cy="100" r="20" fill="logoYellow" />
              <text x="380" y="100" fontSize="12" textAnchor="middle" fill="white">Marketing Specialist</text>

              <circle cx="90" cy="170" r="20" fill="logoYellow" />
              <text x="90" y="170" fontSize="12" textAnchor="middle" fill="white">Client</text>

              <circle cx="410" cy="170" r="20" fill="logoYellow" />
              <text x="410" y="170" fontSize="12" textAnchor="middle" fill="white">Creative Team</text>
            </svg>
          </div>
        </section>
      </main>
    </>
  )
}
