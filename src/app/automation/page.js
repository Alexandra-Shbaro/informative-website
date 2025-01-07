import React from 'react';

export default function AgencyAutomation() {
  return (
    <>
      
        <title>Agency Automation | Lumi Platform</title>
        <meta name="description" content="Discover how Lumi automates the digital marketing process through four key phases." />
        <link rel="icon" href="/favicon.ico" />
      

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
      </main>
    </>
  )
}
