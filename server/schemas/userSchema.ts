export const userSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 3, maxLength: 6 },
    role: { type: 'string' },
  },
  required: ['email', 'password'],
  additionalProperties: false,
};
