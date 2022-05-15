/** source/routes/posts.ts */
import express from 'express';
import controller from "../handlers/captcha"
const router = express.Router();

router.get("/generate", controller.ReturnCaptchaAndText);


export = router;