import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import CartNavBar from "./CartNavBar";

function Cart() {
  return (
    <Box backgroundColor="#f8f8f8FF">
      <CartNavBar />

      <Box h="1000px" maxWidth="1080px" marginLeft="11.11133%">
        <Box maxWidth="1020px">
          <Box mt="26px">
            <Box
              w="449px"
              bg="#fff"
              textAlign="left"
              shadow="md"
              borderRadius="2px"
            >
              <Box
                w="449px"
                py="12px"
                px="16px"
                borderBottom="1px solid #c7c7c7"
              >
                <Image
                  src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
                  w="90px"
                />
                <Box padding="4px 0px">
                  <Text color="#208376" fontSize="16px" fontWeight={700}>
                    You can save extra ₹6 on this order
                  </Text>
                  <Text
                    color="#5b5353"
                    fontSize="12px"
                    lineHeight="1.6"
                    fontWeight={700}
                  >
                    Become a member
                  </Text>
                  <Text color="#5b5353" fontSize="12px" lineHeight="1.6">
                    Care plan membership ₹165{" "}
                    <Text as="s" textDecoration="">
                      ₹549
                    </Text>{" "}
                    / 3 months
                  </Text>
                  <Box mt="15px" fontWeight="700">
                    <ButtonGroup w="full" gap="6">
                      <Button
                        w="100%"
                        h="35px"
                        colorScheme="red"
                        variant="outline"
                        padding="6px 20px"
                      >
                        Know More
                      </Button>
                      <Button
                        w="100%"
                        h="35px"
                        colorScheme="red"
                        variant="solid"
                        padding="6px 20px"
                      >
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                cursor="pointer"
                padding="12px 16px"
              >
                <Box display="flex">
                  <Image src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg" />
                  <Box
                    fontSize="14px"
                    fontWeight="700"
                    w="110px"
                    ml="10px"
                    color="#2b2b2b"
                  >
                    <Text as="h4">Apply Coupon</Text>
                  </Box>
                </Box>

                <Box w="25px" h="25px" borderRadius="full" bg="#e2e2e2">
                  <ChevronRightIcon boxSize={6} />
                </Box>
              </Box>

              <Box></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
