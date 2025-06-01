import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='mx-20 sm:mx[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/doctor/:speciality' element={<Doctor />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
      <div className='text-center'>
        <h1 className='text-gray-400 font-bold'>Copyright © 2025 Prescripto - All Right Reserved.</h1>
      </div>
    
    </div>
  )
}

export default App