import { Request, Response, NextFunction } from 'express';
const fetch = require('node-fetch')

import auth from '../models/auth'

import dotenv from 'dotenv'
dotenv.config()

import {MONGO_STRING, bs_key, bs_bid} from './../cred';


interface AIInfo {
    BotName: string;
    BotMaster: string;
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
    const key = req.get("Authorization")
    const body = req.body;
    const { BotName, BotAge, BotLocation, BotBirthYear, BotBirthDate, BotBirthMonth, BotCompany, BotBirthPlace, BotGender, BotFavActor, BotFavArtist, BotFavActress, BotFavBand, BotFavColor, BotFavBook, BotEmail, BotBuild, BotMaster } = body

    console.log(body)

    // Check if all of these fields are present in the request

    const doc = await auth.findOneAndUpdate({
        key: key
    }, {
        aiparams: <AIInfo><unknown>{
            BotName: BotName,
            BotMaster: BotMaster,
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
            message: `Could not find an account linked with ${key}, are you sure it exists?`
        });
    }

    return res.status(200).json({
        message: "Successfully registered",
        parameters: doc.aiparams
    });
}

const GetAiResponse = async (req: Request, res: Response, next: NextFunction) => {

    const key = req.get("Authorization")

    const message = req.query.message! as string
    const user_id = req.query.user_id! as string
    if (!message || message.length > 1000) {
        return res.status(400).json({
            message: "Either the message is missing or the message is longer than 1000 words"
        });
    }

    if (!user_id || user_id.length > 1000) {
        return res.status(400).json({
            message: "Either the user_id is missing or the user_id is longer than 1000 words"
        });
    }

    // Get AI Parameters from the database
    let doc = await auth.findOne({
        key: key
    })

    if (!doc) {
        return res.status(401).json({
            message: `Could not find an account linked with ${key}, are you sure it exists?`
        });
    }

    if (doc.aiparams == null) {
        doc.aiparams = {
            BotName: "Random Stuff API",
            BotAge: "19",
            BotLocation: "India",
            BotBirthYear: "2002",
            BotBirthDate: "1st January 2002",
            BotBirthMonth: "January",
            BotCompany: "PGamerX Studio",
            BotBirthPlace: "India",
            BotGender: "Male",
            BotFavActor: "Jim Carrey",
            BotFavArtist: "Eminem",
            BotFavActress: "Emma Watson",
            BotFavBand: "Imagine Doggos",
            BotFavColor: "Blue",
            BotFavBook: "Harry Potter",
            BotEmail: "admin@pgamerx.com",
            BotBuild: "Public",
            BotMaster: "PGamerX",
            Customized: true
        }
    }

    const BotName = (doc.aiparams.BotName !== null) ? doc.aiparams.BotName : "Random Stuff API"
    const BotAge = (doc.aiparams.BotAge !== null) ? doc.aiparams.BotAge : "19"
    const BotLocation = (doc.aiparams.BotLocation !== null) ? doc.aiparams.BotLocation : "India"
    const BotBirthYear = (doc.aiparams.BotBirthYear !== null) ? doc.aiparams.BotBirthYear : "2002"
    const BotBirthDate = (doc.aiparams.BotBirthDate !== null) ? doc.aiparams.BotBirthDate : "1st January 2002"
    const BotBirthMonth = (doc.aiparams.BotBirthMonth !== null) ? doc.aiparams.BotBirthMonth : "January"
    const BotCompany = (doc.aiparams.BotCompany !== null) ? doc.aiparams.BotCompany : "PGamerX Studio"
    const BotBirthPlace = (doc.aiparams.BotBirthPlace !== null) ? doc.aiparams.BotBirthPlace : "India"
    const BotGender = (doc.aiparams.BotGender !== null) ? doc.aiparams.BotGender : "Male"
    const BotFavActor = (doc.aiparams.BotFavActor !== null) ? doc.aiparams.BotFavActor : "Jim Carrey"
    const BotFavArtist = (doc.aiparams.BotFavArtist !== null) ? doc.aiparams.BotFavArtist : "Eminem"
    const BotFavActress = (doc.aiparams.BotFavActress !== null) ? doc.aiparams.BotFavActress : "Emma Watson"
    const BotFavBand = (doc.aiparams.BotFavBand !== null) ? doc.aiparams.BotFavBand : "Imagine Doggos"
    const BotFavColor = (doc.aiparams.BotFavColor !== null) ? doc.aiparams.BotFavColor : "Blue"
    const BotFavBook = (doc.aiparams.BotFavBook !== null) ? doc.aiparams.BotFavBook : "Harry Potter"
    const BotEmail = (doc.aiparams.BotEmail !== null) ? doc.aiparams.BotEmail : "admin@pgamerx.com"
    const BotBuild = (doc.aiparams.BotBuild !== null) ? doc.aiparams.BotBuild : "Public";
    const BotMaster = (doc.aiparams.BotMaster !== null) ? doc.aiparams.BotMaster : "PGamerX"

    // Get response from brainshop
    const response = await fetch(`http://api.brainshop.ai/get?bid=${bs_bid}&key=${bs_key}&uid=${user_id}&msg=${message}`)
    const json = await response.json() as any

    console.log(json)

    const raw_response = json["cnt"]

    const ai_response = raw_response
        .replace("Aco", BotName)
        .replace("bot_master", BotMaster)
        .replace("10", BotAge)
        .replace("Acobot", BotCompany)
        .replace("2012", BotBirthYear)
        .replace("acobot.ai", BotBirthPlace)
        .replace("March 18, 2012", BotBirthDate)
        .replace("female", BotGender)
        .replace("Tom Hanks", BotFavActor)
        .replace("Julia Roberts", BotFavActress)
        .replace("Leonardo Da Vinci", BotFavArtist)
        .replace("Beatles", BotFavBand)
        .replace("The Odyssey", BotFavBook)
        .replace("green", BotFavColor)
        .replace("support@acobot.ai", BotEmail)
        .replace("Acobot edition 2.0", BotBuild)
        .replace("acobot.ai", BotLocation);


    // Get the path 
    /**
     * For example: 
     * api.pgamerx.com/lal/lal
     * 
     * Path = "lal/lal"
     */

    return res.status(200).json({
        message: ai_response,
        warning: (doc.aiparams.BotName === "Random Stuff API") ? "You have not set any custom AI parameters yet, for more customisation plese set them" : "No warning"
    })

}

export default {
    RegisterAi,
    GetAiResponse
}