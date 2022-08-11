import { useState } from 'react';
import { loginService } from '../services/auth.services';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const sendLoginData = async () => {
    try {
      const data = await loginService(email, password);
      if (data.token) {
        document.cookie = `token=${data.token}`;
        location.href = '/hits';
      }
    } catch (notifyError) {
      console.error('ERROR SEND DATA => ', notifyError);
    }
  };
  return {
    sendLoginData,
    setPassword,
    setEmail,
  };
};

export default useLogin;
