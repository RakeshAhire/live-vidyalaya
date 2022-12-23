import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Input,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'
import Layout from '../layout'
import MainChat from '../chat/MainChat'

 const Navbarstu = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true, md:true})
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Box  pb={{ base: '12', md: '24' }} position="fixed" zIndex={10} w="100%" >
      <Box   borderColor='red' as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')} bgColor="white">
        <Container  py={{ base: '4', lg: '5' }}>
          <HStack  spacing="10" justify="space-between">
         
            {isDesktop ? (
              <Box >
                <ButtonGroup  variant="link"  display="flex" justifyContent="space-evenly" gap="100px">
                  <Layout/>
                  {['lectures', 'assignments', "discussion", 'support',"profile"].map((item) => (
                    <Button textDecoration="none" key={item}><Link href={`/student/${item}`}>{item}</Link></Button>
                  ))}
                </ButtonGroup>
              </Box>
            ) : (
              <IconButton
              onClick={onOpen}
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
 
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
          {['lectures', 'assignments', 'discussion', 'support',"profile"].map((item) => (
                    <Box><Button key={item} variant="ghost" bgColor="white"><Link href={`/student/${item}`}>{item}</Link></Button></Box>
                  ))}
          </DrawerBody>

         
        </DrawerContent>
      </Drawer>
        </Container>
      </Box>
    </Box>
  )
}
export default Navbarstu