import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Icon, Image, Text, useDisclosure } from "@chakra-ui/react";
import React from 'react';
import { GoThreeBars } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill, BsPersonFill } from "react-icons/bs";
import { RiLoginCircleFill } from "react-icons/ri";
import Link from "next/link";
function HambergerNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            < Flex w="full" bgColor="white" justifyContent="space-between" p="0px 12px" alignItems="center" boxShadow='base' position="fixed" top={0} zIndex={9}>
                <Text fontSize={{base:'20px',lg:'40px',sm:"20px",md:"30px"}}> <GoThreeBars  ref={btnRef} colorScheme='teal' onClick={onOpen} /> </Text>
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >

                    <DrawerOverlay />
                    <DrawerContent backgroundColor="black"
                        color="white">
                        <DrawerHeader>
                            <GoThreeBars />
                            <DrawerCloseButton />
                        </DrawerHeader>

                        <DrawerBody>
                            <HStack
                                _hover={{ backgroundColor: "lightgray", color: 'black' }}
                                padding="1rem"
                                fontWeight="bold"
                            >
                                <Icon w="6" h="6" mr="1rem" as={AiFillHome} /><Link href={'/'}> <p>Home</p></Link>
                            </HStack>
                            <HStack
                                _hover={{ backgroundColor: "lightgray", color: 'black' }}
                                padding="1rem"
                                fontWeight="bold"
                            >
                                <Icon w="6" h="6" mr="1rem" as={BsFillPeopleFill} /> <Link href={'/faculty'}><p>For Faculty / Staff</p></Link>
                            </HStack>
                            <HStack
                                _hover={{ backgroundColor: "lightgray", color: 'black' }}
                                padding="1rem"
                                fontWeight="bold"
                            >
                                <Icon w="6" h="6" mr="1rem" as={BsPersonFill} /><Link href={'/college'}>  <p>Dashboard</p></Link>
                            </HStack>
                            <HStack
                                _hover={{ backgroundColor: "lightgray", color: 'black' }}
                                padding="1rem"
                                fontWeight="bold"
                            >
                                <Icon w="6" h="6" mr="1rem" as={RiLoginCircleFill} /><Link href={'/login'}> <p>Login</p></Link>
                            </HStack>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                <Box>
                    <Image w={{base:'90px',lg:"140px",sm:"90px",md:"110px"}} h={{base:'40px',lg:"80px",sm:"40px",md:"60px"}} src="./livevidyalaya.png" alt='logo' />
                </Box>
            </Flex>
            <Box mb={{base:'40px',lg:'80px',sm:"40px",md:"50px"}} border="1px"></Box>
        </>
    )
}

export default HambergerNavbar;
