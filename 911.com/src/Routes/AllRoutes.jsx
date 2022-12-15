import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes
