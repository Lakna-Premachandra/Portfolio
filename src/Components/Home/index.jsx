import React from 'react'
import HeroSection from '../hero'
import About from '../about'
import Projects from '../projects'
import Contact from '../contact'
import Footer from '../common/footer'
import Header from '../common/header'
import Skills from '../skills'

export default function Home() {
  return (
    <>
       <Header/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}
