/** Importing NPM modules */
import { Request, Response, NextFunction } from "express";
import { isNormal, isPremium } from "../checkers/plan";

/** Import the methods of getting jokes */
import controller from "./semi-controllers/jokes";

/** Importing DotEnv for process.env */
import * as dotenv from "dotenv";
dotenv.config();

const getJoke = async (req: Request, res: Response, next: NextFunction) => {
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

  const tag = <string>req?.query?.tag || <string>req?.query.type || "any";
  const tag2 = (tag === "any") ? "any" : tag;
  const blacklist = req.query.blacklist as string;
  const types = await controller.getAllTagsFromAllJokes() as string[];

  if (tag2 === "any") {
    if (blacklist) {
      // Blacklist will be : "tag1,tag2,tag3"
      // We need to split it into an array of strings
      const blacklist_array =
        blacklist.length > 1 ? blacklist.split(",") : [blacklist];
      const exclude_tags = <string[]>blacklist_array;
      const joke = await controller.getRandomJoke({exclude_tags})
      return res.json(joke);
    } else {
      const joke = await controller.getRandomJoke();
      return res.json(joke);
    }
  }

  if(!types.includes(tag)) {
    return res.status(400).send("Invalid Tag provided, available Tags are: " + types.join(", "));
  }
  if (blacklist) {
    // Blacklist will be : "tag1,tag2,tag3"
    // We need to split it into an array of strings
    const blacklist_array =
      blacklist.length > 1 ? blacklist.split(",") : [blacklist];
    const exclude_tags = <string[]>blacklist_array;
    const joke = await controller.getRandomJokeWithTag(tag2, { exclude_tags });
    return res.json(joke);
  } else {
    const joke = await controller.getRandomJokeWithTag(tag2);
    return res.json(joke);
  }
};

/** Exporting the function */
export default { getJoke };
