/** Importing NPM modules */
import { Request, Response, NextFunction } from "express";

/** Custom modules */
import { isNormal, isPremium } from "../../checkers/plan";

/** Old Modules */
const fetch = require("node-fetch");

const SfwWaifu = async (req: Request, res: Response, next: NextFunction) => {
    const AuthKey = req.query.Authorization! as string;
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(await isPremium(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");

    const type = req.query.type ? req.query.type : "awoo"
    const response = await fetch(
        `https://waifu.pics/api/sfw/${type}`,
        {
            method: "GET",
        }
    );
    const json = await response.json();
    return res.json(json);
}

const NsfwWaifu = async (req: Request, res: Response, next: NextFunction) => {
    const AuthKey = req.query.Authorization! as string;
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(await isPremium(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");

    const type = req.query.type ? req.query.type : "waifu"
    const response = await fetch(
        `https://waifu.pics/api/nsfw/${type}`,
        {
            method: "GET",
        }
    );
    const json = await response.json();
    return res.json(json);
}

export default {NsfwWaifu, SfwWaifu}