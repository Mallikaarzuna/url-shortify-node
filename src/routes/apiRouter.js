import express from 'express';
import route from './route.json' assert { type: 'json' };
import { handlerRegisterUser } from '../controllers/signUp.js';
import { getShortUrl } from '../controllers/shortUrl.js';
import { getUrls, getUserUrls } from '../controllers/urls.js';
import { privateApi } from '../middlewares/privatePage.js';
import { handleLoginUser } from '../controllers/login.js';
import { handleShortUrl } from '../controllers/home.js';
import handleLogoutUser from '../controllers/logout.js';

const apiRouter = express.Router();

apiRouter.route(route.API_LOGOUT).get(handleLogoutUser);

apiRouter.route(route.API_REGISTER).post(handlerRegisterUser);

apiRouter.route(route.API_LOGIN).post(handleLoginUser);

apiRouter.route(route.API_SHORT_URL).post(getShortUrl);

apiRouter.route(route.API_URLDATA).get(privateApi, getUrls);
//apiRouter.route(route.API_URLDATA).get(getUrls);

//apiRouter.route(route.API_UserUrlData).get(getUserUrls);

apiRouter.route('/redirect/:shortId').get(handleShortUrl);

export default apiRouter;
