import React from "react";
import Navbar from "./components/navbar/Navbar"; 
import HeroSection from "./components/herosection/heroSection";
import Services from "./components/services/Services";
import WeOffer from "./components/weoffer/WeOffer";
import Image from "./components/image/Image";
import Payments from "./components/payments/Payments";
import InfoVideo from "./components/infovideo/InfoVideo";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className= "bg-wrapper">
      <Navbar />
       <HeroSection/>  
       <Services/>
       <WeOffer/>
       <Image/>
       <Payments/>
       <InfoVideo/>
       <Footer/>
      
    </div>
  );
}

export default App;
