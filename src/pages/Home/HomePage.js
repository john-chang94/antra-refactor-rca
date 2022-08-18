import React from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Main from "../../components/Main";
import Projects from "../../components/Projects";
import Summary from "../../components/Summary";

export default function HomePage() {
  return (
    <>
      <Main />
      <About />
      <Summary />
      <Projects />
      <Contact />
    </>
  );
}
