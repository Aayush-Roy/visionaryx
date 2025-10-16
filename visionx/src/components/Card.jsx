import React from "react";

const Card = () => {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-20 bg-black text-white">
      <h1 className="text-3xl font-semibold text-center mx-auto">Latest Blog</h1>
      <p className="text-sm text-slate-400 text-center mt-2 max-w-lg mx-auto">
        Stay ahead of the curve with fresh content on code, design, startups, and everything in between.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {/* Card 1 */}
        <div className="max-w-72 w-full hover:-translate-y-1 transition duration-500 cursor-pointer">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&h=800&auto=format&fit=crop&q=60"
            alt="Color Psychology in UI"
          />
          <h3 className="text-base text-white font-medium mt-3">
            Color Psychology in UI: How to Choose the Right Palette
          </h3>
          <p className="text-xs text-[#FFC400] font-medium mt-1">UI/UX Design</p>
        </div>

        {/* Card 2 */}
        <div className="max-w-72 w-full hover:-translate-y-1 transition duration-500 cursor-pointer">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1714974528646-ea024a3db7a7?w=1200&h=800&auto=format&fit=crop&q=60"
            alt="Design Principles"
          />
          <h3 className="text-base text-white font-medium mt-3">
            Mastering Visual Hierarchy: The Art of UI Balance
          </h3>
          <p className="text-xs text-[#FFC400] font-medium mt-1">UI/UX Design</p>
        </div>

        {/* Card 3 */}
        <div className="max-w-72 w-full hover:-translate-y-1 transition duration-500 cursor-pointer">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1713947501966-34897f21162e?w=1200&h=800&auto=format&fit=crop&q=60"
            alt="Design Trends"
          />
          <h3 className="text-base text-white font-medium mt-3">
            Minimalist Design: Simplify Interfaces for Impact
          </h3>
          <p className="text-xs text-[#FFC400] font-medium mt-1">Product Design</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
