import { Box, Flex, Grid, Image, List, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    return (
        <Flex justifyContent={"space-between"} flexDirection={{ base:"column",sm: "column",md: "column", lg: "row" }} alignItems="center" backgroundColor="gray.100" color="black" p={2}>
            <Box w={{lg:"23%",sm:"80%",md:"80%"}} p={5} >
                <Text textAlign="center" fontWeight="bold" fontSize="20px" mb={5}>ABOUT US</Text>
                <UnorderedList spacing={2} textAlign="start" >
                    <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem>
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                </UnorderedList>
            </Box>
            <Box w={{lg:"23%",sm:"80%",md:"80%"}} p={5} >
                <Text textAlign="center" fontWeight="bold" fontSize="20px" mb={5}>ABOUT US</Text>
                <UnorderedList spacing={2} textAlign="start" >
                    <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem>
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                </UnorderedList>
            </Box>
            <Box w={{lg:"23%",sm:"80%",md:"80%"}} p={5} >
                <Text textAlign="center" fontWeight="bold" fontSize="20px" mb={5}>ABOUT US</Text>
                <UnorderedList spacing={2} textAlign="start" >
                    <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem>
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                </UnorderedList>
            </Box>
            <Box w={{lg:"23%",sm:"80%",md:"80%"}} p={5} >
                <Text textAlign="center" fontWeight="bold" fontSize="20px" mb={5}>FOLLOW US</Text>
                <Grid m="auto" templateColumns={{lg:"repeat(2,1fr)",sm:"repeat(4,1fr)",md:"repeat(4,1fr)",base:"repeat(4,1fr)"}} templateRows="auto" justifyContent="space-between"  gap={5} w={{lg:"40%",sm:"80%",md:"80%"}}>
                    <Image src='https://cdn.iconscout.com/icon/free/png-128/instagram-216-721958.png' alt="" boxSize="50px" objectFit="cover"   />
                    <Image src='https://cdn.iconscout.com/icon/free/png-128/twitter-204-498411.png' alt="" boxSize="50px" objectFit="cover" />
                    <Image src='https://cdn.iconscout.com/icon/free/png-128/facebook-262-721949.png' alt="" boxSize="50px" objectFit="cover" />
                    <Image src='https://cdn.iconscout.com/icon/free/png-128/linkedin-162-498418.png' alt="" boxSize="50px" objectFit="cover" />
                </Grid>
            </Box>

        </Flex>
    )
}

export default Footer
