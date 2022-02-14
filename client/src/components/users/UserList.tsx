import React, { useEffect } from 'react';
import userStore from '../../store/userStore';

const UserList = () => {
  const handleUsers = () => {
    userStore.getAllUsers();
  };

  return (
    <div>
      <button onClick={handleUsers}>Show Users</button>
    </div>
  );
};

export default UserList;
