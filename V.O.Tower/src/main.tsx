import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/Header/Header.tsx'
import Body from './Components/Body/Body.tsx'
import './Components/Body/Body.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
)
