
import React from 'react'
import './index.css'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
      <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Features></Features>
      <Story></Story>
      <Contact></Contact>
      <Footer></Footer>
      </main>
    
  )
}

export default App
// 8:42
