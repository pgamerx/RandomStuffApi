import { rateLimit } from "express-rate-limit";
import { Request, Response } from "express";


const normal_minute_rateLimiter = rateLimit({
    windowMs: 1000 * 60, // 1 minute,
    max:100,
    message: {
        message: "You have exceeded your rate limit for this endpoint. Please contact us for a additional requests.",
    },
    standardHeaders: true

    
})

const normal_daily_rateLimiter = rateLimit({
    windowMs: 1000 * 60 * 60 * 24, // 1 day
    max: 2500,
    message: {
        message: "You have exceeded your rate limit for this endpoint. Please contact us for a additional requests.",
    },
    standardHeaders: true
})

const captcha_minute_rateLimiter = rateLimit({
    windowMs: 1000 * 60, // 1 minute,
    max: 50,
    message: {
        message: "You have exceeded your rate limit for this endpoint. Please contact us for a additional requests.",
    },
    standardHeaders: true
})

export {
    normal_minute_rateLimiter as minute_rateLimiter,
    normal_daily_rateLimiter as daily_rateLimiter,
    captcha_minute_rateLimiter as captcha_minute_rateLimiter
}