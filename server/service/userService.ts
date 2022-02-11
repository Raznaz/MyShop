import model from '../models/model';
class UserService {
  async registration(email, password) {
    const candidate = model.User.findOne({ where: { email } });
  }
}

export default new UserService();
