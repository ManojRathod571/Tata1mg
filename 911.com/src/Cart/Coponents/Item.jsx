import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  ButtonGroup,
  Heading,
  Checkbox,
  Select,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Item() {
  const [quantity, setQuantity] = useState(1);
  const [data,setData] = useState([]);
 let totalPrice = 0

 


useEffect(()=>{
    // setLoading(true);
    getData()
    
    
  },[])

  const getData=()=>{
    return axios.get("https://tan-real-buffalo.cyclic.app/smartphones").then((res)=>{
       
        setData(res.data)
      
      })
      
  }

const removeOperation = (id)=>{
    return (
        axios.delete(`https://tan-real-buffalo.cyclic.app/smartphones/${id}`).then((res)=>{
            setData(res.data)
        //   setError(false)
        getData()
        })
       
    )
    
   
}



  console.log(data)

  return (

    
    <Box>
      <Text fontSize="16px" color="#333">
        Items NOT Requiring Prescription (1)
      </Text>

      {data && data.map((item)=>(

        <Box
        w="600px"
        bg="#fff"
        textAlign="left"
        padding="10px"
        lineHeight={1.8}
        shadow="0 1px 2px 0 rgb(0 0 0 / 20%)"
        borderRadius="2px"
        mt="3px"
      >
        <Box mb="16px" pt="10px">
          <Box
            display="flex"
            justifyContent="space-between"
            color="#333"
            fontSize="12px"
            fontWeight={700}
            
          >
            <Box>
              <Text  w="60%" >Dr. Morepen Omega 3 Triple Strength 1250mg Deep Sea Fish Oil with DHA & EPA 900mg Softgel</Text>
            </Box>
            <Box>
              <Text>₹128</Text>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            color="#9e9e9e"
            fontSize="10px"
            fontWeight={700}
            mt="8px"
          >
            <Box>
              <Text>tube of 100 ml Face Wash</Text>
            </Box>
            <Box>
              MRP <Text as="s">₹150</Text>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            fontSize="10px"
            mt="16px"
          >
            <Box display="flex" mt="10px" cursor="pointer" onClick={()=>removeOperation(item.id)}>
              <Image
                mr="4px"
                src="https://img.1mg.com/images/delete_icon.svg"
              />
              <Text fontWeight={700} color="#9e9e9e" fontSize="12px">
                Remove
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
             <button disabled={quantity==1}><Image
                src="https://www.1mg.com/images/minus-cart.svg"
                cursor="pointer" disable={quantity==1}
                onClick={() => setQuantity(quantity - 1)}
              /></button> 
              <Text color="#212121" fontSize="14px" mx="4px">
                {quantity}
              </Text>
              <Image disable={quantity==1}
                src="https://www.1mg.com/images/plus-cart.svg"
                cursor="pointer"
                onClick={() => setQuantity(quantity + 1)}
              />
            </Box>
            
          </Box>
          
        </Box>

        

        

    
      </Box>
      ))}

      
      <Divider/>
    </Box>
  );
}

export default Item;
