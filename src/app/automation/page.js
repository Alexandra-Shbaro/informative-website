
export default function AgencyAutomation() {
  return (
    <>
      <main className="text-softBlack">
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold text-logoOrange mb-4">Agency Automation with Lumi</h1>
          <p className="text-lg text-mediumGrey mx-auto w-4/5 md:w-2/3">
            Discover how Lumi automates the digital marketing process through four key phases to streamline your agency's workflow and drive results.
          </p>
        </section>

        <section className="py-16 px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-lightGrey p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-logoOrange mb-4">Phase 1: Strategy</h2>
              <p className="text-mediumGrey">
              Begin by gathering essential details about your client, including their brand identity and specific objectives.<br></br><br></br>
              
              Follow this with comprehensive market analysis that examines their mission statement and conducts standard assessments - evaluate their strengths, weaknesses, opportunities, and threats (SWOT), define their segmentation, targeting, and positioning (STP), and analyze their marketing mix (product, price, place, and promotion). <br></br><br></br>
              
              Based on these insights, develop both a creative approach to shape the campaign's direction and a complementary technology strategy to support its execution.
              </p>
            </div>

            <div className="bg-lightGrey p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-logoOrange mb-4">Phase 2: Design</h2>
              <p className="text-mediumGrey">
               Using insights from the strategic planning phase, develop an organized structure for how the information will flow and be categorized within the design. <br></br><br></br> Once this information framework is established, proceed with creating the actual design elements and visual components.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="bg-lightGrey p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-logoOrange mb-4">Phase 3: Prototype</h2>
              <p className="text-mediumGrey">
                Build interactive prototypes to visualize the user experience and test different design concepts for effectiveness.<br></br><br></br>
                Use that prototype as the foundation to develop a digital platform in the form of a website.
              </p>
            </div>

            <div className="bg-lightGrey p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-logoOrange mb-4">Phase 4: Analysis</h2>
              <p className="text-mediumGrey">
              After launching the campaign, clients will connect their Instagram accounts to the platform. <br></br><br></br>
              Lumi will gather performance data and metrics from their posts for ongoing monitoring. <br></br><br></br>
              Based on these insights, provide actionable analysis to help clients optimize their posts and enhance their personal branding strategy on Instagram.
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

          <div className="flex justify-center gap-10">
            <div className="bg-lightGrey p-8 rounded-lg shadow-lg w-1/3">
              <h3 className="text-xl font-semibold text-logoOrange mb-4">Approve Progress</h3>
              <p className="text-mediumGrey mb-4">
              Throughout each phase of the project, clients receive detailed progress updates via Lumi. <br></br>
              Once they provide their approval, the agency moves forward with the next phase of the campaign. <br></br>
              This streamlined approval process ensures smooth collaboration between your agency and the client.              </p>
              <div className="w-full h-2 bg-lightGrey rounded-full">
                <div className="w-3/4 h-full bg-logoOrange rounded-full"></div>
              </div>
              <p className="text-mediumGrey text-center mt-2">75% of the strategy phase completed</p>
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
