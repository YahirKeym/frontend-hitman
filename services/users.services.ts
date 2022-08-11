import Axios from 'axios';
import getCookie from '../helpers/getCookie';

const API = process.env.NEXT_PUBLIC_API;
export const assignManagerToHitman = async (
  hitmanId: string,
  managerId: string
) => {
  try {
    const token = getCookie();

    const URL = `${API}/users-actions/assign-manager`;
    const data = {
      method: 'PATCH',
      data: {
        userToAssign: hitmanId,
        managerToAssignUser: managerId,
      },
      headers: {
        x_access_token: token as unknown as string,
      },
    };
    const dataAxios = await Axios(URL, data);
    return dataAxios.data;
  } catch (notifyError) {
    console.error('NOTIFY ERROR => ', notifyError);
  }
};

export const getHitmans = async (idUser: number) => {
  try {
    const token = getCookie();
    const URL = `${API}/users-general/get-all-hitmans/${idUser}`;
    const data = {
      method: 'GET',
      headers: {
        x_access_token: token as unknown as string,
      },
    };
    const dataAxios = await Axios(URL, data);
    return dataAxios.data;
  } catch (notifyError) {
    console.error('NOTIFY ERROR => ', notifyError);
  }
};

export const getAllUsers = async () => {
  try {
    const token = getCookie();
    const URL = `${API}/users-general/get-all-users`;
    const data = {
      method: 'GET',
      headers: {
        x_access_token: token as unknown as string,
      },
    };
    const dataAxios = await Axios(URL, data);
    return dataAxios.data;
  } catch (notifyError) {
    console.error('NOTIFY ERROR => ', notifyError);
  }
};

export const updateUserService = async (payloadUser: any) => {
  try {
    const token = getCookie();
    const URL = `${API}/users-actions/assign-manager`;
    const data = {
      method: 'PATCH',
      data: {
        userToAssign: payloadUser.id,
        managerToAssignUser: payloadUser.manager,
        statusUser: payloadUser.status,
      },
      headers: {
        x_access_token: token as unknown as string,
      },
    };
    const dataAxios = await Axios(URL, data);
    return dataAxios.data;
  } catch (notifyError) {
    console.error('NOTIFY ERROR => ', notifyError);
  }
};
