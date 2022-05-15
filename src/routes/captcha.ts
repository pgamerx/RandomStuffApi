/** source/routes/posts.ts */
import express from 'express';
import controller from "../handlers/captcha/captcha"
import controller2 from "../handlers/captcha/custom"
const router = express.Router();

router.get("/generate", controller.ReturnCaptchaAndText);
router.post("/custom", controller2.ReturnCaptchaAndText);

export = router;