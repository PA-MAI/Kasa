import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/pages/Home/Index.jsx'
import './styles/css/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
