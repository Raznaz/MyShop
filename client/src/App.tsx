import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import LoginFrom from './components/LoginFrom';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/users/UserList';
import authStore from './store/authStore';

function App() {
  useEffect(() => {
    console.log(localStorage.getItem('access_token'));
    if (localStorage.getItem('access_token')) {
      console.log('inside');
      authStore.checkAuth();
    }
  }, []);

  if (authStore.isAuth) {
    return (
      <div>
        <h1>Online Shop</h1>
        <h2>Welcome</h2>
        <button onClick={() => authStore.logout()}>Exit</button>
      </div>
    );
  }

  return (
    <div>
      <LoginFrom />
      <RegistrationForm />
    </div>
  );
}

export default observer(App);
