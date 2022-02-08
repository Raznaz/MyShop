import ApiError from '../errors/apiError';
import Model from '../models/model';

class TypeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const type = await Model.Type.create({ name });
      return res.status(201).json(type);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
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
