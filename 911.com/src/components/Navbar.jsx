import { Box, Flex,  Image, Input, Text, } from '@chakra-ui/react';
import {BsCart3} from 'react-icons/bs';
import {IoIosSearch} from 'react-icons/io';
import React from 'react'
import { Link as BrowseLink, NavLink} from 'react-router-dom';
import logo from '../assets/logo.png'
import style from '../styles/Navbar.module.css'
import {SlUser} from 'react-icons/sl'
import { Dropdown } from './Dropdown';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {isAuth}=useSelector((store)=>store.Authreducer)
  return (
  <Box className={style.nav}>
     <Box width='98%' margin='auto' >{/*  main   */}
       <Flex  alignItems='center' gap='9'>
           <Box ><Image src={logo} alt='911.com'/></Box>
           <Flex width='52%' border='1px solid black' gap={2}>
              <Box><Input placeholder='Enter Your city'/></Box>
              <Box width='65%' display='flex' alignItems='center'><Input placeholder='Enter Your city'/><IoIosSearch size='21px'/></Box>
           </Flex>


           <Box>{isAuth?<SlUser/>:<NavLink to={'/signup'}>Login / Signup</NavLink>}</Box>
           <Box><Text>Offers</Text></Box>
           <Box><BsCart3 size='21px'/></Box>
           <Box><Text>NeedHelp</Text></Box>
       </Flex>
    </Box>

   <Box>
    <Dropdown/>
   </Box>
  </Box>
    
      
    )
}

export default Navbar
