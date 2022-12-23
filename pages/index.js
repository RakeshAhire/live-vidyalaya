import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import SimpleSlider from '../Components/slider'
import VisionMoto from '../Components/VisionMoto'
import Footer from '../Components/Footer'
import HambergerNavbar from '../Components/Navbar'
import MainChat from '../Components/chat/MainChat'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Live Vidyalaya</title>
      </Head>
      <HambergerNavbar />
      <Box>
        <SimpleSlider />
      </Box>
      <VisionMoto />
      <Footer />
    </>
  )
}

