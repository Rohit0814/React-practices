import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
