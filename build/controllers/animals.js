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
const plan_1 = require("../checkers/plan");
const ainasepics = require("ainasepics");
/** Importing DotEnv for process.env */
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const getCatImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const private_key = process.env.PRIVATE_KEY;
    const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private");
    if (RapidApi !== private_key)
        return res.status(400).send("You are only allowed to make requests through RapidApi, contact for more support.");
    const AuthKey = req.get("Authorization");
    const limit = req.query.limit;
    if (Number(limit) > 12 || Number(limit) < 1 || !limit) {
        return res.status(400).send("Limit must be between 1 and 12");
    }
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(yield (0, plan_1.isNormal)(AuthKey)) && !(yield (0, plan_1.isPremium)(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");
    ainasepics.getMultiple({ name: 'cat', limit: Number(limit) }) // Max limit is 12
        .then((search) => { return res.json(search.results); }).catch((err) => {
        res.status(500).send(err);
    });
});
// Make a similar function getDogImage 
const getDogImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const private_key = process.env.PRIVATE_KEY;
    const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private");
    if (RapidApi !== private_key)
        return res.status(400).send("You are only allowed to make requests through RapidApi, contact for more support.");
    const AuthKey = req.get("Authorization");
    const limit = req.query.limit;
    if (Number(limit) > 12 || Number(limit) < 1 || !limit) {
        return res.status(400).send("Limit must be between 1 and 12");
    }
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(yield (0, plan_1.isNormal)(AuthKey)) && !(yield (0, plan_1.isPremium)(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");
    ainasepics.getMultiple({ name: 'dog', limit: Number(limit) }) // Max limit is 12
        .then((search) => { return res.json(search.results); }).catch((err) => {
        res.status(500).send(err);
    });
});
const getWolfImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const private_key = process.env.PRIVATE_KEY;
    const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private");
    if (RapidApi !== private_key)
        return res.status(400).send("You are only allowed to make requests through RapidApi, contact for more support.");
    const AuthKey = req.get("Authorization");
    const limit = req.query.limit;
    if (Number(limit) > 12 || Number(limit) < 1 || !limit) {
        return res.status(400).send("Limit must be between 1 and 12");
    }
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(yield (0, plan_1.isNormal)(AuthKey)) && !(yield (0, plan_1.isPremium)(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");
    ainasepics.getMultiple({ name: 'wolf', limit: Number(limit) }) // Max limit is 12
        .then((search) => { return res.json(search.results); }).catch((err) => {
        res.status(500).send(err);
    });
});
const getFoxImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const private_key = process.env.PRIVATE_KEY;
    const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private");
    if (RapidApi !== private_key)
        return res.status(400).send("You are only allowed to make requests through RapidApi, contact for more support.");
    const AuthKey = req.get("Authorization");
    const limit = req.query.limit;
    if (Number(limit) > 12 || Number(limit) < 1 || !limit) {
        return res.status(400).send("Limit must be between 1 and 12");
    }
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(yield (0, plan_1.isNormal)(AuthKey)) && !(yield (0, plan_1.isPremium)(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");
    ainasepics.getMultiple({ name: 'fox', limit: Number(limit) }) // Max limit is 12
        .then((search) => { return res.json(search.results); }).catch((err) => {
        res.status(500).send(err);
    });
});
exports.default = {
    getCatImage,
    getDogImage,
    getWolfImage,
    getFoxImage
};
