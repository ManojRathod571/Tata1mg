import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { close, open } from '../store/isOpen/isOpen.action'
import Dashboard from './Dashboard'
import DashboardNav from './DashboardNav'
import Reports from './Reports'
import SideBar from './Sidebar'
import Login from './Login'


export const DashRoute = () => {
  const dispatch=useDispatch()
  const [isOpen, setIsOpen] = useState(true);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
    dispatch(isOpen?close():open())

    
   // console.log(isOpen?"osdpifgiopjgvihd":"tueroiioertyiort")

  } 
  return (
    <> <DashboardNav onOpen={toggle} />
    <div> 
       <div>
        <SideBar isOpen={isOpen}/>
        </div>
        <div  style={{width:'100%', marginTop:'50px',height:'100vh'}}>
        <Routes>
          <Route path={'/login'} element={<Login/>}/>
            <Route path={'/dashboard'} element={<Dashboard/>}/>
            <Route path={'/reports'} element={<Reports/>}/>
        </Routes>
        </div>
      
    </div>
    </>
  )
}
