import express from 'express';
import route from './route.json' assert { type: 'json' };
import { handlerRegisterUser } from '../controllers/signUp.js';
import { getShortUrl } from '../controllers/shortUrl.js';
import { getUrls } from '../controllers/urls.js';
import { privateApi } from '../middlewares/privatePage.js';
import { handleLoginUser } from '../controllers/login.js';

const apiRouter = express.Router();

apiRouter.route(route.API_REGISTER).post(handlerRegisterUser);

apiRouter.route(route.API_LOGIN).post(handleLoginUser);

apiRouter.route(route.API_SHORT_URL).post(getShortUrl);

apiRouter.route(route.API_URLDATA).get(getUrls);

export default apiRouter;
