import express, { Application } from 'express';
import dotenv from 'dotenv';
import sequelize from './db';
import cors from 'cors';
import router from './Routers';
import fileUpload from 'express-fileupload';
import { errorHandler } from './utils/middleware/errorHandling';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

const PORT = process.env.PORT || 7000;
export const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log('\x1b[1;35m', `==== Server was started on ${PORT} port =====`)
    );
  } catch (error) {
    console.log(error.message);
  }
};

start();
