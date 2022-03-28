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
exports.getAnimeImage = void 0;
const plan_1 = require("../checkers/plan");
const { AnimeWallpaper } = require("anime-wallpaper");
const wall = new AnimeWallpaper();
/** Importing DotEnv for process.env */
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const getAnimeImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const private_key = process.env.PRIVATE_KEY;
    const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private");
    if (RapidApi !== private_key)
        return res
            .status(400)
            .send("You are only allowed to make requests through RapidApi, contact for more support.");
    const AuthKey = req.get("Authorization");
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(yield (0, plan_1.isNormal)(AuthKey)) && !(yield (0, plan_1.isPremium)(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");
    const query = req.query.query;
    if (!query)
        return res.status(400).send("No search query provided");
    const channel = req.query.channel;
    if (!channel || ![1, 2, 3].includes(parseInt(channel)))
        return res.status(400).send("No Channel/Invalid Channel provided");
    // Make a switch statement for parseInt(channel) upto 3
    switch (parseInt(channel)) {
        case 1:
            const wallpaper = yield wall.getAnimeWall1({ search: query, page: 1 });
            res.json(wallpaper);
            break;
        case 2:
            const wallpaper2 = yield wall.getAnimeWall2(query);
            res.json(wallpaper2);
            break;
        case 3:
            const wallpaper3 = yield wall.getAnimeWall4({
                title: query,
                type: "sfw",
                page: 1,
            });
            res.json(wallpaper3);
            break;
        default:
            break;
    }
});
exports.getAnimeImage = getAnimeImage;
