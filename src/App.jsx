import React from "react";
import Navbar from "./components/navbar/Navbar"; // adjust the path if your Navbar is in a different folder
import HeroSection from "./components/herosection/heroSection";

function App() {
  return (
    <div className= "bg-wrapper">
      <Navbar />
       <HeroSection/>  
      
    </div>
  );
}

export default App;
