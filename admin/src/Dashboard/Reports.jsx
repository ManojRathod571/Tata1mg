import React from 'react'
import img from '../assets/reports.png'
import "../App.css";
import { useSelector } from 'react-redux';
const Reports = () => {
  const {isopen}=useSelector((store)=>(store.isOpen))
  //console.log(x);
  return(
    <div className='universal' style={isopen?{width:"85%"}:{width:"96%"}}>
      <img src={img} alt='' />
    </div>
  )
}

export default Reports