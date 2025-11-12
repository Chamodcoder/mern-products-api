import { Container, Flex, Text, Link } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
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
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='4xl'
            fontWeight='extrabold'
            >
             <Link to={"/"}> Welcome to Chakra UI</Link>




            </Text>



            </Flex>
     <div>Navbar</div>   
    </Container>
  )
}

export default Navbar