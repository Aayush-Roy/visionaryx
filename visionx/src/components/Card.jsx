import React from "react";

const Card = () => {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-20 bg-black text-white">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Latest Travel Stories
      </h1>
      <p className="text-sm text-slate-400 text-center mt-2 max-w-lg mx-auto">
        Discover breathtaking destinations, travel tips, and hidden gems from around the world.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {/* Card 1 */}
        <div className="max-w-72 w-full hover:-translate-y-1 transition duration-500 cursor-pointer">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&auto=format&fit=crop&q=60"
            alt="Maldives Getaway"
          />
          <h3 className="text-base text-white font-medium mt-3">
            Escape to the Maldives: A Paradise Beyond Imagination
          </h3>
          <p className="text-xs text-[#FFC400] font-medium mt-1">
            Tropical Getaway
          </p>
        </div>

        {/* Card 2 */}
        <div className="max-w-72 w-full hover:-translate-y-1 transition duration-500 cursor-pointer">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&h=800&auto=format&fit=crop&q=60"
            alt="Swiss Alps Adventure"
          />
          <h3 className="text-base text-white font-medium mt-3">
            Conquer the Swiss Alps: Adventure for Every Soul
          </h3>
          <p className="text-xs text-[#FFC400] font-medium mt-1">
            Mountain Adventure
          </p>
        </div>

        {/* Card 3 */}
        <div className="max-w-72 w-full hover:-translate-y-1 transition duration-500 cursor-pointer">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=800&auto=format&fit=crop&q=60"
            alt="Tokyo Nights"
          />
          <h3 className="text-base text-white font-medium mt-3">
            Tokyo Nights: Exploring Japan’s Vibrant Capital
          </h3>
          <p className="text-xs text-[#FFC400] font-medium mt-1">
            City Exploration
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
