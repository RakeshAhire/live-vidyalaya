import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import Navbarstu from "../../../Components/college/Navbarstu";
import {lec} from "../../../db.json"
export default function Assi({data}){
    const[state,setstate]=useState(false)
    function toggle(){

    }
    return(
        <Box >
        <Navbarstu/>
<Box w="80%" m="auto" pt="100px">
{data?.map((ele)=>
<Box pb="20px" pt="20px" pl="20px" pr="20px" mb="30px" boxShadow='md' mt="30px" bgColor="white" _hover={{cursor:"pointer"}} display="flex" justifyContent="space-between">
<Heading fontSize="20px" color="blue.400">{ele.title}</Heading>

<Button onClick={toggle}>pending</Button>
</Box>
)}
</Box>
    </Box>
    )
}
export async function getServerSideProps(context) {
    const res=await fetch("https://nervous-baseball-cap-tuna.cyclic.app/admin",{
        method: 'POST',
        body: JSON.stringify({type:"assignment"}),
        headers: { 'Content-Type': 'application/json' }
    
        });
        const data=await res.json();
        console.log(data)
 return {
      props: {data}, // will be passed to the page component as props
    }
  }