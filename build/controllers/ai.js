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
const fetch = require("node-fetch");
const plan_1 = require("../checkers/plan");
/** Importing Custom Modules */
/** Importing DotEnv for process.env */
const dotenv = __importStar(require("dotenv"));
dotenv.config();
/** Importing keys for BrainShop */
const FREE_AI_BID = process.env.FREE_AI_BID;
const FREE_AI_KEY = process.env.FREE_AI_KEY;
/** The Main GetAIResponse function */
const getAIResponse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    const msg = req.query.msg;
    const id = req.query.id ? req.query.id : 1;
    if (!msg)
        return res.status(400).send("Message is not present.");
    const response = yield fetch(`http://api.brainshop.ai/get?bid=${FREE_AI_BID}&key=${FREE_AI_KEY}&uid=${id}&msg=${msg}`);
    const data = yield response.json();
    const raw_response = data["cnt"];
    /** Get query paremeters for customisation */
    const bot_name = req.query.bot_name ? req.query.bot_name : "Random Stuff Api", bot_master = req.query.bot_master ? req.query.bot_master : "PGamerX", bot_age = req.query.bot_age ? req.query.bot_age : "19", bot_location = req.query.location ? req.query.location : "India", bot_company = req.query.bot_company
        ? req.query.bot_company
        : "PGamerX Studio", bot_birth_year = req.query.bot_birth_year
        ? req.query.bot_birth_year
        : "2002", bot_birth_date = req.query.bot_birth_date
        ? req.query.bot_birth_date
        : "1st January 2002", bot_birth_place = req.query.bot_birth_place
        ? req.query.bot_birth_place
        : "India", bot_gender = req.query.bot_gender ? req.query.bot_gender : "Male", bot_favorite_actor = req.query.bot_favorite_actor
        ? req.query.bot_favorite_actor
        : "Jim Carrey", bot_favorite_actress = req.query.bot_favorite_actress
        ? req.query.bot_favorite_actress
        : "Emma Watson", bot_favorite_artist = req.query.bot_favorite_artist
        ? req.query.bot_favorite_artist
        : "Eminem", bot_favorite_band = req.query.bot_favorite_band
        ? req.query.bot_favorite_band
        : "Imagine Doggos", bot_favorite_book = req.query.bot_favorite_book
        ? req.query.bot_favorite_book
        : "Harry Potter", bot_favorite_color = req.query.bot_favorite_color
        ? req.query.bot_favorite_color
        : "Blue", bot_email = req.query.bot_email ? req.query.bot_email : "admin@pgamerx.com", bot_build = req.query.bot_build ? req.query.bot_build : "Public";
    /** Frame final message after customisation */
    const message = raw_response
        .replace("Aco", bot_name)
        .replace("bot_master", bot_master)
        .replace("10", bot_age)
        .replace("Acobot", bot_company)
        .replace("2012", bot_birth_year)
        .replace("acobot.ai", bot_birth_place)
        .replace("March 18, 2012", bot_birth_date)
        .replace("female", bot_gender)
        .replace("Tom Hanks", bot_favorite_actor)
        .replace("Julia Roberts", bot_favorite_actress)
        .replace("Leonardo Da Vinci", bot_favorite_artist)
        .replace("Beatles", bot_favorite_band)
        .replace("The Odyssey", bot_favorite_book)
        .replace("green", bot_favorite_color)
        .replace("support@acobot.ai", bot_email)
        .replace("Acobot edition 2.0", bot_build)
        .replace("acobot.ai", bot_location);
    /** Return the JSON response */
    return res.json({
        BotDetails: {
            BotName: bot_name,
            BotMaster: bot_master,
            BotAge: bot_age,
            BotLocation: bot_location,
            BotCompany: bot_company,
            BotBirthYear: bot_birth_year,
            BotBirthDate: bot_birth_date,
            BotBirthPlace: bot_birth_place,
        },
        AIResponse: message,
    });
});
/** Exporting the function */
exports.default = { getAIResponse };
