import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Apropos from './components/pages/Apropos'
import P404 from './components/pages/P404'
import Logements from './components/pages/Logements'
import './styles/css/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/Logements/:id" element={<Logements />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/P404" element={<P404 />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
