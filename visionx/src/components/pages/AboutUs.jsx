import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-black text-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            {/* Left Images Section */}
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60"
                      alt="Beach Adventure"
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=60"
                      alt="Mountain Journey"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=60"
                      alt="City Exploration"
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="1.66667" cy={104} r="1.66667" fill="#FDC700" />
                        <circle cx="16.3333" cy={104} r="1.66667" fill="#FDC700" />
                        <circle cx={31} cy={104} r="1.66667" fill="#FDC700" />
                        <circle cx="45.6667" cy={104} r="1.66667" fill="#FDC700" />
                        <circle cx="60.3333" cy={104} r="1.66667" fill="#FDC700" />
                        <circle cx="74.6667" cy={104} r="1.66667" fill="#FDC700" />
                        <circle cx="88.6667" cy={104} r="1.66667" fill="#FDC700" />
                        <circle cx={103} cy={104} r="1.66667" fill="#FDC700" />
                        <circle cx={117.667} cy={104} r="1.66667" fill="#FDC700" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Section */}
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-[#FDC700] uppercase tracking-wide">
                  Why Choose VisionaryX
                </span>
                <h2 className="mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
                  Your Gateway to Boundless Adventures ✈️
                </h2>
                <p className="mb-5 text-base text-gray-300">
                  At <span className="text-[#FDC700] font-semibold">VisionaryX</span>, we
                  believe travel is more than just visiting places — it's about
                  creating memories that last forever. From hidden beaches to
                  mountain escapes, every journey we design brings you closer to
                  your dream destination.
                </p>
                <p className="mb-8 text-base text-gray-300">
                  With expert planning, personalized packages, and 24/7
                  assistance, we make every trip smooth, safe, and unforgettable.
                  Whether it's a solo adventure or a luxury getaway — VisionaryX
                  turns your wanderlust into reality.
                </p>
                <a
                  href="#explore"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-black rounded-md px-7 bg-[#FDC700] hover:bg-yellow-400 transition duration-300"
                >
                  Start Exploring
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
