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
  Icon
} from "@chakra-ui/react";
import { ChevronRightIcon, InfoOutlineIcon,LockIcon } from "@chakra-ui/icons";
import { MdLocationOn } from 'react-icons/md'

import CartNavBar from "./CartNavBar";
import Coupon from "./Coponents/Coupon";

function Cart() {
  return (
    <Box backgroundColor="#f8f8f8FF">
      <CartNavBar />

      
        

            <Box width="80%" margin="auto" py="30px" >

            <Box display="flex" w="fit-content" gap={8} margin="auto">

                {/* Left section */}
<Box>
    <Text>Items NOT Requiring Prescription (1)</Text>
        
{/* Check health section */}

<Box mt="10px">
  <Box
    w="600px"
    bg="#fff"
    textAlign="left"
    shadow="md"
    borderRadius="2px"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      cursor="pointer"
      padding="12px 16px"
      bg="#fffcf8"
    >
      <Box display="flex">
        <Box
          fontSize="16px"
          fontWeight="500"
          ml="10px"
          color="#2b2b2b"
        >
          <Text as="h4">Check the health of your vital organs</Text>
        </Box>
      </Box>

      <Box>
        <InfoOutlineIcon boxSize={6} />
      </Box>
    </Box>
    <Box
      w="449px"
      pt="12px"
      px="16px"
    >
      <Box padding="4px 0px">
      <Checkbox size='lg' colorScheme='red' >
          <Text fontSize="14px" color="rgba(33,33,33,.87)">Book Good Health Silver Package for just ₹649</Text>
      
</Checkbox>
<Box ml="30px" mb="6px" fontSize="12px" lineHeight="18px" maxWidth="70%" >
<Text color="#616161" >
        Get the tests done easily from your home. This package will help you in identifying potential disorders and deficiencies at an early stage.

        </Text>
        <Text color="#1aab2a">Pay later on home sample collection</Text>

</Box>
        
      </Box>
    </Box>
  </Box>
</Box>

</Box>


{/* Right Section */}
<Box>
<Coupon/>

{/* bill */}

<Box mt="16px">
  <Box
    w="449px"
    bg="#fff"
    textAlign="left"
    borderRadius="2px"
    px="12px"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      cursor="pointer"
      py="12px"
      borderBottom="1px solid #c7c7c7"
      
    >
        <Box display="flex" alignItems="center" >
        <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/v1645088829/210921_TataNeu_appicon_light_24px_circle_3_1x_vxwibw.png" w="36px" h="36px"/>
        <Text fontSize="16px" color="#333" fontWeight={600}>My NeuCoins</Text>

        </Box>

        <Box display="flex" alignItems="center" fontSize="11px" color="#767676" >
        
        <Text>Balance: <b>0 NeuCoin</b> </Text>

        </Box>
        
      
    </Box>
    <Box
      w="449px"
      pt="12px"
      pb="20px"
      px="16px"
    >
        <Text fontWeight="400"> <Text as="span" fontSize="20px" fontWeight="600">1.28</Text> NeuCoins <Text as="span" fontSize="12px">to be earned on this order*</Text></Text>
        <Box display="flex" textAlign="center">
            <Box display="flex" alignItems="center" bg="#ffe0ccFF" padding="4px" mt="3px">
            <LockIcon color="#8a2422" boxSize={3}/>
            <Text color="#8a2422" fontSize="11px" fontWeight="600" ml="8px">Extra 6.4 NeuCoins for care Plan members</Text>

            </Box>
            <Box ml="4px">
                <InfoOutlineIcon boxSize={3} />
            </Box>
            
        </Box>
        <Text color="#ff6f61" fontSize="14px" mt="16px" fontWeight="600" cursor="pointer">Add care plan to cart</Text>

    </Box>
  </Box>
</Box>


{/* checkout button */}

<Box mt="16px">
  <Box
    w="449px"
    bg="#fff"
    textAlign="left"
    borderRadius="2px"
    padding="8px 16px 12px"
  >
   
   <Box display="flex" justifyContent="space-between" padding="8px" margin="0 8px" mb="5px">
    <Text color="#757575" fontSize="14px">Your delivery location</Text>
    <Box display="flex" alignItems="center" >
    <Icon as={MdLocationOn} color="#ff6f61"/><Text color="#ff6f61" fontWeight="700">Koppal</Text>
    </Box>
    
   </Box>
   <Button
                        w="100%" 
                        colorScheme="red"
                        variant="solid"
                        padding="0px 16px"
                        fontWeight="400"
                        fontSize="16px"
                        h="50px"
                      >
                        CHECKOUT
                      </Button>
  </Box>
</Box>




</Box>


            </Box>
            </Box>
        
      
    </Box>
  );
}

export default Cart;
