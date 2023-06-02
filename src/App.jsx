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

function onDelete(id) {

}

function isPresent(id) {

}

function App() {
  // Initialising the Animate on Scroll (AOS) library
  useEffect(() => {
    AOS.init();
  }, [])

  // Initialising an object of preference mappings
  const [bookmarks, setBookmarks] = useState({
    'ashneerGrover': false,
    'nishantSuri': false,
    'triggeredInsaan': false,
    'saptarishi': false,
    'anshMehra': false,
    'zeroToOne': false,
    'startupFair': false,
    'pitchCafe': false,
    'raaz': false,
    'adMad': false,
    'sharkTank': false,
    'godfather': false,
    'socialIdeathon': false
  });

  // if (localStorage.getItem("bookmarks"))
  //   setBookmarks(JSON.parse(localStorage.getItem("bookmarks")));

  const toggleBookmark = (id) => {
    console.log('toggle called!')
    console.log(id)
    console.log(bookmarks[id])
    setBookmarks((prevBookmarks) => ({
      ...prevBookmarks, [id]: !prevBookmarks[id],
    }));
    console.log(bookmarks[id])
  }

  const hasOpted = (id) => {
    return bookmarks[id];
  }

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events toggleBookmark={toggleBookmark} hasOpted={hasOpted} />}/>
        <Route path="/speakers" element={<Speakers toggleBookmark={toggleBookmark} hasOpted={hasOpted} />}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
