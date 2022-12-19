import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./action.type"

const initialState={
     isLoading:false,
     isError:false,
    productdata:[]
}


export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
      case(GET_PRODUCT_REQUEST):{
        return{
            ...state,
            isLoading:true,
            isError:false
        }
      }

      case(GET_PRODUCT_FAILURE):{
        return{
            ...state,
            isLoading:false,
            isError:true
        }
      }


      case(GET_PRODUCT_SUCCESS):{
        return{
            ...state,
            isLoading:false,
            isError:false,
            productdata:payload
        }
      }

    default:
        return state
    }
}