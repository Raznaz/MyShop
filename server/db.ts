import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('online', 'postgres', 'joker', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});

export default sequelize;
