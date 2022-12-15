import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast 
} from "@chakra-ui/react";

import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link as BrowseLink,} from "react-router-dom";
import { Signup } from "../store/Authreducer/action";


export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  
  const toast = useToast()
  const {isLoading}=useSelector((store)=>store.Authreducer)
  //console.log(isLoading)

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setUserData({
        ...userData,
        [name]: files[0],
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
   // console.log(userData,"userdata");
    dispatch(Signup(userData)).then((res)=>{
     // console.log(res.msg.signup,res.msg.userExist,"signup")
      if(res.msg.signup){
        toast({
          title: "Signup Successfull",
          description: "We've created your account for you.",
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        })
      }
      else if(res.msg.userExist){
        toast({
          title: "Signup Failed",
          description: "Email already exist",
          status: 'error',
          position: 'top',
          duration: 5000,
          isClosable: true,
        })
      }
      else{
        toast({
          title: "Signup Failed",
          description: "Something went wrong ",
          status: 'error',
          position: 'top',
          duration: 5000,
          isClosable: true,
        })
      }
    })
  }
    



  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <form onSubmit={handleSignup}>
                <Flex
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    lg: "row",
                    xl: "row",
                  }}
                  gap={5}
                >
                  <Box>
                    <FormControl id="fullname" isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input type="text" name="name" onChange={handleChange} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="age" isRequired>
                      <FormLabel>Age</FormLabel>
                      <Input
                        type="text"
                        name="profile_pic"
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                </Flex>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" name="email" onChange={handleChange} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
                    p={{ base: "1rem 1rem", lg: "1rem 2rem", xl: "1rem 2rem" }}
                    loadingText="Submitting"
                    size="lg"
                    bg={"#ff6f61"}
                    color={"white"}
                    _hover={{
                      bg: "#ff6f60",
                    }}
                    type="submit"
                   isLoading={isLoading}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link color={"blue.400"}>
                      <BrowseLink to={"/login"}>Login</BrowseLink>
                    </Link>
                  </Text>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
