import React from "react";

const AboutUs = () => {
  return (
    <>
      {/* The 'px-4 sm:px-6' adds responsive horizontal padding to the entire section */}
      <section className="overflow-hidden bg-black text-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            
            {/* Left Images Section */}
            <div className="w-full px-4 lg:w-6/12">
              {/* Replaced complex flexbox with a simpler, more responsive CSS Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* First Image Column */}
                <div className="flex flex-col gap-6">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60"
                      alt="Beach Adventure"
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=60"
                      alt="Mountain Journey"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>

                {/* Second Image Column */}
                <div className="flex items-center">
                  <div className="relative z-10">
                    <img
                      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=60"
                      alt="City Exploration"
                      className="w-full rounded-2xl"
                    />
                    {/* Responsive positioning for the decorative SVG */}
                    <span className="absolute -right-4 -bottom-4 z-[-1] md:-right-7 md:-bottom-7">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG paths remain unchanged */}
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
              {/* Centered text on mobile, left-aligned on larger screens */}
              <div className="mt-10 lg:mt-0 text-center lg:text-left">
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