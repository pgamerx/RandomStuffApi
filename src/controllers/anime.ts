import { Request, Response, NextFunction } from "express";
import { isNormal, isPremium } from "../checkers/plan";

const { AnimeWallpaper } = require("anime-wallpaper");
const wall = new AnimeWallpaper();

/** Importing DotEnv for process.env */
import * as dotenv from "dotenv";
dotenv.config();

const getAnimeImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

  const query = req.query.query;
  if (!query) return res.status(400).send("No search query provided");
  const channel = req.query.channel as string;
  if (!channel || ![1, 2, 3].includes(parseInt(channel)))
    return res.status(400).send("No Channel/Invalid Channel provided");

  // Make a switch statement for parseInt(channel) upto 3
  switch (parseInt(channel)) {
    case 1:
      const wallpaper = await wall.getAnimeWall1({ search: query, page: 1 });
      res.json(wallpaper);
      break;
    case 2:
      const wallpaper2 = await wall.getAnimeWall2(query);
      res.json(wallpaper2);
      break;
    case 3:
      const wallpaper3 = await wall.getAnimeWall4({
        title: query,
        type: "sfw",
        page: 1,
      });
      res.json(wallpaper3);
      break;
    default:
      break;
  }
};

// Export main so I can import it as { main }
export { getAnimeImage };
