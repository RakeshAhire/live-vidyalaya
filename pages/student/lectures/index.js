import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Navbarstu from "../../../Components/college/Navbarstu";
import {lec} from "../../../db.json"

export default function Lec({data}){
    console.log(data)
    return(
        <Box bgColor="gray.50">
            <Navbarstu/>
<Box w="80%" m="auto" pt="100px">
{data?.map((ele)=>
<Box p="50px" boxShadow='md' mt="30px" bgColor="white" _hover={{cursor:"pointer"}}>
    <Heading color="blue.400"><Link href="/student/lectures/videos">{ele.title}</Link></Heading>
    <Text pt="30px" color="gray.500">{ele.description}</Text>
    </Box>
)}
</Box>
        </Box>
    )
}
export async function getServerSideProps(context) {
    const res=await fetch("https://nervous-baseball-cap-tuna.cyclic.app/admin",{
    method: 'POST',
    body: JSON.stringify({type:"lecture"}),
    headers: { 'Content-Type': 'application/json' }

    });
    const data=await res.json();
    console.log(data);
 return {
      props: {data}, // will be passed to the page component as props
    }
  }