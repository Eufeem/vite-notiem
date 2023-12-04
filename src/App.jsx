import { lazy, useEffect, useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { successNotification } from './utils/notification';

// Pages Lazy Loading
const Layout = lazy(() => import('./components/Layout'))
const LayoutPublic = lazy(() => import('./components/LayoutPublic'))
const LoginPage = lazy(() => import('./pages/login/LoginPage'))
const UserPage = lazy(() => import('./pages/user/UserPage'))
const RolePage = lazy(() => import('./pages/role/RolePage'))
const NotFoundPage = lazy(() => import('./pages/notFound/NotFoundPage'))

export const App = () => {

  const [token, setToken] = useState('0')
  useEffect(() => {
    sessionStorage.setItem('token', '12345')
    setToken(sessionStorage.getItem('token'))
    // console.log('hi');

  }, null)


  // if (token == 0) {
  //   // console.log(token);
  //   return (
  //     <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={<LayoutPublic />}>
  //         {/* <Route index element={<LoginPage />} /> */}
  //         <Route path='/login' element={<LoginPage />} />
  //         <Route path='*' element={<NotFoundPage />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>  
  //   )
  // } else {
  //   // console.log(token);
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path='/' element={<Layout />}>
  //           <Route index element={<UserPage />} />
  //           <Route path='/user' element={<UserPage />} />
  //           <Route path='*' element={<NotFoundPage />} />
  //         </Route>
  //       </Routes>
  //     </BrowserRouter>
  //   )
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<UserPage />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/role' element={<RolePage />} />
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
