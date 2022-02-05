import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db';
import models from './models/model';

dotenv.config();

console.log(models);
const PORT = process.env.PORT || 7000;
const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log('\x1b[1;37m', `==== Server was started on ${PORT} port =====`)
    );
  } catch (error) {
    console.log(error.message);
  }
};

start();
