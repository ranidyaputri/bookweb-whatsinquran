import { useState } from 'react'
import './App.css'
import Navbar from './components/header/navbar'
import Footer from './components/footer/footer'
import Hero from './components/landing/hero'
import Book from './components/landing/book-section'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Book />
      <Footer />
    </>
  )
}

export default App
