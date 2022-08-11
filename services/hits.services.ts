import Axios from 'axios';
import getCookie from '../helpers/getCookie';
const API = process.env.NEXT_PUBLIC_API;

export const createHitService = async (payloadService: any) => {
  try {
    const token = getCookie();
    const URL = `${API}/hits-general/hits/create`;
    const data = {
      method: 'POST',
      data: {
        descriptionHit: payloadService.description,
        nameTarget: payloadService.nameTarget,
        userAssigned: payloadService.userAssigned,
        userCreator: payloadService.userCreator,
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

export const updateHitService = async (payloadService: any) => {
  try {
    const token = getCookie();
    const URL = `${API}/hits-general/hits/update`;
    const data = {
      method: 'PATCH',
      data: {
        idHit: payloadService.id,
        descriptionHit: payloadService.description,
        status: payloadService.status,
        nameTarget: payloadService.nameTarget,
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

export const deleteHitService = async (idHit: any) => {
  try {
    const token = getCookie();
    const URL = `${API}/hits-general/hits/delete/${idHit}`;
    const data = {
      method: 'DELETE',
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

export const getAllHitService = async () => {
  try {
    const token = getCookie();
    const URL = `${API}/hits-general/hits/all`;
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
