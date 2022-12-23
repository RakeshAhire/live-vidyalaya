
import { Box, ChakraProvider, Image } from '@chakra-ui/react'
import io from 'socket.io-client';
export const socket = io.connect('http://localhost:8080');

export default function App({ Component, pageProps }) {

  return (
    <ChakraProvider>
      
     <Component {...pageProps} />
     
    </ChakraProvider>
  )
}
