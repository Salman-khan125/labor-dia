import React from "react";
import Navbar from "./components/navbar/Navbar"; // adjust the path if your Navbar is in a different folder
import HeroSection from "./components/herosection/heroSection";
import Services from "./components/services/services";
import WeOffer from "./components/weoffer/WeOffer";
import Image from "./components/image/Image";
import Payments from "./components/payments/Payments";

function App() {
  return (
    <div className= "bg-wrapper">
      <Navbar />
       <HeroSection/>  
       <Services/>
       <WeOffer/>
       <Image/>
       <Payments/>
      
    </div>
  );
}

export default App;
