import { Request, Response, NextFunction } from 'express';
import { isNormal, isPremium } from '../checkers/plan';
const ainasepics = require("ainasepics")

const getHappyAnime = async (req: Request, res: Response, next: NextFunction) => {
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
    ainasepics.getMultiple({ name: 'happy', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}

const getHiAnime = async (req: Request, res: Response, next: NextFunction) => {
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
    ainasepics.getMultiple({ name: 'hi', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}

const getHugAnime = async (req: Request, res: Response, next: NextFunction) => {
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
    ainasepics.getMultiple({ name: 'hug', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}

const getKissAnime = async (req: Request, res: Response, next: NextFunction) => {
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
    ainasepics.getMultiple({ name: 'kiss', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}
const getNervousAnime = async (req: Request, res: Response, next: NextFunction) => {
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
    ainasepics.getMultiple({ name: 'nervous', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}
const getPatAnime = async (req: Request, res: Response, next: NextFunction) => {
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
    ainasepics.getMultiple({ name: 'pat', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}
const getPunchAnime = async (req: Request, res: Response, next: NextFunction) => {
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
    ainasepics.getMultiple({ name: 'punch', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}
const getSlapAnime = async (req: Request, res: Response, next: NextFunction) => {
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
    ainasepics.getMultiple({ name: 'slap', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}
const getRunAnime = async (req: Request, res: Response, next: NextFunction) => {
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
    ainasepics.getMultiple({ name: 'run', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}
const getCryAnime = async (req: Request, res: Response, next: NextFunction) => {
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
    ainasepics.getMultiple({ name: 'cry', limit: Number(limit) }) // Max limit is 12
    .then((search: { results: any; }) => {return res.json(search.results)}).catch((err: any) => {
        res.status(500).send(err);
    }
    );
}

export default {
    getHappyAnime,
    getNervousAnime,
    getPatAnime,
    getPunchAnime,
    getSlapAnime,
    getRunAnime,
    getCryAnime,
    getKissAnime,
    getHugAnime,
    getHiAnime
}