class UserController {
  async register(req, res) {
    res.send('test controller');
  }
  async login(req, res) {
    res.send('test controller');
  }
  async check(req, res) {
    res.send('test controller');
  }
}

export default new UserController();
