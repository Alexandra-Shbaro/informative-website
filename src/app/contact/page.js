"use client";
export default function Contact() {
  return (
    <>
      <div className=" min-h-screen flex items-center justify-center px-6 mb-36 mt-28">
        <div className="bg-offWhite shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-logoOrange mb-4">Let’s Connect!</h1>
            <p className="text-mediumGrey mb-6">
              Have a question, a brilliant idea, or just want to say hi? Lumi would love to hear from you! 
            </p>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-mediumGrey text-sm mb-1">
                  What should Lumi call you?
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-logoOrange bg-lightGrey text-softBlack"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-mediumGrey text-sm mb-1">
                  Where can Lumi reach you?
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-logoYellow bg-lightGrey text-softBlack"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-mediumGrey text-sm mb-1">
                  What’s on your mind?
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Type your message here… Lumi's listening!"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-logoOrange bg-lightGrey text-softBlack"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-logoOrange text-offWhite font-medium py-3 rounded-md hover:bg-logoYellow hover:scale-105 transition duration-200"
                >
                  Send Your Thoughts 
                </button>
              </div>
            </form>
          </div>

          <div className="hidden md:block relative">
            <img
              src="/images/lightbulb.jpg"
              alt="Contact Lumi Illustration"
              className="object-cover w-full h-full rounded-r-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
