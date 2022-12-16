import axios from "axios"
import { getData } from "../../utils/storage";
import {url} from "../../utils/url"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./action.type"

export const Signup=(payload)=>(dispatch)=>{
   console.log(payload);
    dispatch(Signup_request())
let token=getData('token')||'abc'
        return  axios.post(`${url}/signup`, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${token}`
            },
        }).then((res)=>{
          console.log(res.data.msg)
            dispatch({ type: SIGNUP_SUCCESS });
            return {msg:res.data}
        }).catch((err)=>{
            dispatch(Signup_failure())
        })
       
   
}

export const Signup_request=()=>{
    return {
        type:SIGNUP_REQUEST
    }
}

export const Signup_failure=()=>{
    return {
        type:SIGNUP_FAILURE
    }
}
export const Signin=(payload)=>(dispatch)=>{
    //console.log(payload);
     dispatch(Signin_request())
 
         return  axios.post(`${url}/login`, payload).then((res)=>{
          // console.log(res.data,'pot')
             dispatch({ type: LOGIN_SUCCESS,payload:res.data});
             return {msg:res.data}
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