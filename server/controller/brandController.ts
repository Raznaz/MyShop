class BrandController {
  async getBrand(req, res) {
    res.send('Brand controller');
  }
}

export default new BrandController();
