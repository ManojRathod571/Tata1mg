import axios from "axios"
import { getData } from "../../utils/storage";
import {url} from "../../utils/url"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "./action.type";


export const Signin=(payload)=>(dispatch)=>{
    console.log(url);
     dispatch(Signin_request())
 
         return  axios.post(`${url}/auth/login`,payload).then((res)=>{
          console.log(res,'pot')
             dispatch({ type: LOGIN_SUCCESS,payload:res.data});

             return (res.data.login)
         }).catch((err)=>{
             dispatch(Signin_failure())
         })
        
    
 }
 

 export const Signin_request=()=>{
     return {
         type:LOGIN_REQUEST
     }
 }
 
 export const Signin_failure=()=>{
     return {
         type:LOGIN_FAILURE
     }
 }

export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT_SUCCESS})
 }