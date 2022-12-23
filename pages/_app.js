
import { Box, ChakraProvider, Image } from '@chakra-ui/react'
import io from 'socket.io-client';
export const socket = io.connect('http://localhost:8080');
import { useState, useEffect } from 'react';
import { UserContext } from '../lib/UserContext';
import Router from 'next/router';
import { magic } from '../lib/magic';

import { ThemeProvider } from '@magiclabs/ui';
import '@magiclabs/ui/dist/cjs/index.css';

export default function App({ Component, pageProps }) {

  const [user, setUser] = useState();

  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        magic.user.getMetadata().then((userData) => setUser(userData));
      } else {
        Router.push('/');
        setUser({ user: null });
      }
    });
  }, []);

  return (
    <ChakraProvider>
      <UserContext.Provider value={[user, setUser]}>
     
     <Component {...pageProps} />
    
      </UserContext.Provider>
     
    </ChakraProvider>
  )
}
