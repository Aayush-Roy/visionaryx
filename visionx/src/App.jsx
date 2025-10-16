
// import './App.css'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Card  from './components/Card'
import { Companies } from './components/Companies'
import { FAQ } from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import  Navbar  from './components/Navbar'
import Pricing from './components/Pricing'
import {Testimonials} from './components/Testimonials'
import InquiryForm from './components/ContactForm';

function App() {


  return (
   <>
   <Navbar/>
   <Hero/>
   <Companies/>
   <About/>
   <Card/>
   <FAQ/>
   <Testimonials/>
   <Features/>
   <Pricing/>
   <InquiryForm/>
   <Footer/>
   </>
  )
}

export default App
