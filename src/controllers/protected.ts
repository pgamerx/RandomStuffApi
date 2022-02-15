import { Request, Response, NextFunction } from "express";
import keys from "../db_models/keys";
const randomstring = require("randomstring");

const getkey = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.params.email;
  if (email) {
    const info = await keys.findOne({
      email: email,
    });
    if (!info) {
      return res.json(["failure"]);
    } else {
      return res.json([info.key]);
    }
  }
};

const genkey = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.params.email;
  if (email) {
    const key = randomstring.generate(12);
    const info = await keys.findOne({
      email: email,
    });
    if (info) {
      await keys.deleteOne({
        email: email,
      });
      const newData = new keys({
        email: email,
        key: key,
      });
      await newData.save();
      return res.json([key]);
    } else {
      const newData = new keys({
        email: email,
        key: key,
      });
      await newData.save();
      return res.json([key]);
    }
  }
};

const regenkey = async (req: Request, res: Response, next: NextFunction) => {
    const email = req.params.email;
    if (email) {
      const key = randomstring.generate(12);
      const info = await keys.findOne({
        email: email,
      });
      if (info) {
        await keys.deleteOne({
          email: email,
        });
        const newData = new keys({
          email: email,
          key: key,
        });
        await newData.save();
        return res.json([key]);
      } else {
        const newData = new keys({
          email: email,
          key: key,
        });
        await newData.save();
        return res.json([key]);
      }
    }
  };

  export default{
    getkey,
    genkey,
    regenkey
  }
