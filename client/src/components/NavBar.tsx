import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import authStore from '../store/authStore';
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from '../utils/constats';

const NavBar = () => {
  const history = useHistory();

  const logout = async () => {
    const response = await authStore.logout();
    console.log('LOGOUT');
  };

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
                variant={'outline-danger'}
                onClick={() => logout()}>
                Logout
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Button
                onClick={() => history.push(REGISTRATION_ROUTE)}
                style={{ marginRight: '20px' }}>
                Registration
              </Button>
              <Button
                className="mr-2"
                onClick={() => history.push(LOGIN_ROUTE)}>
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
