/** Importing NPM modules */
import { Request, Response, NextFunction } from "express";
const fetch = require("node-fetch");

/** Custom modules */
import { isNormal, isPremium } from "../../checkers/plan";

/** Old Modules */
const factful = require('factful.js')
const facts = factful.fact()

/** Importing DotEnv for process.env */
import * as dotenv from "dotenv";
dotenv.config();

const getFact = async (req: Request, res: Response, next: NextFunction) => {
    const private_key = process.env.PRIVATE_KEY! as string;
  const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private")
  if(RapidApi !== private_key) return res.status(400).send("You are only allowed to make requests through RapidApi, contact for more support.")
  
    const AuthKey = req.get("Authorization")! as string;
    if (!AuthKey)
        return res
        .status(403)
        .send("Authorization key is not present, contact for more support.");
    if (!(await isNormal(AuthKey) && !(await isPremium(AuthKey))))
        return res
        .status(403)
        .send("Your key is invalid, contact for more support.");
    
    const type = req.params.type ? req.params.type : 'all'
    const allowed = ["all", "emoji", "dog", "cat", "space", "covid", "computer", "food"]
    if (!allowed.includes(type as any)) return res.status(400).send(`Type is not allowed`)

    const fact = await facts[type as any]
    return res.json({ fact: fact })
}

export default {getFact}