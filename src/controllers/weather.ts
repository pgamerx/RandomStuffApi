/** Importing NPM modules */
import { Request, Response, NextFunction } from "express";
const weather = require("weather-js");
import { isNormal, isPremium } from "../checkers/plan";
/** Importing Custom Modules */

/** Importing DotEnv for process.env */
import * as dotenv from "dotenv";
dotenv.config();

const GetWeather = async (req: Request, res: Response, next: NextFunction) => {
  const private_key = process.env.PRIVATE_KEY! as string;
  const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private");
  if (RapidApi !== private_key)
    return res
      .status(400)
      .send(
        "You are only allowed to make requests through RapidApi, contact for more support."
      );

  const AuthKey = req.get("Authorization")! as string;
  if (!AuthKey)
    return res
      .status(403)
      .send("Authorization key is not present, contact for more support.");
  if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
    return res
      .status(403)
      .send("Your key is invalid, contact for more support.");

  const city = req.query.city as string;
  if (!city)
    return res
      .status(400)
      .send("City is not present, contact for more support.");
  if (city.length > 50)
    return res
      .status(400)
      .send("City name is too long, contact for more support.");

  weather.find({ search: city, degreeType: "C" }, function (error: any, result: string | any[] | undefined) {
    if (result === undefined || result.length === 0) {
      return res.status(400).send(`Invalid City`);
    }
    if (error) {
      return res.status(500).send(`Error occured - ${error}`);
    }
    return res.json(result);
  });
};
