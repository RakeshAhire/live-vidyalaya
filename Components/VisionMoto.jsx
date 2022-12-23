import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const VisionMoto = () => {
    return (
        <Box m="auto">
            <Text textAlign="center" fontWeight="bold" fontSize="25px" mb={5} color="red">OUR</Text>
            <Flex justifyContent={"space-between"} flexDirection={{ sm: "column", lg: "row", base:"column",md:"row"}} p={2} align="center">

                <Box w={{ sm: "80%", lg: "45%" }} p={5} border="1px" >
                    <Text textAlign="center" fontWeight="bold" fontSize="20px" mb={5}>VISION</Text>
                    <Image src='http://scienceconnectbd.com/wp-content/uploads/2021/05/5-50838_vision-clipart-vision-statement-mission-and-vision-clipart.png' alt='vision' />

                </Box>
                <Box w={{ sm: "80%", lg: "45%" }} p={5} border="1px" >
                    <Text textAlign="center" fontWeight="bold" fontSize="20px" mb={5}>MOTO</Text>
                    <Image src='https://ximb.edu.in/wp-content/uploads/2020/05/mission_1.png' alt='mission' />
                </Box>
            </Flex>
        </Box>
    )
}

export default VisionMoto
