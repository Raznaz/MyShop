import jwt from 'jsonwebtoken';
import model from '../models/model';
class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '30d',
    });

    const refreshToken = jwt.sign(payload, process.env.SECRET_KEY_REFRESH, {
      expiresIn: '15m',
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
    console.log(`find===> \n`, refreshToken);
    const res = await model.TypeToken.findOne({
      where: { refresh_token: refreshToken },
    });
    console.log(`find===> \n`, res);

    return res;
  }

  validateAccessToken(accessToken) {
    try {
      console.log('validate ---=-=', accessToken);
      const userPayload = jwt.verify(accessToken, process.env.SECRET_KEY);

      return userPayload;
    } catch (error) {
      return null;
    }
  }
  validateRefreshToken(refreshToken) {
    try {
      const userPayload = jwt.verify(
        refreshToken,
        process.env.SECRET_KEY_REFRESH
      );
      return userPayload;
    } catch (error) {
      return null;
    }
  }

  async checkToken(token) {
    return await model.TypeToken.findOne({
      where: { refresh_token: token },
    });
  }
}

export default new TokenService();
