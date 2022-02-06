class TypeController {
  async create(req, res) {
    res.json({ id: 2, type: 'mobile' });
  }
  async getAll(req, res) {
    res.json({ id: 2, type: 'mobile' });
  }
  async delete(req, res) {
    res.json({ id: 2, type: 'mobile' });
  }
}

export default new TypeController();
