import React from "react";

import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HistorySection from "./components/HistorySection";
import Jumbotron from "./components/Jumbotron";
import Navbar from './components/Navbar';
import Title from "./components/Title";
import FormSection from "./components/FormSection";
import ContactInfoSection from "./components/ContactInfoSection";

import "./assets/styles.css";


function App() {
  return (
    <>
      <header>
        <Navbar/>
        <Jumbotron/>
      </header>
      <body>
        <div className="container">
          <Title/>
          <AboutSection/>
          <HistorySection/>
          <FormSection/>
          <ContactInfoSection/>
        </div>
      </body>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
