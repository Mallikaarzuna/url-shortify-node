import dotenv from 'dotenv';
import app from './src/app.js';
import { getDBConnection } from './src/db/index.js';

dotenv.config();

getDBConnection();

app.listen(process.env.PORT, () =>
  console.log(
    `Server started successfully at http://${process.env.SITENAME}:${process.env.PORT}/`
  )
);
