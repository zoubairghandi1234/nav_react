import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>from application</h1>
    </>
  )
}

export default App
