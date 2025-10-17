
// // import './App.css'
// import About from './components/About'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import  Card  from './components/Card'
// import { Companies } from './components/Companies'
// import { FAQ } from './components/FAQ'
// import Features from './components/Features'
// import Footer from './components/Footer'
// import Hero from './components/Hero'
// import  Navbar  from './components/Navbar'
// import Pricing from './components/Pricing'
// import {Testimonials} from './components/Testimonials'
// import InquiryForm from './components/ContactForm';
// import AboutUs from './components/pages/AboutUs';
// import Cards from './components/TravelListings/TravelCards';

// function App() {


//   return (
//    <>
//    <Navbar/>
//    <Hero/>
//    <About/>
//    <Card/>
//    <FAQ/>
//    <Testimonials/>
//    <Features/>

//    <InquiryForm/>
//    <AboutUs/>

//    <Footer/>
//    </>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

        {/* 🏝️ Travel Listings */}
        <Route path="/listings" element={<Cards />} />

        {/* 📞 Contact Page */}
        <Route path="/contact" element={<InquiryForm />} />
         <Route path="/gallery" element={<Gallery />} />

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
