/** Importing NPM modules */
import { Request, Response, NextFunction } from "express";
const fetch = require("node-fetch");
import { isNormal, isPremium } from "../checkers/plan";


/** Importing DotEnv for process.env */
import * as dotenv from "dotenv";
dotenv.config();

const getJoke = async (req: Request, res: Response, next: NextFunction) => {
  const private_key = process.env.PRIVATE_KEY! as string;
  const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private")
  if(RapidApi !== private_key) return res.status(400).send("You are only allowed to make requests through RapidApi, contact for more support.")
  
  const AuthKey = req.get("Authorization")! as string;
  if (!AuthKey)
    return res
      .status(403)
      .send("Authorization key is not present, contact for more support.");
  if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
    return res
      .status(403)
      .send("Your key is invalid, contact for more support.");

  const type2 = req.query.type as string;
  const type = type2.charAt(0).toUpperCase() + type2.slice(1);
  const types = [
    "Any",
    "Dark",
    "Pun",
    "Spooky",
    "Christmas",
    "Programming",
    "Misc",
  ];
  if (!types.includes(type)) {
    return res
      .status(400)
      .send(
        `Invalid Type Provided, kindly provide one of the following types: ${types}`
      );
  }
  const blacklist = req.query.blacklist as string;
  const blacklist_array = [
    "nsfw",
    "religious",
    "political",
    "racist",
    "sexist",
    "explicit",
  ];

  if (blacklist) {
    if (!blacklist_array.includes(blacklist)) {
      return res
        .status(400)
        .send(
          "Invalid Flag(s) provided, kindly provide one of the following flags: " +
            blacklist_array
        );
    }
  }

  if(blacklist){
    const response = await fetch(
      `https://v2.jokeapi.dev` + `/joke/${type}?blacklistFlags=${blacklist}`
    );
    const json = await response.json();
  
    return res.json(json);
  }
  else{
    const response = await fetch(
      `https://v2.jokeapi.dev` + `/joke/${type}`
    );
    const json = await response.json();
  
    return res.json(json);
  }
};

/** Exporting the function */
export default { getJoke };
