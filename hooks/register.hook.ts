import { useState } from 'react';
import { registerService } from '../services/auth.services';

const useRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const sendRegisterData = async () => {
    try {
      const data = await registerService(email, password, name);
      console.log('DATA => ', data);
      if (data.active) {
        location.href = '/';
      }
    } catch (notifyError) {
      console.error('ERROR SEND DATA => ', notifyError);
    }
  };
  return {
    sendRegisterData,
    setPassword,
    setEmail,
    setName,
  };
};

export default useRegister;
