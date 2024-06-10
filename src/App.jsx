import React, { useState, useEffect } from 'react';

import Navbar from "./components/Navbar";
import Banner from "./components/Banner/Banner.jsx";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import WhyChoose from "./components/WhyChoose/WhyChoose.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";


// import PrimaryButton from './components/Shared/PrimaryButton';

const App = () => {
  const [showPopup , setShowPopup] = React.useState(false);
  const HandlePopup = () => {
    setShowPopup(true); 
  };
  

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration : 800,
      easing: "ease-in-sine",
      delay: 100,

    });
    AOS.refresh();
  }, [])
  return (
    <div 
    className="overflow-x-hidden">
      <Navbar  HandlePopup ={HandlePopup}/>
      <Hero />
      <Banner />
      <WhyChoose />
      <About  HandlePopup ={HandlePopup}/>
      <Banner />     
      <Footer />
      {/* <HandlePopup/> */}
      < Popup showPopup = {showPopup} setShowPopup={setShowPopup} />
     
    </div>
  );
};

export default App;






