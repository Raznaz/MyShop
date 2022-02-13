import bcrypt from 'bcrypt';
import ApiError from '../errors/apiError';
import model from '../models/model';
import jwt from 'jsonwebtoken';
import { generateJwtToken } from '../utils/generateToken';
import userService from '../service/userService';

class UserController {
  async register(req, res, next) {
    try {
      const { email, password, role } = req.body;

      const userData = await userService.registration(email, password, role);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).json(userData);
    } catch (error) {
      return next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const result: any = await userService.login(email, password);

      res.cookie('refreshToken', result.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).json({ result });
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const resp = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.status(200).json(`User was logout, ${resp}`);
    } catch (error) {
      return next(error);
    }
  }

  async activate(req, res, next) {
    try {
      const { link } = req.params;
      await userService.activate(link);
      return res.status(301).redirect(process.env.CLIENT_URL);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }

  async refresh(req, res, next) {
    try {
      await res.start(200).json(`REFRESH`);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }

  async check(req, res, next) {
    try {
      const token = generateJwtToken(
        req.user.id,
        req.user.email,
        req.user.role
      );
      return res.json({ token });
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }

  async users(req, res, next) {
    try {
      let { limit, page } = req.query;
      page = page || 1;
      limit = limit || 5;
      let offset = page * limit - limit;

      const response = await model.User.findAndCountAll({ limit, offset });
      res.status(200).json(response);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
}

export default new UserController();
