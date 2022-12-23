import { AspectRatio, Box, Button, Image, Input,Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import{socket} from "../../../_app"
export default function Video(){
    const [value, setValue] = useState("")
    const[comments,setcomments]=useState([])
  const handleChange = (event) => setValue(event.target.value)
function add(){
    console.log("ok")
    socket.emit("comment",value)
}
useEffect(()=>{
socket.on("comment",(value)=>{
    console.log(value)
setcomments([...comments,value])
})
},[comments])
    return(
        <Box  >


<iframe  margin="auto" width="60%" height="500px"  src="https://www.youtube.com/embed/5p8e2ZkbOFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<Box>

      <Input
       
        onChange={handleChange}
        placeholder='Add a comment...'
        size='sm'
        width="25%"
        mt="20px"
      />
      <Button onClick={add}>Add</Button>
      <Box>
        {comments.map((ele)=>
       <Box>
       <Text fontWeight="bold">Avadhut Shinde</Text>
        <Text>{ele}</Text>
        </Box>
        )}
      </Box>
</Box>
        </Box>
    )
}
