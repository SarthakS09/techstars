import Navbar from "./Components/Navbar";
import './App.css'

function App() {
  document.body.onpointermove = event => {
    const blob = document.getElementById('blob');
    const { clientX, clientY } = event;
    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, {duration: 2000, fill: "forwards"})
  }

  return (
    <>
    <div id="blob"></div>
    <div id="blur"></div>
    <Navbar/>
    <p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p>
    </>
  );
}

export default App;
