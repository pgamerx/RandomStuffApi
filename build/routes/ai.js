"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const ai_1 = __importDefault(require("../controllers/ai"));
const normal_1 = require("../ratelimits/normal");
const router = express_1.default.Router();
router.get('/ai', ai_1.default.getAIResponse, normal_1.normal_min, normal_1.normal_day);
module.exports = router;
