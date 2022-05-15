import { CaptchaGenerator } from "captcha-canvas";
import { Request, Response } from "express";

import auth from "../../models/auth";

const ReturnCaptchaAndText = async (req: Request, res: Response) => {
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

    const { Dimentions, Color, Text, Decoy, Trace } = req.body
    if (!Dimentions || !Color || !Text || !Decoy || !Trace) {
        return res.status(400).json({
            message: `Missing parameters`
        });
    }

    const color = (req.query.colour !== null || req.query.color) ? req.query.colour as string : "deeppink";
    // Generate a random 6 digit string
    const string = Math.random().toString(36).substring(2, 8);
    const captcha = new CaptchaGenerator()
        .setDimension(Dimentions.width, Dimentions.height)
        .setCaptcha({ text: string, size: Text.size, color: Color.color })
        .setDecoy({ opacity: Decoy.opacity })
        .setTrace({ color: Trace.color });

    const buffer = captcha.generateSync();

    // Convert buffer to base64
    const base64 = buffer.toString("base64");

    // Get the text from the captcha
    const text = captcha.text;

    return res.json({
        solution: text,
        image: {
            base64: base64,
            buffer: buffer
        }
    });

}

export default { ReturnCaptchaAndText }