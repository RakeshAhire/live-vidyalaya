import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Navbarstu from "../../../Components/college/Navbarstu";
import {lec} from "../../../db.json"

export default function Lec(){
    return(
        <Box bgColor="gray.50">
            <Navbarstu/>
<Box w="80%" m="auto" pt="100px">
{lec.map((ele)=>
<Box p="50px" boxShadow='md' mt="30px" bgColor="white" _hover={{cursor:"pointer"}}>
    <Heading color="blue.400"><Link href="/student/lectures/videos">{ele.lec}</Link></Heading>
    <Text pt="30px" color="gray.500">{ele.des}</Text>
    </Box>
)}
</Box>
        </Box>
    )
}