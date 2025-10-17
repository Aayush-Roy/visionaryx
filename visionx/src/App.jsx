
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Card from './components/Card';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import Features from './components/Features';
import InquiryForm from './components/ContactForm';
import AboutUs from './components/pages/AboutUs';
import Cards from './components/TravelListings/TravelCards';
import Footer from './components/Footer';
import HeroLmsSystem from './components/Hero2';
import { Reviews } from '@mui/icons-material';
import ReviewTestimonials from './components/Reviews';
import TravelCards from './components/TravelListings/TravelCards';
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/*  Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* <HeroLmsSystem/> */}
              <About />
              <Card />
              <FAQ />
              {/* <Testimonials /> */}
              <ReviewTestimonials/>
              {/* <Features /> */}
              <TravelCards/>
              {/* <InquiryForm /> */}
            </>
          }
        />

        {/* ℹ️ About Page */}
        <Route path="/about" element={<AboutUs />} />
         <Route path="/gallery" element={<Gallery />} />

        {/* 🏝️ Travel Listings */}
        <Route path="/listings" element={<Cards />} />

        {/* 📞 Contact Page */}
        <Route path="/contact" element={<InquiryForm/>} />

        {/* 404 - Page Not Found */}
        <Route
          path="*"
          element={
            <div className="text-center py-20 text-xl">
              <h2 className="font-bold text-3xl mb-4">404 - Page Not Found</h2>
              <p>Sorry, the page you’re looking for doesn’t exist.</p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
