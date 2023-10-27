import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header'
import './Components/Header/Header.css'
import Button from './Components/Buttons/Button'
import Footer from './Components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Button />
    <Footer />
  </React.StrictMode>,
)
