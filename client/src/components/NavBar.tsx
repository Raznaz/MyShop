import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import authStore from '../store/authStore';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constats';

const NavBar = () => {
  const history = useHistory();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to={SHOP_ROUTE}>Online-Shop</NavLink>
          {authStore.isAuth ? (
            <Nav className="ml-auto">
              <Button
                style={{ marginRight: '20px' }}
                variant={'outline-light'}
                onClick={() => history.push(ADMIN_ROUTE)}>
                Admin panel
              </Button>
              <Button
                style={{ marginRight: '20px' }}
                variant={'outline-light'}
                onClick={() => history.push(LOGIN_ROUTE)}>
                Logout
              </Button>
              <Button variant={'outline-light'}>Exit</Button>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Button style={{ marginRight: '20px' }}>Registration</Button>
              <Button className="mr-2" onClick={() => authStore.setAuth(true)}>
                Login
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default observer(NavBar);
