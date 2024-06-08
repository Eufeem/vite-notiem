import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

// Components
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Fallback from './Fallback'
import Sidebar2 from './Sidebar2'

const Layout = () => {

  const isAdmin = true;

  return (
    <>
      {
        isAdmin ? (
          <main style={{ display: 'flex' }}>
            <Sidebar2 />
            <div style={{ display: 'block', width: '100%', height: '100' }}>
              <Navbar />
              <Suspense fallback={<Fallback />}>
                <Outlet />
              </Suspense>
            </div>
          </main>
        ) : (
          <Suspense fallback={<Fallback />}>
            <Outlet />
          </Suspense>
        )
      }
    </>
  )
}

export default Layout