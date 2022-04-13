
import express from 'express';
import controller from "../handlers/ai"
const router = express.Router();

router.post("/customize", controller.RegisterAi);
router.get("/response", controller.GetAiResponse);

export = router;