class BrandController {
  async create(req, res) {
    res.send('Brand controller');
  }
  async getAll(req, res) {
    res.status(200).json({ id: 1, name: 'Nazar' });
  }
  async delete(req, res) {
    res.send('Brand controller');
  }
}

export default new BrandController();
