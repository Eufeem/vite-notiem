import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <main style={{ display: 'flex'}}>
      <Sidebar />
      <div style={{ display: 'block', width: '100%' }}>
        <Navbar />
        <Content /> 
        <Footer />
      </div>
    </main>
  )
}

export default App
