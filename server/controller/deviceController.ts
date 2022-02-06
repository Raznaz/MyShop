import ApiError from '../errors/apiError';

class DeviceController {
  async create(req, res) {
    res.json({ id: 1, name: 'test name' });
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
