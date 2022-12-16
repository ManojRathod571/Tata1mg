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
                             <NavLink className={styles.hover_box_category_heading}>Protein Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Whey Protein</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Amino Acids</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Mass Gainers</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Workout Essential</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Fat Burners</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Omega & Fish Oil</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Fish Oil</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Cod Liver Oil</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Flax Seed Oil</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Immunity Boosters</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Chyawanprasha</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamin C</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Herbal Teas</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Antioxidant Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Ayurvedic Supplements</NavLink>
                        </Box>
                        </Box>


                        <Box className={styles.hover_sub_category_box_last}>
                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Specialty Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Plant based Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Beauty Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Pre and Probiotics</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Glucosamine</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Collagen</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Antioxidants</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Biotin</NavLink>
                            </Box>

                            <Box>
                             <NavLink className={styles.hover_box_category_heading}>Weight Management</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Weight Management Herbs</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Meal Replacements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Weight Gain</NavLink>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>



            <Box className={styles.dropdown_category_hoverbox_container}>
                <Box className={styles.main_category}><NavLink><Text>Diabetes</Text></NavLink></Box>

                <Box className={styles.hover_box} >
                    <Box display='flex' gap={3}  padding='8px'>
                        <Box className={styles.hover_sub_category_box}   border='none'>
                            <Box  className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Diabetes Monitoring</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Blood Glucose Monitors</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Test Strips & Lancets</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Syringes & Pens</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Sugar Free</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Diabetic Medicines</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamins, Minerals & Antioxidants</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Homeopathy Medicines</NavLink>
                            </Box>
                        </Box>

                 
                    <Box className={styles.hover_sub_category_box}>
                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Sugar Substitutes</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Diabetic Diet</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Juices & Vinegars</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Diabetic Nutrition Supplements</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Diabetic Foot Health</NavLink>
                        </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>



            <Box className={styles.dropdown_category_hoverbox_container}>
                <Box className={styles.main_category}><NavLink><Text>Healthcare Devices</Text></NavLink></Box>

                <Box className={styles.hover_box} >
                    <Box display='flex' gap={3}  padding='8px'>
                        <Box className={styles.hover_sub_category_box}   border='none'>
                            <Box  className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Top brands in Healthcare Devices</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Dr. Morepen Devices</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Accu-chek</NavLink>
                             <NavLink className={styles.hover_box_category_text}>OneTouch</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Omron</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Contour</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Dr Trust</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>BP Monitors</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Oxygen Concentrators & Cans</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Weighing Scales</NavLink>
                             <NavLink className={styles.hover_box_category_text}>IR Thermometers</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Weighing Scales</NavLink>
                            </Box>
                        </Box>

                 
                    <Box className={styles.hover_sub_category_box}>
                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Masks (N95, Surgical and more)</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Face Shield</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Surgical Masks</NavLink>
                             <NavLink className={styles.hover_box_category_text}>N95 Masks</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Nebulizers & Vaporizers</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Oximeters & Pedometers</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Vital Signs Monitors & Wearables</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Body Massager</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Diabetes Monitors</NavLink>
                        </Box>


                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Mobility Equipments</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Exercise Equipments</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Doctor's Corner</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Stethoscopes</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Tapes & Bandages</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Clinical Diagnostic Equipments</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Dressings & Wound Care</NavLink>
                        </Box>
                    </Box>


                        <Box className={styles.hover_sub_category_box_last}>
                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Supports & Braces</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Neck & Shoulder Support</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Knee & Leg Support</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Back & Abdomen Support</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Ankle & Foot Support</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Hand & Wrist Braces</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Arm & Elbow Support</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Cervical Pillows</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Compression support & sleeves</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Heel support</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Crepe Bandage</NavLink>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>




            <Box className={styles.dropdown_category_hoverbox_container}>
                <Box className={styles.main_category}><NavLink><Text>Personal Care</Text></NavLink></Box>

                <Box className={styles.hover_box} >
                    <Box display='flex' gap={3}  padding='8px'>
                        <Box className={styles.hover_sub_category_box}   border='none'>
                            <Box  className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Sexual Wellness</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Condoms</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Lubricants & Massage Gels</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Personal body massagers</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Vitamin B12 & B Complex</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Men Performance Enhancers</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Sexual Health Supplements</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Skin Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Body Lotions</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Mosquito Repellents</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Lip Balm</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Acne Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Bath Essentials</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Facewash</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Sunscreen</NavLink>
                            </Box>
                        </Box>

                 
                    <Box className={styles.hover_sub_category_box}>
                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Baby Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Baby & Infant Food</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Baby Diapers, wipes & more</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Nursing & Feeding</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Baby Bath Essentials</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Baby Skin Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Baby Healthcare</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Baby Oral Health</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Hair Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Shampoo</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Hair Conditioners</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Hair Growth Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Hair Oils</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Hair Growth Products</NavLink>
                        </Box>
                    </Box>


                        <Box className={styles.hover_sub_category_box_last}>
                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Elderly Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Adult Diapers</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Bone & Joint Health</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Living & Safety Aids</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Orthopaedic Supports</NavLink>
                            </Box>

                            <Box>
                             <NavLink className={styles.hover_box_category_heading}>Women Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Feminine Hygiene</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Women Care Supplements</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Mother Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Polycystic Ovary Syndrome</NavLink>
                            </Box>
                        </Box>


                        <Box className={styles.hover_sub_category_box_last}>
                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Men Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Men Grooming</NavLink>
                            </Box>

                            <Box>
                             <NavLink className={styles.hover_box_category_heading}>Oral Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Feminine Hygiene</NavLink>
                            </Box>

                            <Box>
                             <NavLink className={styles.hover_box_category_heading}>Pet Food</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Pet Health Care</NavLink>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>





            <Box className={styles.dropdown_category_hoverbox_container}>
                <Box className={styles.main_category}><NavLink><Text>Health Conditions</Text></NavLink></Box>

                <Box className={`${styles.hover_box} ${styles.hover_box_breakpoint}`} >
                    <Box display='flex' gap={3}  padding='8px'>
                        <Box className={styles.hover_sub_category_box}   border='none'>
                            <Box  className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Stomach Care</NavLink>
                            </Box>

                            <Box  className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Heart Care</NavLink>
                            </Box>

                            <Box  className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Bone, Joint & Muscle Care</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Pain Relief</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Heating Aids</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Omnigel products</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Eye Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Eye Lubricants</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Ear Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Hearing Aid Devices</NavLink>
                            </Box>
                        </Box>

                 
                    <Box className={styles.hover_sub_category_box}>
                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>First Aid</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Liver Care</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Cold & Cough</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Fever</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Mental Wellness</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Kidney Care</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Respiratory Care</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Piles, Fissures & Fistula</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Smoking Cessation</NavLink>
                        </Box>

                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Derma Care</NavLink>
                        </Box>
                    </Box>
                 </Box>
                </Box>
            </Box>



            <Box className={styles.dropdown_category_hoverbox_container}>
                <Box className={styles.main_category}><NavLink><Text>Ayurveda Products</Text></NavLink></Box>

                <Box className={styles.hover_box} >
                    <Box display='flex' gap={3}  padding='8px'>
                        <Box className={styles.hover_sub_category_box}   border='none'>
                            <Box  className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Ayurveda Top Brands</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Dabur</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Sri Sri Tattva</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Kerala Ayurveda</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Jiva Ayurveda</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Chyawanparash</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Chyawanparash</NavLink>
                            </Box>

                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Popular categories</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Herbal Juice</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Ayurvedic Immunity Boosters</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Explore Popular Herbs</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Herbal Supplements</NavLink>
                            </Box>
                        </Box>

                 
                    <Box className={styles.hover_sub_category_box}>
                        <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Top Health Concerns</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Ayurvedic Respiratory care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Cough, Cold & Fever</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Sexual Wellness</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Bone, Joint and Muscle Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Stomach Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Diabetes Care.</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Liver Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Cardiac Care</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Mind Care</NavLink>
                        </Box>
                     </Box>


                        <Box className={styles.hover_sub_category_box_last}>
                            <Box className={styles.border}>
                             <NavLink className={styles.hover_box_category_heading}>Unani Medicines</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Hamdard Unani</NavLink>
                             <NavLink className={styles.hover_box_category_text}>AMU Dawakhana</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Rex Remedies</NavLink>
                             <NavLink className={styles.hover_box_category_text}>Dehlvi Remedies</NavLink>
                            </Box>

                            <Box>
                             <NavLink className={styles.hover_box_category_heading}>Ayurvedic Medicine</NavLink>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>


        </Flex> 
    </Box>
}