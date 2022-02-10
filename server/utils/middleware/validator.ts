import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import ApiError from '../../errors/apiError';

export const validator = (schema) => (req, res, next) => {
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);
  const body = req.body;
  const validate = ajv.compile(schema);
  const valid = validate(body);
  if (valid) {
    return next();
  }
  next(ApiError.badRequest(validate.errors[0].message));
};
