import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative shadow-2xl shadow-[#FFC400]/40 rounded-2xl overflow-hidden shrink-0"
      >
        <img
          className="max-w-md w-full object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
          alt="About VisionaryX"
        />
        <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
          <div className="flex -space-x-4 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="Member"
              className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="Member"
              className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
              alt="Member"
              className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
            />
            <div className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-[#FFC400] hover:-translate-y-1 transition z-[4]">
              50+
            </div>
          </div>
          <p className="text-sm font-medium text-slate-800">
            Join our VisionaryX community
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-sm text-gray-300 max-w-lg"
      >
        <h1 className="text-3xl uppercase font-semibold text-[#FFC400]">
          What We Do
        </h1>
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-[#FFC400] to-white"></div>
        <p className="mt-8">
          At VisionaryX, we empower businesses and travelers to discover
          opportunities beyond limits. From strategic consulting to personalized
          travel experiences, we bring vision and execution together.
        </p>
        <p className="mt-4">
          Whether you're expanding your enterprise or exploring the world, our
          experts ensure your journey is seamless, insightful, and inspiring.
        </p>
        <p className="mt-4">
          VisionaryX combines innovation, data-driven insights, and passion to
          elevate your goals into extraordinary outcomes.
        </p>
        <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-[#FFC400] text-black py-3 px-8 rounded-full font-medium">
          <span>Read More</span>
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
              fill="#000"
            />
          </svg>
        </button>
      </motion.div>
    </section>
  );
};

export default About;
