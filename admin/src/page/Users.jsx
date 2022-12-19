import React from 'react'
import UserCard from '../components/UserCard'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUsers } from '../store/Appreducer/action'

const Users = () => {
    const dispatch=useDispatch();
    const {userdetail}=useSelector((store)=>store.Appreducer)
    const {isopen}=useSelector((store)=>(store.isOpen))

    useEffect(()=>{
     dispatch(getUsers())
    },[])
    console.log(userdetail,'page');
  return (
    <div className='universal' style={isopen?{width:"85%"}:{width:"96%"}}>
      <UserCard users={userdetail}/>
    </div>
  )
}

export default Users
