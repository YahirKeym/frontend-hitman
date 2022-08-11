import Axios from 'axios';

const API = process.env.NEXT_PUBLIC_API;
export const loginService = async (email: string, password: string) => {
  try {
    const URL = `${API}/users-general/login`;
    const data = {
      method: 'POST',
      data: {
        email,
        password,
      },
    };
    const dataAxios = await Axios(URL, data);
    return dataAxios.data;
  } catch (notifyError) {
    console.error('NOTIFY ERROR => ', notifyError);
  }
};

export const registerService = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const URL = `${API}/users-actions/register`;
    const data = {
      method: 'POST',
      data: {
        email,
        password,
        name,
      },
    };
    const dataAxios = await Axios(URL, data);
    return dataAxios.data;
  } catch (notifyError) {
    console.error('NOTIFY ERROR => ', notifyError);
  }
};

export const validateTokenService = async (token: string) => {
  try {
    const URL = `${API}/users-general/get-user`;
    const data = {
      method: 'GET',
      headers: {
        x_access_token: token,
      },
    };
    const dataAxios = await Axios(URL, data);
    return dataAxios.data;
  } catch (notifyError) {
    console.error('NOTIFY ERROR => ', notifyError);
  }
};
