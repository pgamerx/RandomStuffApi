/** source/server.ts */
import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';

import { daily_rateLimiter, minute_rateLimiter, captcha_minute_rateLimiter } from './ratelimit/ratelimit_all';

import mongoose from 'mongoose';

import {MONGO_STRING, bs_key, bs_bid} from './cred';
/** Connecting to DB */
mongoose.connect(
   MONGO_STRING
);

import joke_routes from './routes/joke';
import ai_routes from './routes/ai';
import anime_routes from './routes/anime';
import captcha_routes from './routes/captcha';
import reddit_routes from './routes/reddit';


const router: Express = express();

/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
router.use('/joke', joke_routes, daily_rateLimiter, minute_rateLimiter);

router.use('/ai', ai_routes, daily_rateLimiter, minute_rateLimiter);

router.use('/anime', anime_routes, daily_rateLimiter, minute_rateLimiter);

router.use('/captcha', captcha_routes, captcha_minute_rateLimiter, daily_rateLimiter);

router.use('/reddit', reddit_routes, daily_rateLimiter, minute_rateLimiter);

router.get('/docs', (req, res) => {
    res.redirect("https://documenter.getpostman.com/view/19748581/VUjTjhiQ")
} );

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Invalid route, please check the request url');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = 1919;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));