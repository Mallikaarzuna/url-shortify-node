import express from 'express';

import { handleShortUrl } from '../controllers/home.js';

const homeRouter = express.Router();

// dynamic routing
homeRouter.route('/:shortId').get(handleShortUrl);

export default homeRouter;
