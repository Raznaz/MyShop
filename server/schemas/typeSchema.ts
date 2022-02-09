export const typeSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
  },
  required: ['name'],
  additionalProperties: false,
};

// export const typeSchemaDelete = {
//   type: 'object',
//   properties: {
//     id: { type: 'integer' },
//   },
//   required: ['id'],
//   additionalProperties: false,
// };
