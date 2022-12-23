import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import SimpleSlider from '../Components/slider'
import VisionMoto from '../Components/VisionMoto'
import Footer from '../Components/Footer'
import HambergerNavbar from '../Components/Navbar'
import MainChat from '../Components/chat/MainChat'
import { useContext } from 'react';
import { UserContext } from '../lib/UserContext';
import Loading from '../components/loading';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [user] = useContext(UserContext);
  return (
    <>
    {user?.loading ? <Loading /> : user?.issuer && <div>You're logged in!</div>}
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

