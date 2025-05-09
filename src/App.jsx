import { useState } from 'react'
import './App.css'
import Nav from './components/nav/nav'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Main from './components/main/main'
import Section from './components/section/section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Header/>
    <Hero/>
    <Main/>
    <Section/>
    </>
  )
}

export default App
