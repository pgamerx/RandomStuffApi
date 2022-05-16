/** Importing everything else */
import { Request, Response, NextFunction } from "express";
/** Use require() because this package doesn't support ESM6 */
const reddit = require("reddit.images");
import auth from "../models/auth";


/** Importing DotEnv for process.env */
import * as dotenv from "dotenv";
dotenv.config();

const fetchRandomMeme = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
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
    const type = req.query.searchType as string;
    const types = ["hot", "new", "rising", "top"];
    if (!types.includes(type)) {
        return res

            .status(400)
            .json({
                message: `Invalid Type Provided, kindly provide one of the following types: ${types}`
            });
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
            res.status(500).json({
                message: err
            });
        });
};

const fetchPostById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

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
            res.status(500).json({
                message: err
            })
        });
};

export default {
    fetchRandomMeme,
    fetchImageFromSubReddit,
    fetchPostById,
    FetchRandomPost,
    FetchPost,
};