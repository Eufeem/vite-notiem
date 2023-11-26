import React, { Suspense } from 'react'
import Fallback from './Fallback'
import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Outlet />
    </Suspense>
  )
}

export default LayoutPublic