import { useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { magic } from '../lib/magic';
import { UserContext } from '../lib/UserContext';
import { CallToAction, TextButton } from '@magiclabs/ui';

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    magic.user.logout().then(() => {
      setUser({ user: null });
      Router.push('/login');
    });
  };

  return (
    <header>
      <nav>
        <ul>
          {user?.loading ? (
            // If loading, don't display any buttons specific to the loggedIn state
            <div style={{ height: '38px' }}></div>
          ) : user?.issuer ? (
            <>
              
              <li>
                <a>
                  <TextButton color='warning' size='sm' onPress={logout}>
                    Logout
                  </TextButton>
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link href='/login'>
                <CallToAction color='primary' size='sm'>
                  Login
                </CallToAction>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          max-width: 45rem;
          
         
        }
        ul {
          display: flex;
          list-style: none;
        }
        li {
          margin-right: 1.5rem;
         
        }
        li:first-child {
          margin-left: auto;
        }
      `}</style>
    </header>
  );
};

export default Header;
