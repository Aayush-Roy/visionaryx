
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen">
      {/* Navbar */}
      
      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 mt-20 md:mt-20 pb-20 gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Empowering <span className="text-[#FFB22C]">Businesses</span> &<br />
            Creating <span className="text-[#FFB22C]">Journeys</span> That Inspire
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-xl">
            At VisionaryX, we blend business consulting and travel expertise to
            craft unforgettable experiences that help your brand grow and your
            dreams take flight.
          </p>

          <div className="flex items-center gap-4 mt-8 text-sm">
            <button className="bg-[#FFB22C] hover:bg-white hover:text-[#FFB22C] text-black font-semibold active:scale-95 transition rounded-md px-7 h-11">
              Explore Services
            </button>
            <button className="border border-[#FFB22C] hover:bg-[#FFB22C] hover:text-black text-[#FFB22C] active:scale-95 transition rounded-md px-7 h-11 font-medium">
              Learn More
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
          alt="hero"
          className="max-w-sm sm:max-w-md lg:max-w-lg rounded-xl shadow-[0_0_20px_rgba(255,178,44,0.3)] transition-transform duration-500 hover:scale-105"
        />
      </main>
    </section>
  );
};

export default Hero;
