import ApiError from '../errors/apiError';

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res, next) {
    try {
      const { id } = await req.query;
      if (!id) {
        return next(ApiError.badRequest('Where is you ID'));
      }
      res.send(id);
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(req, res) {
    const aaa = req.params;
    res.send(aaa);
  }
  async delete(req, res) {
    res.json({ id: 1, name: 'test name' });
  }
}

export default new DeviceController();
