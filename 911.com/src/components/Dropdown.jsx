import { NavLink } from "react-router-dom"
import styles from "../styles/Navbar.module.css"
import {BiSearch} from "react-icons/bi"
import {HiShoppingBag} from 'react-icons/hi'
import {AiOutlineHeart} from "react-icons/ai"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure, VStack } from '@chakra-ui/react';


export const Dropdown=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <Box className={styles.dropdown_container}>
        <Flex gap={4}>
            <Box className={styles.dropdown_category_hoverbox_container}>
                <Box className={styles.main_category}><NavLink >Health Resource Center</NavLink></Box>

                <Box className={styles.hover_box}>
                    <NavLink className={styles.hover_box_category_heading}>All Medicines</NavLink>
                    <NavLink className={styles.hover_box_category_heading}>All Diseases</NavLink>
                    <NavLink className={styles.hover_box_category_heading}>Medicines by Therapeutic Class</NavLink>
                </Box>
               
            </Box>

           <Box className={styles.dropdown_category_hoverbox_container}>
                <Box className={styles.main_category}><NavLink><Text>Vitamins & Nutrition</Text></NavLink></Box>

                <Box className={styles.hover_box} >
                    <Box display='flex' gap={3}  padding='8px'>
                        <Box className={styles.hover_sub_category_box}   border='none'>
                            <Box  className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Vitamins & Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Multivitamins</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamins A-Z</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Mineral Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamin B12 & B Complex</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Vitamins & Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Multivitamins</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamins A-Z</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Mineral Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamin B12 & B Complex</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Vitamins & Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Multivitamins</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamins A-Z</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Mineral Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamin B12 & B Complex</NavLink>
                            </Box>
                        </Box>

                 
                    <Box className={styles.hover_sub_category_box}>
                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Vitamins & Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Multivitamins</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamins A-Z</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Mineral Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamin B12 & B Complex</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamin B12 & B Complex</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Vitamins & Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Multivitamins</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamins A-Z</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Mineral Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamin B12 & B Complex</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Vitamins & Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Multivitamins</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamins A-Z</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Mineral Supplements</NavLink>
                        </Box>
                        </Box>


                        <Box className={styles.hover_sub_category_box_last}>
                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Health Resource Center</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Health Resource Center</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Health Resource Center</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Health Resource Center</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Health Resource Center</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Health Resource Center</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Health Resource Center</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Health Resource Center</NavLink>
                            </Box>

                            <Box>
                             <NavLink className={styles.hover_box_category_heading}>Health Resource Center</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Health Resource Center</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Health Resource Center</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Health Resource Center</NavLink>
                            </Box>
                        </Box>
                    </Box>
                   
                </Box>
               
            </Box>

         {/*     <Box>
                <Box><NavLink>Vitamins & Nutrition</NavLink></Box>

                <Box className={styles.hover_box}>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                </Box>
               
            </Box>

            <Box>
                <Box><NavLink>Vitamins & Nutrition</NavLink></Box>

                <Box className={styles.hover_box}>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                </Box>
               
            </Box>


            <Box>
                <Box><NavLink>Vitamins & Nutrition</NavLink></Box>

                <Box className={styles.hover_box}>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                </Box>
               
            </Box>

            <Box>
                <Box><NavLink>Vitamins & Nutrition</NavLink></Box>

                <Box className={styles.hover_box}>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                </Box>
               
            </Box>

            <Box>
                <Box><NavLink>Vitamins & Nutrition</NavLink></Box>

                <Box className={styles.hover_box}>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                </Box>
               
            </Box>

            <Box>
                <Box><NavLink>Vitamins & Nutrition</NavLink></Box>

                <Box className={styles.hover_box}>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                    <NavLink className={styles.display_block}>Health Resource Center</NavLink>
                </Box>
               
            </Box> */}

        </Flex> 
    </Box>
}