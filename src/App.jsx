import Navbar from "./Components/Navbar";
import { useState, useEffect } from 'react';
import './App.css'

function handleWindowSizeChange() {
    
}

function App() {
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
  }
  if (isMobile) {
    return (
      <>
      <div id="blob" className="blob-small"></div>
      <div id="blur"></div>
      <Navbar/>
      <p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p>
      </>
    );
  } else {
    return (
      <>
      <div id="blob"></div>
      <div id="blur"></div>
      <Navbar/>
      <p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p>
      </>
    );
  }
}

export default App;
