import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/navbar'
import Footer from './components/footer/footer'
import Hero from './components/landing/hero'
import Book from './components/landing/book-section'
import BookCollection from './components/book/book-collection'
import BookDetail from './components/book/book-detail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<> <Hero /><Book /> </>} />
          <Route path='/collection' element={<> <BookCollection /> </>} />
          <Route path='/book-detail' element={<> <BookDetail /> </>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
