
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

                    <div className="bg-lightGrey p-8 rounded-lg shadow-lg w-1/3">
                        <h3 className="text-xl font-semibold text-logoOrange mb-4">Real-Time Updates</h3>
                        <p className="text-mediumGrey mb-4">
                            Clients can receive real-time updates on campaign performance, changes, and results to maintain alignment with agency objectives.
                        </p>
                    </div>

                    <div className="flex justify-center gap-10">
                        <div className="bg-lightGrey p-8 rounded-lg shadow-lg w-1/3">
                            <h3 className="text-xl font-semibold text-logoOrange mb-4">Approve Progress</h3>
                            <p className="text-mediumGrey mb-4">
                                Throughout each phase of the project, clients receive detailed progress updates via Lumi. <br></br>
                                Once they provide their approval, the agency moves forward with the next phase of the campaign. <br></br>
                                This streamlined approval process ensures smooth collaboration between your agency and the client.              
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
