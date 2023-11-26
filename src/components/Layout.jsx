import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

// Components
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Fallback from './Fallback'

const Layout = () => {
  return (
    <main style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ display: 'block', width: '100%', height: '100' }}>
        <Navbar />
        <Suspense fallback={<Fallback />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  )
}

export default Layout