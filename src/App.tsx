import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import FloatingButton from './components/FloatingButton';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Footer from './Pages/Footer';

function App() {
  return (
    <>
      <HomePage />
      <AboutUs />
      <Services />
      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;
