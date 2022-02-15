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

function App() {
  useEffect(() => {
    console.log(localStorage.getItem('access_token'));
    if (localStorage.getItem('access_token')) {
      console.log('inside');
      authStore.checkAuth();
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default observer(App);
