/** Importing NPM modules */
import { Request, Response, NextFunction } from "express";
const fetch = require("node-fetch");
import { isNormal, isPremium } from "../checkers/plan";
/** Importing Custom Modules */

/** Importing DotEnv for process.env */
import * as dotenv from "dotenv";
dotenv.config();

/** Importing keys for BrainShop */
const FREE_AI_BID = process.env.FREE_AI_BID! as string;
const FREE_AI_KEY = process.env.FREE_AI_KEY! as string;

/** The Main GetAIResponse function */
const getAIResponse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const private_key = process.env.PRIVATE_KEY! as string;
  const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private")
  if(RapidApi !== private_key) return res.status(400).send("You are only allowed to make requests through RapidApi, contact for more support.")
  
  const AuthKey = req.get("Authorization")! as string;
  if (!AuthKey)
    return res
      .status(403)
      .send("Authorization key is not present, contact for more support.");
  if (!await isNormal(AuthKey) && !await isPremium(AuthKey))
    return res
      .status(403)
      .send("Your key is invalid, contact for more support.");
  const msg = req.query.msg as string;
  const id = req.query.id ? req.query.id : 1
  if (!msg) return res.status(400).send("Message is not present.")
  const response = await fetch(
    `http://api.brainshop.ai/get?bid=${FREE_AI_BID}&key=${FREE_AI_KEY}&uid=${id}&msg=${msg}`
  )
  const data = await response.json() as any;
  const raw_response = data["cnt"];

  /** Get query paremeters for customisation */
  const bot_name = req.query.bot_name ? req.query.bot_name : "Random Stuff Api",
    bot_master = req.query.bot_master ? req.query.bot_master : "PGamerX",
    bot_age = req.query.bot_age ? req.query.bot_age : "19",
    bot_location = req.query.location ? req.query.location : "India",
    bot_company = req.query.bot_company
      ? req.query.bot_company
      : "PGamerX Studio",
    bot_birth_year = req.query.bot_birth_year
      ? req.query.bot_birth_year
      : "2002",
    bot_birth_date = req.query.bot_birth_date
      ? req.query.bot_birth_date
      : "1st January 2002",
    bot_birth_place = req.query.bot_birth_place
      ? req.query.bot_birth_place
      : "India",
    bot_gender = req.query.bot_gender ? req.query.bot_gender : "Male",
    bot_favorite_actor = req.query.bot_favorite_actor
      ? req.query.bot_favorite_actor
      : "Jim Carrey",
    bot_favorite_actress = req.query.bot_favorite_actress
      ? req.query.bot_favorite_actress
      : "Emma Watson",
    bot_favorite_artist = req.query.bot_favorite_artist
      ? req.query.bot_favorite_artist
      : "Eminem",
    bot_favorite_band = req.query.bot_favorite_band
      ? req.query.bot_favorite_band
      : "Imagine Doggos",
    bot_favorite_book = req.query.bot_favorite_book
      ? req.query.bot_favorite_book
      : "Harry Potter",
    bot_favorite_color = req.query.bot_favorite_color
      ? req.query.bot_favorite_color
      : "Blue",
    bot_email = req.query.bot_email ? req.query.bot_email : "admin@pgamerx.com",
    bot_build = req.query.bot_build ? req.query.bot_build : "Public";

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

  /** Declare the BotDetails interface */
  interface BotDetails {
    BotName: string;
    BotMaster: string;
    BotAge: string;
    BotLocation: string;
    BotCompany: string;
    BotBirthYear: string;
    BotBirthDate: string;
    BotBirthPlace: string;
  }

  /** Declare the AIResponse interface */
  interface AIResponse {
    BotDetails: BotDetails;
    AIResponse: string;
  }

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
};

/** Exporting the function */
export default { getAIResponse };
