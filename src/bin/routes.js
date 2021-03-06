import express from 'express';
import V1 from './controllers/V1';
import cookieParser from 'cookie-parser';
import path from 'path';

const v1 = new V1();
const router = express.Router();

router.use(cookieParser());

router.use(
    '/public/',
    express.static(path.resolve('../PortfolioFrontend/public/'))
);
router.use(
    '/static/',
    express.static(path.resolve('../PortfolioFrontend/build/static/'))
);
router.get('/test', (request, response) => response.send({ message: 'test' }));

// V1 routes go here
// router.get('/V1/ping', v1.getPing());

// V2 and so forth keep getting tacked on below

export default router;
