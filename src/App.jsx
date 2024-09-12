import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Features from './components/Features'
import PriceCard from './components/PriceCard'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Panel from './components/Panel'
import Article from './components/Article'

function App() {
 

  return (
    <>
      <Navbar/>
      <Panel/>
      <Features/>
      <PriceCard/>
      <Testimonials/>
      <Article/>
      <Footer/>
    </>
  )
}

export default App
