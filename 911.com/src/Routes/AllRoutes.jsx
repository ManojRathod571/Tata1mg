import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HealthCenter from '../components/HealthCenter/HealthCenter'
import ALLProductsBrands from '../components/LandingPage/Page/homepage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/homePage" element={<ALLProductsBrands />} />
        <Route path="/AllDiseasePage" element={<HealthCenter />} />
      </Routes>
    </>
  )
}

export default AllRoutes
