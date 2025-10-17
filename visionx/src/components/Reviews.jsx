import React from "react";
import { motion } from "framer-motion";
import { reviews } from "../utils/reviews"; // Assuming reviews are in a separate file

const ReviewTestimonials = () => {
  return (
    // The section now has responsive vertical padding (py-16 on mobile, py-24 on large screens)
    <section className="py-16 lg:py-24 bg-white text-gray-900">
      {/* This new container div centers the content and sets a max-width.
        This prevents the layout from looking too stretched on very wide screens.
        It also has responsive horizontal padding for different device sizes.
      */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="uppercase text-sm text-yellow-500 font-semibold tracking-wider">
            Testimonials
          </p>
          {/* Improved responsive font sizes for the main heading.
            It will be larger on small, medium, and large screens respectively.
          */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-yellow-500 to-black bg-clip-text text-transparent">
            Don’t Just Take Our Word For It
          </h1>
          <p className="text-slate-500 mt-4 max-w-3xl mx-auto text-base sm:text-lg">
            Hear what our travelers say about their unforgettable experiences
            with VisionaryX.
          </p>
        </div>

        {/* Updated Grid Layout:
          - Mobile (default): 1 column (grid-cols-1)
          - Tablet (md): 2 columns (md:grid-cols-2) - Switched from `sm` to `md` for a better breakpoint.
          - Desktop (lg): 3 columns (lg:grid-cols-3)
          - Increased gap for better spacing on larger screens (gap-8).
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              // Added flex layout to the card to easily push the profile to the bottom
              className="flex flex-col justify-between border border-slate-200 p-6 rounded-lg hover:-translate-y-2 hover:shadow-2xl hover:border-transparent transition-all duration-300 bg-white"
            >
              {/* The review text will take up the available space */}
              <p className="text-base text-slate-600 flex-grow">{review.text}</p>
              
              {/* The profile section stays at the bottom */}
              <div className="flex items-center gap-4 mt-8">
                <img
                  className="size-12 rounded-full object-cover"
                  src={review.img}
                  alt={review.name}
                />
                <div>
                  <h2 className="flex items-center gap-2 text-base text-gray-900 font-semibold">
                    {review.name}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.6943 0.900204C5.51166 1.05585 5.42033 1.13369 5.3228 1.19906C4.9032 1.48014 4.40667 1.60757 3.91355 1.5598C3.79823 1.54839 3.67624 1.52184 3.43227 1.46875L2.36631 1.23528C1.7802 1.10639 1.48715 1.04194 1.28942 1.1171C1.11549 1.18293 0.973258 1.31092 0.893376 1.47543C0.800003 1.66741 0.800003 1.97458 0.800003 2.58891V6.1002C0.800003 8.66294 2.47092 10.9637 4.89932 11.8435C5.20258 11.9549 5.35421 12.0106 5.50617 12.0579C6.22557 12.2838 6.99863 12.2838 7.71804 12.0579C7.86999 12.0106 8.02163 11.9549 8.32488 11.8435C10.7533 10.9637 12.4242 8.66294 12.4242 6.1002V2.58891C12.4242 1.97458 12.4242 1.66741 12.3309 1.47543C12.251 1.31092 12.1087 1.18293 11.9348 1.1171C11.7371 1.04194 11.444 1.10639 10.8579 1.23528L9.79191 1.46875C9.54795 1.52184 9.42596 1.54839 9.31063 1.5598C8.81751 1.60757 8.32098 1.48014 7.90138 1.19906C7.80385 1.13369 7.71252 1.05585 7.52988 0.900204C7.13691 0.566599 6.94042 0.399796 6.7204 0.333998C6.52765 0.277232 6.31921 0.277232 6.12646 0.333998C5.90645 0.399796 5.70996 0.566599 5.317 0.900204Z"
                        fill="#1DA1F2"
                      />
                    </svg>
                  </h2>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewTestimonials;