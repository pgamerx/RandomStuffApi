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
/** Use require() because this package doesn't support ESM6 */
const reddit = require("reddit.images");
/** Importing DotEnv for process.env */
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const fetchRandomMeme = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    const type = req.query.searchType;
    const types = ["hot", "new", "rising", "top"];
    if (!types.includes(type)) {
        return res
            .status(400)
            .send(`Invalid Type Provided, kindly provide one of the following types: ${types}`);
    }
    reddit
        .FetchRandomMeme({ searchType: type })
        .then((data) => {
        res.status(200).send(data);
    })
        .catch((err) => {
        res.status(500).send(err);
    });
});
const fetchImageFromSubReddit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    const subreddit = req.query.subreddit;
    const type = req.query.searchType;
    const types = ["hot", "new", "rising", "top"];
    if (!subreddit) {
        return res.status(400).send("Subreddit is not present, kindly provide one");
    }
    if (!types.includes(type)) {
        return res
            .status(400)
            .send(`Invalid Type Provided, kindly provide one of the following types: ${types}`);
    }
    reddit
        .FetchSubredditPost({ subreddit: subreddit, searchType: type })
        .then((data) => {
        res.json(data);
    })
        .catch((err) => {
        res.status(500).send(err);
    });
});
const fetchPostById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    const id = req.query.id;
    if (!id) {
        return res.status(400).send("Id is not present, kindly provide one");
    }
    reddit
        .FetchPostbyID(id)
        .then((data) => {
        res.json(data);
    })
        .catch((err) => {
        res.status(500).send(err);
    });
});
const FetchRandomPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    const type = req.query.searchType;
    const types = ["hot", "new", "rising", "top"];
    if (!types.includes(type)) {
        return res
            .status(400)
            .send(`Invalid Type Provided, kindly provide one of the following types: ${types}`);
    }
    reddit
        .FetchRandomPost({ searchType: type })
        .then((data) => {
        res.json(data);
    })
        .catch((err) => {
        res.status(500).send(err);
    });
});
const FetchPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    const subreddit = req.query.subreddit;
    const type = req.query.searchType;
    const types = ["hot", "new", "rising", "top"];
    if (!subreddit) {
        return res.status(400).send("Subreddit is not present, kindly provide one");
    }
    if (!types.includes(type)) {
        return res
            .status(400)
            .send(`Invalid Type Provided, kindly provide one of the following types: ${types}`);
    }
    reddit
        .FetchPost({ subreddit: subreddit, searchType: type })
        .then((data) => {
        res.json(data);
    })
        .catch((err) => {
        res.status(500).send(err);
    });
});
exports.default = {
    fetchRandomMeme,
    fetchImageFromSubReddit,
    fetchPostById,
    FetchRandomPost,
    FetchPost,
};
