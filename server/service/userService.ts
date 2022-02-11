import model from '../models/model';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { generateJwtToken } from '../utils/generateToken';
import mailService from './mailService';
import tokenService from './tokenService';
import UserDto from '../dto/userDto';

class UserService {
  async registration(email, password, role) {
    const candidate = await model.User.findOne({ where: { email } });
    // console.log(candidate);
    if (candidate) {
      throw new Error(`User has already exist with this ${email} email.`);
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const activationLink = uuidv4();

    const user: any = await model.User.create({
      email,
      password: hashPassword,
      role,
    });
    await mailService.sendActivationMail(email, activationLink);

    const basket = await model.Basket.create({ userId: user.id });

    // const token = generateJwtToken(user.id, email, role);
    const userDto = new UserDto(user); // interface
    console.log('userDto---', userDto);
    const tokens = tokenService.generateToken({ ...userDto });
    console.log(`********tokens \n`, tokens);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UserService();
