import { ChakraProvider } from '@chakra-ui/react'
import HambergerNavbar from '../Components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <HambergerNavbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
