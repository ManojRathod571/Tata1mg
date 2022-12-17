import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { close, open } from '../store/isOpen/isOpen.action'
import Dashboard from './Dashboard'
import DashboardNav from './DashboardNav'
import Reports from './Reports'
import SideBar from './Sidebar'
import Login from './Login'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
import Product from '../page/Product'


export const DashRoute = () => {
  const dispatch=useDispatch()
  const [isOpen, setIsOpen] = useState(true);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
    dispatch(isOpen?close():open())

    
   // console.log(isOpen?"osdpifgiopjgvihd":"tueroiioertyiort")

  } 
  return (
    <> 
    <div> 
      
        <div  style={{width:'100%', marginTop:'50px',height:'100vh'}}>
        <Routes>
          <Route path={'/'} element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/products'}  element={<Product/>}/>
            <Route path={'/dashboard'} element={<Dashboard/>}/>
            <Route path={'/reports'} element={<Reports/>}/>
        </Routes>
        </div>
      
    </div>
    </>
  )
}
