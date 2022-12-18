import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isAdmin}=useSelector((store)=>store.Authreducer)
    if(!isAdmin){
        return <Navigate to={'/login'}/>
    }
  return children
   
}

export default PrivateRoute
