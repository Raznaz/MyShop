import { observable } from 'mobx';
import React, { useState } from 'react';
import authStore from '../store/authStore';

const LoginFrom = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <button onClick={() => authStore.login(email, password)}>Login</button>
    </div>
  );
};

export default LoginFrom;
