import ApiError from '../errors/apiError';
import model from '../models/model';

class BrandController {
  async create(req, res, next) {
    try {
      const body = req.body;
      const response = await model.Brand.create(body);
      res.status(200).json(response);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res, next) {
    try {
      const response = await model.Brand.findAll();
      res.status(200).json(response);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const response = await model.Brand.destroy({ where: { id } });
      console.log(response);
      res.status(200).send(`${id} BRAND was deleted`);
    } catch (error) {
      return next(ApiError.badRequest('asd;fldkjas;fljasdf'));
    }
  }
}

export default new BrandController();
