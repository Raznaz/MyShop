class TypeController {
  async getType(req, res) {
    res.json({ id: 2, type: 'mobile' });
  }
}

export default new TypeController();
