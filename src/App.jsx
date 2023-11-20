import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Navbar from './components/Navbar'

function App() {

  return (
    <main style={{ display: 'flex'}}>
      <Sidebar />
      <div style={{ display: 'block', width: '100%' }}>
        <Navbar />
        <Content /> 
      </div>
    </main>
  )
}

export default App
