import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import socketIo from "socket.io-client";
import { IoMdSend } from "react-icons/io";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { MdOutlineAttachFile } from "react-icons/md";
import AdminChat from "./AdminChat";
import UserChat from "./UserChat";

const ENDPOINT = "http://localhost:5000/";
let socket
export default function Chatui() {
const [id,setId] = useState('')
const [msg,setMsg] = useState('')
const [messages,setMessages] = useState([])


const SendMessage = () => {
    socket.emit("message",{msg,id})
    setMsg("")
}

useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });
      
    socket.on("connect", () => {
      setId(socket.id)
    });

    socket.emit("joined", {user: "sudipta"})

    socket.on("welcome", (data) => {
      console.log(data)
    })

    socket.on("userJoined", (data) => {
      console.log(data.msg)
    })

    

    return () => {
      // socket.emit("disconnect")
      socket.off()
    };
  },[]);

  useEffect(()=>{
    socket.on("sendMessage", (data) => {
      setMessages([...messages,data])
    })
    console.log(messages)
  },[messages])

  return (
    <>
      <Box
        w={"100%"}
        h={"90%"}
        overflowY={"scroll"}
        borderBottom={"1px solid black"}
      >
        
      {
        messages.map((e)=>(
          e.user === "admin" ? <AdminChat msg={e.msg} /> : <UserChat msg={e.msg} />
        ))
      }
       
      </Box>
      <Box w={"100%"} h={"10%"} border={"1px solid black"} display={"flex"}>
        <Box
          w={"15%"}
          h={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <BsFillEmojiSmileFill size={"40%"} />
          <MdOutlineAttachFile size={"40%"} />
        </Box>
        <Box w={"75%"} h={"100%"}>
          <Input
            value={msg}
            onChange={(e)=>setMsg(e.target.value)}
            w={"100%"}
            h={"100%"}
            alignItems={"center"}
            type="text"
            focusBorderColor="blue.500"
            borderRadius={"100px"}
            placeholder="Type a message....."
          />
        </Box>
        <Flex
          w={"10%"}
          h={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <IoMdSend onClick={SendMessage} cursor={"pointer"} color="#318FB5" size={"60%"} />
        </Flex>
      </Box>
    </>
  );
}




// export default function Admin() {
//   return (
//     <>
    
//     </>
//   )
// }
