import request from 'supertest';
import { app } from '../..';

describe('Brand Controllers 1st', () => {
  it('check Brand', async () => {
    const result = await request(app).get('/api/brand');

    // console.log(result.body);

    expect(result.status).toBe(200);
    expect(result.body).toEqual({ id: 1, name: 'Nazar' });
  });
});
