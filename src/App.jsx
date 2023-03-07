import Navbar from "./Components/Navbar";
import { useState, useEffect } from 'react';
import './App.css'
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function handleWindowSizeChange() {
    
}

function App() {

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
  const isMobile = width <= 768;
  if (!isMobile) {
    document.body.onpointermove = event => {
      const blob = document.getElementById('blob');
      const { clientX, clientY } = event;
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, {duration: 4000, fill: "forwards"})
    }
  } else {
    const blob = document.getElementById('blob');
    blob.animate({
      left: `50%`,
      top: `50%`
    }, {duration: 4000, fill: "forwards"})
  }

  return (
    <>
      <div id="blob" className={isMobile ? "blob-small" : ""}></div>
      <div id={isMobile ? "blur-less" : "blur"}></div>
      <Navbar/>
      <Home/>
      <p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p>
      <Footer/>
    </>
  );
}

export default App;
