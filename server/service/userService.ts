import model from '../models/model';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { generateJwtToken } from '../utils/generateToken';
import mailService from './mailService';
import tokenService from './tokenService';
import UserDto from '../dto/userDto';
import ApiError from '../errors/apiError';

class UserService {
  async registration(email, password, role) {
    const candidate = await model.User.findOne({ where: { email } });
    if (candidate) {
      throw ApiError.internal(
        `User has already exist with this ${email} email.`
      );
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const activationLink = uuidv4();

    const user: any = await model.User.create({
      email,
      password: hashPassword,
      role,
      activationLink,
    });

    const basket = await model.Basket.create({ userId: user.id });

    const userDto = new UserDto(user); // interface
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
      activationLink,
    };
  }

  async login(email, password) {
    const candidate: any = await model.User.findOne({ where: { email } });

    if (!candidate) {
      throw ApiError.badRequest(`Sorry, ${email} does not exist.`);
    }

    const comparePassword = await bcrypt.compare(password, candidate.password);

    if (!comparePassword) {
      return ApiError.forbidden('Sorry, you password incorrect !');
    }

    const userDto = new UserDto(candidate);

    const tokens = tokenService.generateToken({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refreshToken(refreshToken) {
    if (!refreshToken) {
      throw ApiError.unauthorized('Sorry, dont have token ');
    }
    console.log('validate------', refreshToken);
    const userData = await tokenService.validateRefreshToken(refreshToken);
    console.log('1----------------', userData);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    console.log('2----------------', tokenFromDb);

    if (!userData || !tokenFromDb) {
      console.log(userData, '===');
      console.log(tokenFromDb);
      throw ApiError.unauthorized('mistake guys');
    }

    // Double move to function
    const user = await model.User.findOne({ where: { id: userData.id } });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async activate(activationLink) {
    const user: any = await model.User.findOne({ where: { activationLink } });

    if (!user) {
      throw new Error(`Sorry , we don't have link`);
    }
    user.isActivated = true;
    await user.save();
  }

  async getAllUsers(limit, offset) {
    const users = await model.User.findAndCountAll({ limit, offset });
    return users;
  }
}

export default new UserService();
