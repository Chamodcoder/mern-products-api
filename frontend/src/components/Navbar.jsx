import { Container, Flex, Text, Link as ChakraLink, HStack,Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import {PlusSquareIcon} from "@chakra-ui/icons"
import { Link as RouterLink } from 'react-router-dom'

import {IoMoon} from "react-icons/io5"
import { LuSun } from 'react-icons/lu'

const Navbar = () => {
  const {colorMode, toggleColorMode}=useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }
            }>
            <Text 
            bgGradient={'linear(to-r, cyan.400, blue.500)'}
            bgClip='text'
            fontSize='4xl'
            fontWeight='extrabold'
            >
             <ChakraLink as={RouterLink} to={'/'}> PRODUCT STORE </ChakraLink>

            </Text>
            
            <HStack spacing={2} alignItems={"center"}>
              <ChakraLink as={RouterLink} to={'/CreatePage'}>
              <Button>
                <PlusSquareIcon fontSize={20}/>
              </Button>
              </ChakraLink>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon/> : <LuSun size="20"/>}
              </Button>

            </HStack>


            </Flex>
    </Container>
  )
}

export default Navbar