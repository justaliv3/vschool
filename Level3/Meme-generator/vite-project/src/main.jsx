import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './header.jsx'
import Meme from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Meme />
  </React.StrictMode>,
)
