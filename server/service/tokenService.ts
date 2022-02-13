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
}

export default new TokenService();
