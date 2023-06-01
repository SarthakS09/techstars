// DEPRECATED COMPONENT
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: 'smooth' keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      bottom: "100vh",
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <button
      type="button"
      className={`scrollToTop scroll-btn ${isVisible ? "show" : ""}`}
      onClick={scrollToTop} >
      <i className="far fa-arrow-up"/>
    </button>
  );
}