import express from 'express';
import cors from 'cors';
import route from './routes/route.json' assert { type: 'json' };

import homeRouter from './routes/home.js';
import { handleLogging } from './middlewares/log.js';

import status from 'express-status-monitor';

import apiRouter from './routes/apiRouter.js';
import cookieParser from 'cookie-parser';
import { verifyJWT } from './middlewares/verifyJWT.js';

const app = express();

app.use(cookieParser());

//status monitor middle ware should be before any routes or middlewares
app.use(status());
app.use(cors());

/*
app.use(cors({
    origin: process.env.SITE_ORIGIN,
  }));

*/
//Middleware to parse url encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//attach middleware
app.use(handleLogging);
app.use(express.static('public'));
app.use(verifyJWT);

//attach the router for redirecting to longUrl
//app.use(homeRouter);

//attach the api router
app.use(route.API, apiRouter);

export default app;
