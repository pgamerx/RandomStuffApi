import { Request, Response, NextFunction } from 'express';
import { isNormal, isPremium } from '../checkers/plan';
const ainasepics = require("ainasepics")


/** Importing DotEnv for process.env */
import * as dotenv from "dotenv";
dotenv.config();

const getCatImage = async (req: Request, res: Response, next: NextFunction) => {
    const private_key = process.env.PRIVATE_KEY! as string;
    const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private")
    if(RapidApi !== private_key) return res.status(400).send("You are only allowed to make requests through RapidApi, contact for more support.")
    
    const AuthKey = req.get("Authorization")! as string;
    const limit = req.query.limit
    if(Number(limit)>12 || Number(limit)<1 || !limit){
        return res.status(400).send("Limit must be between 1 and 12")
    }
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");
    ainasepics.getMultiple({ name: 'cat', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}

// Make a similar function getDogImage 
const getDogImage = async (req: Request, res: Response, next: NextFunction) => {
    const AuthKey = req.get("Authorization")! as string;
    const limit = req.query.limit
    if(Number(limit)>12 || Number(limit)<1 || !limit){
        return res.status(400).send("Limit must be between 1 and 12")
    }
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");
    ainasepics.getMultiple({ name: 'dog', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}

const getWolfImage = async (req: Request, res: Response, next: NextFunction) => {
    const AuthKey = req.get("Authorization")! as string;
    const limit = req.query.limit
    if(Number(limit)>12 || Number(limit)<1 || !limit){
        return res.status(400).send("Limit must be between 1 and 12")
    }
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");
    ainasepics.getMultiple({ name: 'wolf', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}

const getFoxImage = async (req: Request, res: Response, next: NextFunction) => {
    const AuthKey = req.get("Authorization")! as string;
    const limit = req.query.limit
    if(Number(limit)>12 || Number(limit)<1 || !limit){
        return res.status(400).send("Limit must be between 1 and 12")
    }
    if (!AuthKey)
        return res
            .status(403)
            .send("Authorization key is not present, contact for more support.");
    if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
        return res
            .status(403)
            .send("Your key is invalid, contact for more support.");
    ainasepics.getMultiple({ name: 'fox', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}

export default {
    getCatImage,
    getDogImage,
    getWolfImage,
    getFoxImage
}




