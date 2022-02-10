import jwt from 'jsonwebtoken';
import ApiError from '../../errors/apiError';

export const checkRoleMiddleware = (role) => (req, res, next) => {
  if (req === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return next(ApiError.forbidden('нет токена'));
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);

    if (decoded.role !== role) {
      return next(ApiError.forbidden('Problem with your role'));
    }

    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    return next(ApiError.forbidden('У вас мало прав'));
  }
};
