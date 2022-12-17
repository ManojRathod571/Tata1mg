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
  Link
} from "@chakra-ui/react";
import { ChevronRightIcon, InfoOutlineIcon, LockIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";

import CartNavBar from "./CartNavBar";
import Coupon from "./Coponents/Coupon";
import Bill from "./Coponents/Bill";
import Item from "./Coponents/Item"

import Adress from "./Adress";

function Cart() {
  return (
    <Box backgroundColor="#f8f8f8FF">
      <CartNavBar />

      <Box width="80%" margin="auto" py="30px">
        <Box display="flex" w="fit-content" gap={8} margin="auto">
          {/* Left section */}
          <Item/>

          {/* Right Section */}
          <Box>
            <Coupon />

            {/* bill */}

            <Bill />

            {/* checkout button */}

            <Box mt="16px">
              <Box
                w="449px"
                bg="#fff"
                textAlign="left"
                borderRadius="2px"
                padding="8px 16px 12px"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  padding="8px"
                  margin="0 8px"
                  mb="5px"
                >
                  <Text color="#757575" fontSize="14px">
                    Your delivery location
                  </Text>
                  <Box display="flex" alignItems="center">
                    <Icon as={MdLocationOn} color="#ff6f61" />
                    <Text color="#ff6f61" fontWeight="700">
                      Koppal
                    </Text>
                  </Box>
                </Box>
                <a href="/Adress">
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
                </a> 
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
