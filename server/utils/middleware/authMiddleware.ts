import ApiError from '../../errors/apiError';
import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return next(ApiError.forbidden('Unauthoriziation'));
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return next(ApiError.forbidden('NOT Authorization'));
  }
};
