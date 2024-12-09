import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import FloatingButton from "./components/FloatingButton";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Footer from "./Pages/Footer";
import Solution from "./Pages/Solution";
import HeroSection from "./components/HeroSection";
import CustomerReview from "./Pages/CustomerReview";

function App() {
  return (
    <>
      <HomePage />
      <AboutUs />
      {/* <Services /> */}
      <Footer />
      {/* <Solution />
      <CustomerReview />
      <FloatingButton /> */}
    </>
  );
}

export default App;
