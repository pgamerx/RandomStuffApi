/** Importing everything else */
import { Request, Response, NextFunction } from "express";
import { isNormal, isPremium } from "../checkers/plan";
/** Use require() because this package doesn't support ESM6 */
const reddit = require("reddit.images");


/** Importing DotEnv for process.env */
import * as dotenv from "dotenv";
dotenv.config();

const fetchRandomMeme = async (
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
  if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
    return res
      .status(403)
      .send("Your key is invalid, contact for more support.");

  const type = req.query.searchType as string;
  const types = ["hot", "new", "rising", "top"];
  if (!types.includes(type)) {
    return res

      .status(400)
      .send(
        `Invalid Type Provided, kindly provide one of the following types: ${types}`
      );
  }
  reddit
    .FetchRandomMeme({ searchType: type })
    .then((data: any) => {
      res.status(200).send(data);
    })
    .catch((err: any) => {
      res.status(500).send(err);
    });
};

const fetchImageFromSubReddit = async (
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
  if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
    return res
      .status(403)
      .send("Your key is invalid, contact for more support.");

  const subreddit = req.query.subreddit as string;
  const type = req.query.searchType as string;
  const types = ["hot", "new", "rising", "top"];
  if (!subreddit) {
    return res.status(400).send("Subreddit is not present, kindly provide one");
  }
  if (!types.includes(type)) {
    return res
      .status(400)
      .send(
        `Invalid Type Provided, kindly provide one of the following types: ${types}`
      );
  }

  reddit
    .FetchSubredditPost({ subreddit: subreddit, searchType: type })
    .then((data: any) => {
      res.json(data);
    })
    .catch((err: any) => {
      res.status(500).send(err);
    });
};

const fetchPostById = async (
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
  if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
    return res
      .status(403)
      .send("Your key is invalid, contact for more support.");

  const id = req.query.id as string;
  if (!id) {
    return res.status(400).send("Id is not present, kindly provide one");
  }

  reddit
    .FetchPostbyID(id)
    .then((data: any) => {
      res.json(data);
    })
    .catch((err: any) => {
      res.status(500).send(err);
    });
};

const FetchRandomPost = async (
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
  if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
    return res
      .status(403)
      .send("Your key is invalid, contact for more support.");

  const type = req.query.searchType as string;
  const types = ["hot", "new", "rising", "top"];
  if (!types.includes(type)) {
    return res
      .status(400)
      .send(
        `Invalid Type Provided, kindly provide one of the following types: ${types}`
      );
  }

  reddit
    .FetchRandomPost({ searchType: type })
    .then((data: any) => {
      res.json(data);
    })
    .catch((err: any) => {
      res.status(500).send(err);
    });
};

const FetchPost = async (req: Request, res: Response, next: NextFunction) => {
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

  const subreddit = req.query.subreddit as string;
  const type = req.query.searchType as string;
  const types = ["hot", "new", "rising", "top"];
  if (!subreddit) {
    return res.status(400).send("Subreddit is not present, kindly provide one");
  }
  if (!types.includes(type)) {
    return res
      .status(400)
      .send(
        `Invalid Type Provided, kindly provide one of the following types: ${types}`
      );
  }

  reddit
    .FetchPost({ subreddit: subreddit, searchType: type })
    .then((data: any) => {
      res.json(data);
    })
    .catch((err: any) => {
      res.status(500).send(err);
    });
};

export default {
  fetchRandomMeme,
  fetchImageFromSubReddit,
  fetchPostById,
  FetchRandomPost,
    FetchPost,
};
