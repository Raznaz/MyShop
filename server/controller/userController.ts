class UserController {
  async getUser(req, res) {
    res.send('test controller');
  }
}

export default new UserController();
