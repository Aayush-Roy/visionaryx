import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/" },
    { name: "Contact", path: "/" },
    { name: "About", path: "/" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-yellow-400 flex items-center justify-between px-6 md:px-16 py-4 shadow-md z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-black">VisionaryX</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="font-medium text-black hover:text-white transition-all duration-300"
          >
            {link.name}
          </a>
        ))}

        <button className="px-5 py-2 rounded-full font-medium bg-black text-yellow-400 hover:bg-gray-800 transition-all">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(true)}>
          <svg
            className="h-6 w-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-yellow-400 flex flex-col items-center justify-center gap-8 text-lg font-medium transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-6"
        >
          <svg
            className="h-6 w-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-black hover:text-white transition-all"
          >
            {link.name}
          </a>
        ))}

        <button className="bg-black text-yellow-400 px-6 py-2 rounded-full hover:bg-gray-800 transition-all">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
