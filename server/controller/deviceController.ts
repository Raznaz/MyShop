import ApiError from '../errors/apiError';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import model from '../models/model';

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      // const { img } = req.files;
      let fileName = uuidv4() + '.jpg';
      // img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device: any = await model.Device.create({
        name,
        price,
        brandId,
        typeId,
        info,
        img: 'xiaomi.png',
      });

      if (info) {
        console.log('infoController+++++++++++', info);
        info = JSON.parse(info);
        info.forEach((item) => {
          model.DeviceInfo.create({
            title: item.title,
            description: item.description,
            deviceId: device.id,
          });
        });
      }

      return res.status(200).json(device);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
  async getAll(req, res, next) {
    try {
      let { brandId, typeId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 20;
      let offset = page * limit - limit;

      let devices;

      if (!brandId && !typeId) {
        devices = await model.Device.findAndCountAll({ limit, offset });
      }
      if (!brandId && typeId) {
        devices = await model.Device.findAndCountAll({
          where: { typeId },
          limit,
          offset,
        });
      }
      if (brandId && !typeId) {
        devices = await model.Device.findAndCountAll({
          where: { brandId },
          limit,
          offset,
        });
      }
      if (brandId && typeId) {
        devices = await model.Device.findAndCountAll({
          where: { brandId, typeId },
          limit,
          offset,
        });
      }

      res.status(200).json(devices);
    } catch (error) {
      return next(ApiError.badRequest(error.message));
    }
  }
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const response = await model.Device.findOne({
        where: { id },
        include: [{ model: model.DeviceInfo, as: 'info' }],
      });
      return res.status(200).json(response);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

export default new DeviceController();
