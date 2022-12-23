import { Box, ChakraProvider, Image } from '@chakra-ui/react'
import HambergerNavbar from '../Components/Navbar'
import '../styles/globals.css'
import io from 'socket.io-client';
export const socket = io.connect('http://localhost:8080');

export default function App({ Component, pageProps }) {

  return (
    <ChakraProvider>
      {/* <HambergerNavbar /> */}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.4/socket.io.min.js"></script> */}
  
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
