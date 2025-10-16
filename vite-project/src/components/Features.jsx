import React from "react";

const Features = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-black text-white">
      <h1 className="text-3xl font-semibold text-center mx-auto text-[#FFC400]">
        Powerful Features
      </h1>
      <p className="text-sm text-slate-400 text-center mt-2 max-w-md mx-auto">
        Everything you need to manage, track, and grow your business, securely
        and efficiently.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
        {/* Feature 1 */}
        <div className="max-w-80 hover:-translate-y-1 hover:scale-105 transition duration-500 cursor-pointer">
          <img
            className="rounded-xl"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png"
            alt="Feedback analyser"
          />
          <h3 className="text-base font-semibold text-white mt-4">
            Feedback Analyser
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Get instant insights into your customer responses with smart
            analytics.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="max-w-80 hover:-translate-y-1 hover:scale-105 transition duration-500 cursor-pointer">
          <img
            className="rounded-xl"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png"
            alt="User management"
          />
          <h3 className="text-base font-semibold text-white mt-4">
            User Management
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Manage users and permissions with ease from a central dashboard.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="max-w-80 hover:-translate-y-1 hover:scale-105 transition duration-500 cursor-pointer">
          <img
            className="rounded-xl"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png"
            alt="Better invoicing"
          />
          <h3 className="text-base font-semibold text-white mt-4">
            Better Invoicing
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Automate invoicing and get real-time reports on your finances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
