import React from "react";

// Utility: Generate initials for avatar
const getAvatar = (name) => {
  if (!name) return "";
  const words = name.toUpperCase().split(" ");
  return words.map((w) => w.charAt(0)).join("");
};

// Dummy travel data
const travelData = [
  {
    category: "Beach Escape",
    title:
      "Relax on pristine beaches with turquoise waters and golden sands",
    date: new Date().toDateString(),
    location: "Goa, India",
    subCategory: "Beach",
    image:
      "https://www.tailwindtap.com/assets/components/scale-effect-card/flower.jpg",
    name: "Aayush Roy",
  },
  {
    category: "Mountain Adventure",
    title:
      "Explore the majestic Himalayan peaks and serene landscapes",
    date: new Date().toDateString(),
    location: "Manali, Himachal Pradesh",
    subCategory: "Mountains",
    image:
      "https://www.tailwindtap.com/assets/components/scale-effect-card/mountain.jpg",
    name: "Travel Co",
  },
  {
    category: "Heritage Tour",
    title:
      "Discover India's rich culture and historical landmarks",
    date: new Date().toDateString(),
    location: "Jaipur, Rajasthan",
    subCategory: "Heritage",
    image:
      "https://www.tailwindtap.com/assets/components/scale-effect-card/sunset.jpg",
    name: "Royal Tours",
  },
  {
    category: "City Exploration",
    title: "Experience bustling Indian cities with guided tours",
    date: new Date().toDateString(),
    location: "Mumbai, Maharashtra",
    subCategory: "City",
    image:
      "https://www.tailwindtap.com/assets/components/scale-effect-card/greenleaves.jpg",
    name: "City Walks",
  },
];

const cardTextStyle = {
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const TravelCards = () => {
  return (
    <div className="bg-gray-50 min-h-[50vh] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image + Avatar */}
              <div className="relative h-48 overflow-hidden cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-yellow-400 text-black font-bold rounded-full shadow-md">
                  {getAvatar(item.name)}
                </span>
              </div>

              {/* Card Info */}
              <div className="p-4 space-y-2">
                <p className="text-sm font-semibold text-yellow-600">
                  {item.category}
                </p>
                <h3
                  style={cardTextStyle}
                  className="text-lg font-bold text-gray-700"
                >
                  {item.title}
                </h3>

                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <SubCategoryIcon />
                  <span>{item.subCategory}</span>
                </div>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <DateIcon />
                  <span>{item.date}</span>
                </div>
                <div className="flex gap-2 items-center text-gray-500 text-sm">
                  <LocationIcon />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelCards;

// Icons
const SubCategoryIcon = () => (
  <svg
    stroke="gray"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 6v6l4 2"></path>
  </svg>
);

const DateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="gray"
  >
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V9h14v11z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="gray"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
  </svg>
);
