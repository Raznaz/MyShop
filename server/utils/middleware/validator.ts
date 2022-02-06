import Ajv from 'ajv';
import ApiError from '../../errors/apiError';

export const validator = (schema) => (req, res, next) => {
  const ajv = new Ajv({ allErrors: true });
  const body = req.body;
  const validate = ajv.compile(schema);
  const valid = validate(body);
  if (valid) {
    return next();
  }
  next(ApiError.badRequest(validate.errors[0].message));
};
