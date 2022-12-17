import axios from "axios"
import { getData } from "../../utils/storage";
import {url} from "../../utils/url"
import { GET_PRODUCT_REQUEST,GET_PRODUCT_FAILURE,GET_PRODUCT_SUCCESS,ADD_PRODUCT_REQUEST,ADD_PRODUCT_FAILURE,ADD_PRODUCT_SUCCESS,UPDATE_PRODUCT_REQUEST,UPDATE_PRODUCT_FAILURE,UPDATE_PRODUCT_SUCCESS,DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_FAILURE,DELETE_PRODUCT_SUCCESS} from "./action.type";


export const getProduct=()=>(dispatch)=>{
    dispatch(getProduct_request())
    let token=getData('admintoken')
  try {
    return axios.get(`${url}/product/allproduct`,{
        headers:{
            authorization :`Bearer ${token}`
        }
    }).then((res)=>{
        console.log(res);
         dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch((err)=>{
    dispatch(getProduct_failure())
    })
  } catch (error) {
    
  }
    
 }
 

 export const getProduct_request=()=>{
     return {
         type:GET_PRODUCT_REQUEST
     }
 }
 
 export const getProduct_failure=()=>{
     return {
         type:GET_PRODUCT_FAILURE
     }
 }


 export const addProduct=(payload)=>(dispatch)=>{
  
    dispatch(addProduct_request())
    let token=getData('admintoken')
  try {
    return axios.get(`${url}/product/allproduct`,payload,{
        headers:{
            authorization :`Bearer ${token}`
        }
    }).then((res)=>{

    }).catch((err)=>{
    dispatch(addProduct_failure())
    })
  } catch (error) {
    
    
 }
}
 

 export const addProduct_request=()=>{
     return {
         type:ADD_PRODUCT_REQUEST
     }
 }
 
 export const addProduct_failure=()=>{
     return {
         type:ADD_PRODUCT_FAILURE
     }
 }



 export const updateProduct=(payload)=>(dispatch)=>{
    dispatch(updateProduct_request())
    let token=getData('admintoken')
  try {
    return axios.get(`${url}/product/allproduct`,payload,{
        headers:{
            authorization :`Bearer ${token}`
        }
    }).then((res)=>{

    }).catch((err)=>{
    dispatch(updateProduct_failure())
    })
  } catch (error) {
    
        
    
 }
}
 

 export const updateProduct_request=()=>{
     return {
         type:UPDATE_PRODUCT_REQUEST
     }
 }
 
 export const updateProduct_failure=()=>{
     return {
         type:UPDATE_PRODUCT_FAILURE
     }
 }


 export const deleteProduct=(payload)=>(dispatch)=>{
   
    dispatch(deleteProduct_request())
    let token=getData('admintoken')
  try {
    return axios.get(`${url}/product/allproduct/${payload}`,{
        headers:{
            authorization :`Bearer ${token}`
        }
    }).then((res)=>{

    }).catch((err)=>{
    dispatch(deleteProduct_failure())
    })
  } catch (error) {
    
        

 }
}
 

 export const deleteProduct_request=()=>{
     return {
         type:DELETE_PRODUCT_REQUEST
     }
 }
 
 export const deleteProduct_failure=()=>{
     return {
         type:DELETE_PRODUCT_FAILURE
     }
 }

