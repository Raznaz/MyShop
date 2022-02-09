import ApiError from '../errors/apiError';
import Model from '../models/model';

class TypeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const type = await Model.Type.create({ name });
      return res.status(201).json(type);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req: Request, res, next) {
    try {
      const body = req.body;
      const response = await Model.Type.findAll();
      res.status(200).json(response);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const response = await Model.Type.destroy({ where: { id } });
      res.status(201).send(`${id} was deleted`);
    } catch (error) {
      return next(ApiError.badRequest('dont have id'));
    }
  }
}

export default new TypeController();
