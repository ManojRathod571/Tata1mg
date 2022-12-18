import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { DashRoute } from './Dashboard/DashRoute';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from './Dashboard/Sidebar';
import { useState } from 'react';
import { close, open } from './store/isOpen/isOpen.action';
import DashboardNav from './Dashboard/DashboardNav';

function App() {
  const dispatch=useDispatch()
  const [isOpen, setIsOpen] = useState(true);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
    dispatch(isOpen?close():open())

    
   // console.log(isOpen?"osdpifgiopjgvihd":"tueroiioertyiort")

  } 
 
  return (
    <>
    <DashboardNav onOpen={toggle} />
     <div>
        <SideBar isOpen={isOpen}/>
        </div>
       <DashRoute/>
    </>
  );
}

export default App;
