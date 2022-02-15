import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import authStore from '../store/authStore';
import { SHOP_ROUTE } from '../utils/constats';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to={SHOP_ROUTE}>Online-Shop</NavLink>
          {authStore.isAuth ? (
            <Nav className="ml-auto">
              <Button style={{ marginRight: '20px' }} variant={'outline-light'}>
                Admin panel
              </Button>
              <Button style={{ marginRight: '20px' }} variant={'outline-light'}>
                Login
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
