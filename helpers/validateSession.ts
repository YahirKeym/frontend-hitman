import { NextApiRequest, NextApiResponse } from 'next';
import { validateTokenService } from '../services/auth.services';

const validateSession = async (req: NextApiRequest, res: NextApiResponse) => {
  let userValidation = [false, {}];
  try {
    const { token } = req.cookies;
    if (token) {
      const userData = await validateTokenService(token);
      userValidation = [true, userData];
    }
    return userValidation;
  } catch (notifyError) {
    console.error('ERROR IN VALIDATE SESSION', notifyError);
    return userValidation;
  }
};

export default validateSession;
