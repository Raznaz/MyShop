export const userSchema = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type: 'string', min: 3 },
    role: { type: 'string' },
  },
  required: ['email'],
  additionalProperties: false,
};
