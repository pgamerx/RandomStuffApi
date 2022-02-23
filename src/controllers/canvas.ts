/** Importing NPM modules */
import { Request, Response, NextFunction } from "express";
const fetch = require("node-fetch");
import { isNormal, isPremium } from "../checkers/plan";
const canvacord = require("canvacord");


/** Importing DotEnv for process.env */
import * as dotenv from "dotenv";
dotenv.config();

declare namespace Express {
  export interface Request {
    path: any;
    method: any;
  }
  export interface Response {
    path: any;
    method: any;
  }
}

const canvasMethod = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const private_key = process.env.PRIVATE_KEY! as string;
  const RapidApi = req.get("x-RapidApi-private") || req.get("RapidApi-private")
  if(RapidApi !== private_key) return res.status(400).send("You are only allowed to make requests through RapidApi, contact for more support.")
  
  const AuthKey = req.get("Authorization")! as string;
  if (!AuthKey)
    return res
      .status(403)
      .send("Authorization key is not present, contact for more support.");
  if (!(await isNormal(AuthKey)) && !(await isPremium(AuthKey)))
    return res
      .status(403)
      .send("Your key is invalid, contact for more support.");

  let img1 = req.query.img1 || req.query.img;
  let img2 = req.query.img2;
  let img3 = req.query.img3;
  let txt = req.query.txt;
  let method = req.params.method;
  if (!method) return res.status(400).send(`Some parameters are missing.`);
  const list = [
    "affect",
    "beautiful",
    "wanted",
    "delete",
    "trigger",
    "facepalm",
    "blur",
    "hitler",
    "jail",
    "invert",
    "jokeOverHead",
  ];
  const list2 = ["bed", "fuse", "kiss", "slap", "spank"];
  const list3 = ["distracted"];
  const list4 = ["changemymind"];
  if (list.includes(method as any)) {
    if (!img1) return res.status(400).send(`First image is missing`);
    let response_buffer = await canvacord.Canvas[method as any](img1);
    let response_base64 = response_buffer.toString("base64");
    return res.json({ base64: response_base64 });
  } else if (list2.includes(method as any)) {
    if (!img1) return res.status(400).send(`First image is missing`);
    if (!img2) return res.status(400).send(`Second image is missing`);
    let response_buffer = await canvacord.Canvas[method as any](img1, img2);
    let response_base64 = response_buffer.toString("base64");
    return res.json({ base64: response_base64 });
  } else if (list3.includes(method as any)) {
    if (!img1) return res.status(400).send(`First image is missing`);
    if (!img2) return res.status(400).send(`Second image is missing`);
    if (!img3) return res.status(400).send(`Third image is missing`);
    let response_buffer = await canvacord.Canvas[method as any](
      img1,
      img2,
      img3
    );
    let response_base64 = response_buffer.toString("base64");
    return res.json({ base64: response_base64 });
  } else if (list4.includes(method as any)) {
    if (!txt) return res.status(400).send("Text is missing");
    let response_buffer = await canvacord.Canvas[method as any](txt);
    let response_base64 = response_buffer.toString("base64");
    return res.json({ base64: response_base64 });
  }
};

export { canvasMethod };
