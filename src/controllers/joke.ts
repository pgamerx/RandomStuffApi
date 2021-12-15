/** Importing NPM modules */
import { Request, Response, NextFunction } from "express";
const fetch = require("node-fetch");
import { isNormal, isPremium } from "../checkers/plan";

const getJoke = async (req: Request, res: Response, next: NextFunction) => {
  const AuthKey = req.get("Authorization")! as string;
  if (!AuthKey)
    return res
      .status(403)
      .send("Authorization key is not present, contact for more support.");
  if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
    return res
      .status(403)
      .send("Your key is invalid, contact for more support.");

  const type = req.query.type as string;
  const types = [
    "any",
    "dark",
    "pun",
    "spooky",
    "christmas",
    "Programming",
    "misc",
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
