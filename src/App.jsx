import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"; 
import HeroSection from "./components/herosection/heroSection";
import Services from "./components/services/Services";
import WeOffer from "./components/weoffer/WeOffer";
import Image from "./components/image/Image";
import Payments from "./components/payments/Payments";
import InfoVideo from "./components/infovideo/InfoVideo";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/aboutus/AboutUs";
import Service from "./pages/service/Service";
import Referrals from "./pages/referrals/Referrals";
import Contact from "./pages/contact/Contact";
;

const AppWrapper = () => {
  const location = useLocation();

  // Pages where we DON'T want the background
  const noBgPaths = ["/aboutus", "/service", "/referrals"];

  // Conditionally add the background class
  const wrapperClass = noBgPaths.includes(location.pathname) ? "" : "bg-wrapper";

  return (
    <div className={wrapperClass}>
      <Navbar />
     

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Services />
              <WeOffer />
              <Image />
              <Payments />
              <InfoVideo />
              <Footer />
            </>
          }
        />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
