import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';

import auth from '../models/auth'

interface AIInfo {
    BotName: string;
    BotAge: string;
    BotLocation: string;
    BotBirthYear: string;
    BotBirthDate: string;
    BotBirthMonth: string;
    BotCompany: string;
    BotBirthPlace: string;
    BotGender: string;
    BotFavActor: string;
    BotFavArtist: string;
    BotFavActress: string;
    BotFavBand: string;
    BotFavColor: string;
    BotFavBook: string;
    BotEmail: string;
    BotBuild: string;
}

const RegisterAi = async (req: Request, res: Response, next: NextFunction) => {

    const body = req.body;
    const { BotName, BotAge, BotLocation, BotBirthYear, BotBirthDate, BotBirthMonth, BotCompany, BotBirthPlace, BotGender, BotFavActor, BotFavArtist, BotFavActress, BotFavBand, BotFavColor, BotFavBook, BotEmail, BotBuild } = body

    // Check if all of these fields are present in the request
    if (!BotName || !BotAge || !BotLocation || !BotBirthYear || !BotBirthDate || !BotBirthMonth || !BotCompany || !BotBirthPlace || !BotGender || !BotFavActor || !BotFavArtist || !BotFavActress || !BotFavBand || !BotFavColor || !BotFavBook || !BotEmail || !BotBuild) {
        return res.status(400).json({
            message: "Missing fields in request"
        });
    }

    // TODO: Save the user and api key to the database.


    const doc = await auth.findOneAndUpdate({
        key: "something"
    }, {
        aiparams: <AIInfo><unknown>{
            BotName: BotName,
            BotAge: BotAge,
            BotLocation: BotLocation,
            BotBirthYear: BotBirthYear,
            BotBirthDate: BotBirthDate,
            BotBirthMonth: BotBirthMonth,
            BotCompany: BotCompany,
            BotBirthPlace: BotBirthPlace,
            BotGender: BotGender,
            BotFavActor: BotFavActor,
            BotFavArtist: BotFavArtist,
            BotFavActress: BotFavActress,
            BotFavBand: BotFavBand,
            BotFavColor: BotFavColor,
            BotFavBook: BotFavBook,
            BotEmail: BotEmail,
            BotBuild: BotBuild
        }
    }, {
        new: true
    })

    if (!doc) {
        return res.status(400).json({
            message: "Could not find user"
        });
    }

    return res.status(200).json({
        message: "Successfully registered",
        parameters: doc.aiparams
    });
}

const GetAiResponse = async (req: Request, res: Response, next: NextFunction) => {
    // TODO: Implement API keys and ratelimit
}