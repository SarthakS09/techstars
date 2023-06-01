import { useState, useEffect } from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Events from "./Pages/Events"
import Speakers from "./Pages/Speakers"
import Schedule from "./Pages/Schedule"
import About from "./Pages/About";
import PageNotFound from './Pages/PageNotFound';
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

function AnimatedBlob() {
  
  // getting window width
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', ()=>{
      setWidth(window.innerWidth);
    });
    return () => {
        window.removeEventListener('resize', ()=>{
          setWidth(window.innerWidth);
        });
    }
  }, []);
  
  // checking if display is mobile
  const isMobile = (width <= 768);
  if (!isMobile) {
    document.body.onpointermove = event => {
      const blob = document.getElementById('blob');
      const { clientX, clientY } = event;
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, {duration: 4000, fill: "forwards"})
    }
  }
}

function App() {
  // Initialising the Animate on Scroll (AOS) library
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/speakers" element={<Speakers/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
