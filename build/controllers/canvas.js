"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.canvasMethod = void 0;
const fetch = require("node-fetch");
const plan_1 = require("../checkers/plan");
const canvacord = require("canvacord");
/** Importing DotEnv for process.env */
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const canvasMethod = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const private_key = process.env.PRIVATE_KEY;
    const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private");
    if (RapidApi !== private_key)
        return res.status(400).send("You are only allowed to make requests through RapidApi, contact for more support.");
    const AuthKey = req.get("Authorization");
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(yield (0, plan_1.isNormal)(AuthKey)) && !(yield (0, plan_1.isPremium)(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");
    let img1 = req.query.img1 || req.query.img;
    let img2 = req.query.img2;
    let img3 = req.query.img3;
    let txt = req.query.txt;
    let method = req.params.method;
    if (!method)
        return res.status(400).send(`Some parameters are missing.`);
    const list = [
        "affect",
        "beautiful",
        "wanted",
        "delete",
        "trigger",
        "facepalm",
        "blur",
        "hitler",
        "jail",
        "invert",
        "jokeOverHead",
    ];
    const list2 = ["bed", "fuse", "kiss", "slap", "spank"];
    const list3 = ["distracted"];
    const list4 = ["changemymind"];
    if (list.includes(method)) {
        if (!img1)
            return res.status(400).send(`First image is missing`);
        let response_buffer = yield canvacord.Canvas[method](img1);
        let response_base64 = response_buffer.toString("base64");
        return res.json({ base64: response_base64 });
    }
    else if (list2.includes(method)) {
        if (!img1)
            return res.status(400).send(`First image is missing`);
        if (!img2)
            return res.status(400).send(`Second image is missing`);
        let response_buffer = yield canvacord.Canvas[method](img1, img2);
        let response_base64 = response_buffer.toString("base64");
        return res.json({ base64: response_base64 });
    }
    else if (list3.includes(method)) {
        if (!img1)
            return res.status(400).send(`First image is missing`);
        if (!img2)
            return res.status(400).send(`Second image is missing`);
        if (!img3)
            return res.status(400).send(`Third image is missing`);
        let response_buffer = yield canvacord.Canvas[method](img1, img2, img3);
        let response_base64 = response_buffer.toString("base64");
        return res.json({ base64: response_base64 });
    }
    else if (list4.includes(method)) {
        if (!txt)
            return res.status(400).send("Text is missing");
        let response_buffer = yield canvacord.Canvas[method](txt);
        let response_base64 = response_buffer.toString("base64");
        return res.json({ base64: response_base64 });
    }
});
exports.canvasMethod = canvasMethod;
