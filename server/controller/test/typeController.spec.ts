import request from 'supertest';
import { app } from '../..';

describe('Type Controller', () => {
  describe('create Type', () => {
    it('create new Type', async () => {
      const response = await request(app)
        .post('/api/type')
        .send({ name: 'Sergey' });

      console.log(response.body);

      expect(response.statusCode).toEqual(200);
    });
  });
});
