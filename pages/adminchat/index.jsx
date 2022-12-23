import { Box, Flex, IconButton, Image, Img, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { MdOutlineAttachFile } from "react-icons/md";
import socketIo from "socket.io-client";
import AdminChat from "../../Components/chat/AdminChat";
import UserChat from "../../Components/chat/UserChat";
// AiOutlineSearch
let name = ["Ram","Akshay","Uday","Mohan","Giri"]

const ENDPOINT = "http://localhost:5000/";
let socket
function index() {

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

    socket.emit("joined", {user: "admin"})

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
    localStorage.setItem("chatData",JSON.stringify(messages))
    
  },[messages])

  return (
    <>
      <Box w={"100%"} h={"100vh"} border={"1px solid black"}>
        <Flex w={"100%"} h={"12%"} >
        <Flex bg={''} alignItems={'center'} justifyContent={'space-evenly'} w={"45%"} h={"100%"} >
            {/* <Text>User</Text> */}
           <Box w={'60%'} h={'80%'} >
           <Input placeholder='Student Search..' w={'100%'} h={'100%'} />
           </Box>
           {/* <IconButton colorScheme={'green'} w={'10%'} h={'75%'} aria-label='Search database' icon={<AiOutlineSearch />} /> */}
        </Flex>
        <Flex bg={''} alignItems={'center'} justifyContent={'space-evenly'} w={"55%"} h={"100%"} borderLeft={"1px solid black"}>
        <Text fontSize='2xl'>Admin Chat</Text>
        </Flex>
        </Flex>
        <Flex w={"100%"} h={"78%"} borderTop={"1px solid black"} borderBottom={"1px solid black"}>
            <Box w={"45%"} h={"100%"} bg={'#EAFDFC'} >
                <Box h={'50px'} ></Box>
                {
                    name.map((e)=> (
                        <Flex cursor={'pointer'}  _hover={{bg: 'rgb(232, 232, 232)'}} alignItems={'center'} w={"100%"} h={"15%"} >
                            <Box cursor={'pointer'} ml={'20px'} w={"12%"} h={"80%"}>
                           <Image borderRadius={'50%'} h={'100%'} w={'100%'} src="https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg" />    
                            </Box>
                            <Box cursor={'pointer'} ml={'10px'} fontSize={'18px'} fontWeight={500} >{e}</Box>
                        </Flex>
                    ))
                }
            </Box>
            <Flex justifyContent={'center'} alignItems="center" w={"55%"} h={"100%"} borderLeft={"1px solid black"}>
                <Box overflowY={"scroll"} padding={"2%"} borderRadius={'20px'} bg={'rgb(232, 232, 232)'} w={"97%"} h={"95%"} >
                {
        messages.map((e)=>(
          e.user === "admin" ? <AdminChat msg={e.msg} /> : <UserChat msg={e.msg} />
        ))
      }
                </Box>
            </Flex>
        </Flex>

        {/* footer part */}

        <Flex h={'10%'} >
        <Box w={'45%'}></Box>
        <Box w={"55%"} h={"100%"}  display={"flex"}>
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
        </Flex>
      </Box>
    </>
  );
}

export default index;
