import React from 'react'

import Header from "./components/header/header"
import Nav from "./components/nav/nav"
import About from "./components/about/about"
import Competence from "./components/competence/competence"
import Projects from "./components/projects/projects"
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer"

export const App = () => {
  return (
    //importer les components dans l'ordre du site
    <>
      <Header />
      <Nav /> 
      <About />
      <Competence />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
