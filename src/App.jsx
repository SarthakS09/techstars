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


function App() {
  // Initialising the Animate on Scroll (AOS) library
  useEffect(() => {
    AOS.init();
  }, [])

  // Fetching previous preferences from local storage.
  // If no preference history is found, all bookmarks are assumed to be 'false'.
  let temp;
  if (localStorage.getItem("bookmarks"))
    temp = JSON.parse(localStorage.getItem("bookmarks"));
  else
    temp = {
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
    };

  // Creating a new object called 'bookmarks'. This is the object that will be used and
  // passed around to keep track of user preferences in real time. In case of any changes
  // to 'bookmarks' (such as the user adding or removing bookmarks to one or more events),
  // the instance present in local storage will also update to mirror the change.
  const [bookmarks, setBookmarks] = useState(temp);
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
  }, [bookmarks])

  // Helper functions to toggle the current bookmark state for a given 'id'
  // and a function to simply return the state for a given 'id'.
  const toggleBookmark = (id) => {
    setBookmarks((prevBookmarks) => ({
      ...prevBookmarks, [id]: !prevBookmarks[id],
    }));
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
        <Route path="/schedule" element={<Schedule toggleBookmark={toggleBookmark} hasOpted={hasOpted}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
