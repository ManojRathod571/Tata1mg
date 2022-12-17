import { Box, Button, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { AFeaturedBrands, ApopularCategories, ApopularCats, AShopbyhealthconcerns } from "../components/Ayurveda/AyurvedData";
import BrandsCard from "../components/HealthBrandCard";
// import Popularcategories from "../../comonents/Ayurveda/AyurvedaPopularCard";
// import { FeaturedBrands, popularCategories } from "../../comonents/Ayurveda/AyurvedData";
// import BrandsCard from "../cards/BrandCard";

// import ProductsCard from "../cards/ProductsCard";
// import { Shopbyhealthconcerns, topSellingProducts } from "../Data/products.data";


export const AyurvedaPage = () =>{

  
    return (
        <Box>
          {/* <Carosel /> */}
    
          <Box bg="#f6f6f6">
            {/* Top image */}
            <Text textAlign='center' fontSize={{ base: '16px', md: '24px', lg: '26px' }} fontWeight='650' letterSpacing={{ base: '2px' }} mt={{ base: '15px', md: '30px', lg: '7%' }}>THE AYURVEDA STORE</Text>
            <Box p="1rem">
              <Image
                w="95%"
                m="auto"
                src="https://onemg.gumlet.io/a59f5ed0-39e9-4c22-ba5f-3eeaab9b873f_1671100364.jpg?w=1062&h=124&format=auto"
              />
            </Box>
            <Box mt="2rem">
              <Box display="flex" w="85%" margin="auto" justifyContent="space-between" alignItems="center" >
                <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                  Shop by concerns
                </Text>
                <Link href="http://localhost:3000/products" target="_blank" textDecoration="none">
                  <Button
                    bgColor="#ff6f61"
                    _hover={{ bg: "#ff6f61" }}
                    width="fit-content"
                    color="white"
                    borderColor="transparent"
                    borderRadius="5px"
                    cursor="pointer"
                    padding="10px"
                  >
                    SEE ALL
                  </Button>
                </Link>
              </Box>
              <BrandsCard something={AShopbyhealthconcerns} />
            </Box>

            <Box p="1rem">
              <Image
                w="95%"
                m="auto"
                src="https://onemg.gumlet.io/a7477b93-f12c-4c40-a706-0bd3b1b74d31_1666337306.png?w=1062&h=124&format=auto"
              />
            </Box>


            <Box mt="2rem">
          <Box w="85%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Top Brands
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                borderColor="transparent"
                borderRadius="5px"
                cursor="pointer"
                padding="10px"
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <BrandsCard something={AFeaturedBrands} />
        </Box>


        <Box p="1rem">
              <Image
                w="95%"
                m="auto"
                src="https://onemg.gumlet.io/f_auto,w_1062,a_ignore,h_118,q_auto/81890c09-ccbe-473d-9b64-5bf305dced96.jpg"
              />
            </Box>


        

            <Box mt="2rem">
          <Box w="85%" margin="auto" display="flex" justifyContent="space-between" alignItems="center">
            <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
              Popular categories
            </Text>
            <Link href="http://localhost:3000/allProducts" target="_blank" textDecoration="none">
              <Button
                bgColor="#ff6f61"
                _hover={{ bg: "#ff6f61" }}
                width="fit-content"
                color="white"
                borderColor="transparent"
                borderRadius="5px"
                cursor="pointer"
                padding="10px"
              >
                SEE ALL
              </Button>
            </Link>
          </Box>
          <ApopularCats something={ApopularCategories} />
        </Box>

          </Box>
        </Box>
      );
    };