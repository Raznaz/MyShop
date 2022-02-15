import ApiError from '../../errors/apiError';
import jwt from 'jsonwebtoken';
import tokenService from '../../service/tokenService';

export const auth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log('token header', token.trim());
    if (!token) {
      return next(ApiError.unauthorized('You are not authorization'));
    }

    const userData = tokenService.validateAccessToken(token);
    console.log('userData middleware >>>', userData);
    if (!userData) {
      return next(ApiError.unauthorized('You are not authorization'));
    }

    console.log('go go gog');
    console.log(userData);
    req.user = userData;
    next();

    // const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // req.user = decoded;
  } catch (error) {
    return next(ApiError.forbidden('NOT Authorization'));
  }
};
