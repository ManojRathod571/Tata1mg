import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { close, open } from '../store/isOpen/isOpen.action'
import Reports from './Reports'
import Login from './Login'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
import Product from '../page/Product'
import Users from '../page/Users'

export const DashRoute = () => {
  const dispatch=useDispatch()
  const [isOpen, setIsOpen] = useState(true);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
    dispatch(isOpen?close():open())

  

  } 
  return (
    <> 
    <div> 
      
        <div  style={{width:'100%', marginTop:'50px',height:'100vh'}}>
        <Routes>
          <Route path={'/'} element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/products'}  element={<PrivateRoute><Product/></PrivateRoute>}/>
          <Route path={'/users'}  element={<PrivateRoute><Users/></PrivateRoute>}/>
          <Route path={'/reports'} element={<PrivateRoute><Reports/></PrivateRoute>}/>
        </Routes>
        </div>
      
    </div>
    </>
  )
}
