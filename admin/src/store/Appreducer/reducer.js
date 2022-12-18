import { GET_ALLUSERS_FAILURE, GET_ALLUSERS_REQUEST, GET_ALLUSERS_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS} from "./action.type"

const initialState={
    isLoading:false,
    isError:false,
    data:[],
    userdetail:[]
}

export const reducer=(state=initialState,{type,payload})=>{
   // console.log(payload)
  switch(type){
    case(GET_PRODUCT_REQUEST):{
      
        return{
            ...state,
            isLoading:true,
            isError:false,
        }
    }
    case(GET_PRODUCT_FAILURE):{
        return{
            ...state,
            isLoading:false,
            isError:true,
        }
    }
    case(GET_PRODUCT_SUCCESS):{
        
        return{
            ...state,
            isLoading:false,
            isError:false,
            data:payload.data
           
        }
    }
   

    case(GET_ALLUSERS_REQUEST):{
      
        return{
            ...state,
            isLoading:true,
            isError:false,
        }
    }
    case(GET_ALLUSERS_FAILURE):{
        return{
            ...state,
            isLoading:false,
            isError:true,
        }
    }
    case(GET_ALLUSERS_SUCCESS):{
        
        return{
            ...state,
            isLoading:false,
            isError:false,
           userdetail:payload
           
        }
    }

    default:
        return state
}

}
