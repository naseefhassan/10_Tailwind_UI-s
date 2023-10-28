import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Componenets/Header/Header'
import Body from './Componenets/Body/Body'
import Footer from './Componenets/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>,
)
