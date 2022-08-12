import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Summary />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
