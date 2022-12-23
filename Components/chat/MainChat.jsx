import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Text, useDisclosure } from "@chakra-ui/react";
import React from 'react';
import Chatui from "./Chatui";

export default function MainChat() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Chat
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          size="lg"
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Chat With us...</DrawerHeader>
  
            <DrawerBody>
              <Chatui/>
            </DrawerBody>

          </DrawerContent>
        </Drawer>
      </>
    )
  }



 


