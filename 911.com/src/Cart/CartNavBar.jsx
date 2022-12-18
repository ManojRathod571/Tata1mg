import React from "react";
import {
  Box,
  Flex,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import logo from '../assets/logo.png'
import { IoIosSearch } from "react-icons/io";

function CartNavBar() {
  return (
    <Box bg="#fff" borderBottom="1px solid #f1f4f6">
      <Flex gap="2" minWidth="max-content" alignItems="center">
        <Box>
          <Image src={logo} alt="911.com" width="80%" />
        </Box>
        <Box
          w="50%"
          p="4"
          bg="#f1f4f6"
          display="flex"
          height="35px"
          alignItems="center"
        >
          <Input
            border="none"
            variant="unstyled"
            placeholder="Search for Medicines and Health Products"
          />
          <IoIosSearch cursor="pointer" size="21px" />
        </Box>
        <Spacer />
        <Box cursor="pointer">
          <Text fontSize="14px" px="15px">
            Need help?
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default CartNavBar;
