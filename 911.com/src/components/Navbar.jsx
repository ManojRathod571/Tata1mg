import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Image, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react';

import {BsCart3} from 'react-icons/bs';
import {IoIosSearch} from 'react-icons/io';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import style from '../styles/Navbar.module.css'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
  <Box className={style.nav}>
     <Box width='98%' margin='auto' >{/*  main   */}
       <Flex  alignItems='center' gap='9'>
           <Box border='1px solid black'><Image src={logo} alt='911.com'/></Box>
           <Flex width='52%' border='1px solid black' gap={2}>
              <Box><Input placeholder='Enter Your city'/></Box>
              <Box width='65%' display='flex' alignItems='center'><Input placeholder='Enter Your city'/><IoIosSearch size='21px'/></Box>
           </Flex>


           <Box><Text>Login / Signup</Text></Box>
           <Box><Text>Offers</Text></Box>
           <Box><BsCart3 size='21px'/></Box>
           <Box><Text>NeedHelp</Text></Box>
       </Flex>
    </Box>
  </Box>
    
      
    )
}

export default Navbar
