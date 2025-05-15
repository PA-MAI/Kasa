import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Header from './components/Header'
import Footer from './components/Footer'
import Apropos from './pages/Apropos'
import Error from './pages/Error'
import Logements from './pages/Logements'
import './styles/css/main.css'

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Logements/:id" element={<Logements />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="*" element={<Error />} />
         </Routes>
         <Footer />
      </Router>
   </StrictMode>,
)
