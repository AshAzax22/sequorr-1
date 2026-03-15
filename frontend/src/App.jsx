import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Features from './pages/features/Features'
import About from './pages/about/About'
import Blogs from './pages/blogs/Blogs'
import ContactUs from './pages/contactUs/ContactUs'
import Blog from './pages/blog/Blog'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App