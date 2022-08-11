import { getAllUsers, getHitmans } from './../services/users.services';
import { useState, useEffect } from 'react';
import { loginService } from '../services/auth.services';

const useUsers = (userRole: number, userId: number) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        let usersData = [];
        if (userRole === 1) {
          usersData = await getAllUsers();
        } else if (userRole === 2) {
          usersData = await getHitmans(userId);
        }
        setUsers(usersData);
      } catch (notifyError) {
        console.error('ERROR SEND DATA => ', notifyError);
      }
    };
    getUsers();
  }, []);
  return {
    users,
  };
};

export default useUsers;
