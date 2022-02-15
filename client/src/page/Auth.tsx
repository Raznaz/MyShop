import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../utils/constats';

const Auth = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 154 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Login</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter your email" />
          <Form.Control className="mt-3" placeholder="Enter your password" />
          <Row>
            <Button variant={'outline-success'} className="mt-5 align-self-end">
              Login
            </Button>
            <div>
              Don't have account?{' '}
              <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
            </div>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
