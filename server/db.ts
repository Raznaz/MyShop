import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('online_store', 'postgres', 'root', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});

export default sequelize;
