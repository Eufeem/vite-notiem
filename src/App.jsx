import { lazy } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// Pages Lazy Loading
const Layout = lazy(() => import('./components/Layout'))
const UserPage = lazy(() => import('./pages/user/UserPage'))
const RolePage = lazy(() => import('./pages/role/RolePage'))
const UserRolePage = lazy(() => import('./pages/user-role/UserRolePage'))
const NotFoundPage = lazy(() => import('./pages/notFound/NotFoundPage'))

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<UserPage />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/role' element={<RolePage />} />
            <Route path='/user-role' element={<UserRolePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* Toast */}
      <ToastContainer 
        limit={4}         
        newestOnTop={true}
        position="top-right"
        theme='light'/>
    </>

  )
}

export default App
