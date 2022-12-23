import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function UserChat(data) {
  return (
    <Box maxWidth={"100%"} display={"flex"} justifyContent={'end'}>
          <Box w={"7.5%"} h={"20%"}>
            <Image
              w={"100%"}
              h={"100%"}
              src="https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg"            
            />
          </Box>
          <Box
            bg={"#A5F1E9"}
            boxShadow="xl"
            mt={"5%"}
            ml={"2%"}
            mb={"10px"}
            maxWidth={"40%"}
            border={"1px solid black"}
            borderTopRightRadius={"30px"}
            borderBottomRightRadius={"15px"}
            borderTopLeftRadius={"1%"}
            borderBottomLeftRadius={"20px"}
            padding="2%"
          >
            <Text>{data.msg}</Text>
          </Box>
        </Box>
  )
}
