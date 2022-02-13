import jwt from 'jsonwebtoken';
import model from '../models/model';
class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });

    const refreshToken = jwt.sign(payload, process.env.SECRET_KEY_REFRESH, {
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  }

  async saveToken(userId, refreshToken) {
    const tokenData: any = await model.TypeToken.findOne({ where: { userId } });

    if (tokenData) {
      tokenData.refresh_token = refreshToken;
      return tokenData.save();
    }

    const token = await model.TypeToken.create({
      userId,
      refresh_token: refreshToken,
    });
    return token;
  }

  async removeToken(refreshToken) {
    const resp = model.TypeToken.destroy({
      where: { refresh_token: refreshToken },
    });
    return resp;
  }

  async findToken(refreshToken) {
    const res = await model.TypeToken.findOne({
      where: { refresh_token: refreshToken },
    });
    console.log('RES find token', res);
    return res;
  }

  async validateAccessToken(accessToken) {
    try {
      const userPayload = jwt.verify(accessToken, process.env.SECRET_KEY);
      return userPayload;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async validateRefreshToken(refreshToken) {
    try {
      const userPayload = jwt.verify(
        refreshToken,
        process.env.SECRET_KEY_REFRESH
      );
      return userPayload;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async checkToken(token) {
    const result = await model.TypeToken.findOne({
      where: { refresh_token: token },
    });
    console.log(result);
    return result;
  }
}

export default new TokenService();
