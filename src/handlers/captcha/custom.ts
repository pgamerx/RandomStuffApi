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


    const { DimensionHeight, DimensionWidth, Color, Text, DecoyOpacity, TraceColor } = req.body

    console.log(req.body)
    // Check if any of them are null

    if (DimensionHeight == null || DimensionWidth == null || Color == null || Text == null || DecoyOpacity == null || TraceColor == null) {
        return res.status(400).json({
            message: `Missing parameters`
        });
    }
    if (!DimensionHeight || !DimensionWidth || !Color || !Text || !DecoyOpacity || !TraceColor) {
        return res.status(400).json({
            message: `Missing parameters`
        });
    }

    // const color = (req.query.colour !== null || req.query.color) ? req.query.colour as string : "deeppink";
    // Generate a random 6 digit string
    const string = Math.random().toString(36).substring(2, 8);
    const captcha = new CaptchaGenerator()
        .setDimension(parseInt(DimensionHeight), parseInt(DimensionWidth))
        .setCaptcha({ text: Text, color: Color })
        .setDecoy({ opacity: parseInt(DecoyOpacity) })
        .setTrace({ color: TraceColor });

    try {
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

    } catch (e) {
        return res.status(400).json({
            message: `Could not generate captcha`,
            error: e
        });
    }

}

export default { ReturnCaptchaAndText }