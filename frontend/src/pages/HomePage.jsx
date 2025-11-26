import React from 'react'
import { Link as RouterLink } from "react-router-dom"
import { Container, VStack, Text, Link as ChakraLink } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
       <Text
        fontSize={"30"}
        fontWeight={"bold"}
        bgGradient={"linear(to-r, teal.500, green.500)"}
        bgClip={"text"}
        textAlign={"center"}
       >
        Current Products
       </Text>

      <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color='gray.500'>
        No Products Found !! {" "} <br /><br />
        <ChakraLink as={RouterLink} to={"/CreatePage"}>
          <Text as="span" color='blue.500' _hover={{textDecoration:"underline"}}>
            Create a New Product
          </Text>
        </ChakraLink>
      </Text>
      </VStack>
    </Container>
  )
}

export default HomePage