import { updateUserService } from './../services/users.services';
import { useState } from 'react';

const useUserComponent = (
  assign: number,
  activeUser: number,
  idUser: number
) => {
  const [updateUser, setUpdateUser] = useState(false);
  const [assignedId, setAssignedId] = useState(assign);
  const [active, setActive] = useState(activeUser);
  const sendUpdateUser = async () => {
    try {
      console.log('DATA', idUser, assignedId, active);
      await updateUserService({
        id: idUser,
        manager: assignedId,
        status: active,
      });
      setUpdateUser(false);
    } catch (notifyError) {
      console.error('ERROR SEND DATA => ', notifyError);
    }
  };
  return {
    setUpdateUser,
    sendUpdateUser,
    setActive,
    setAssignedId,
    updateUser,
    status: active,
    manager: assignedId,
  };
};

export default useUserComponent;
