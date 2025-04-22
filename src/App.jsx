import { useState } from 'react'
import './App.css'
import Nav from './components/nav/nav'
import Header from './components/header/header'
import Hero from './components/hero/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Header/>
    <Hero/>
    </>
  )
}

export default App
