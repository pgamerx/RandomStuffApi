import { Request, Response } from "express";
const reddit = require('reddit.images')

import auth from '../../models/auth'
/** Importing DotEnv for process.env */
import * as dotenv from "dotenv";
dotenv.config();

const GetAnimeart = async (req: Request, res: Response) => {

    const key = req.get("Authorization");
    if (!key) {
        return res.status(401).json({
            message: "No Auth Token provided"
        });
    }
    const user = await auth.findOne({
        key: key
    })
    if (!user) {
        return res.status(400).json({
            message: `Could not find the account linked with ${key}, are you sure it exists?`
        });
    }

    const subreddit = "AnimeART"
    const type = "hot"
    reddit
        .FetchSubredditPost({ subreddit: subreddit, searchType: type })
        .then((data: any) => {
            return res.json(data);

        })
        .catch((err: any) => {
            return res.status(500).send(err);
        });
}

export default { GetAnimeart }