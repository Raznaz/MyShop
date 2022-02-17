import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import LoginFrom from './components/LoginFrom';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/users/UserList';
import { BrowserRouter } from 'react-router-dom';
import authStore from './store/authStore';
import userStore from './store/userStore';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { Spinner } from 'react-bootstrap';
import typeStore from './store/typeStore';
import brandStore from './store/brandStore';

function App() {
  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      authStore.checkAuth();
    }
  }, []);

  useEffect(() => {
    brandStore.getAllBrands();
    typeStore.getAllTypes();
  }, []);

  // if (authStore.isLoading) {
  //   return <Spinner animation="grow" />;
  // }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default observer(App);
