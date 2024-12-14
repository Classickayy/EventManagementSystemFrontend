import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import RsvpConfirmPage from './pages/RsvpConfirmPage'
import LoginPage from './pages/loginPage'
import DiscoverPage from './pages/DiscoverPage'
import CalendarPage from './pages/CalendarPage'
import AdminPage from './pages/AdminPage'
import SignUpPage from './pages/SignUpPage'

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/discover' element={<DiscoverPage/>} />
        <Route path='/calendar' element={<CalendarPage/>} />
        <Route path='/rsvpconfirm' element={<RsvpConfirmPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
      </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App