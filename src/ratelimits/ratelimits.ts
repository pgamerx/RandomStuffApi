/*
Deprecated
*/

/*
import rateLimit from "express-rate-limit";
import { Request, Response } from "express";

import {
  isNormal,
  isPro,
  isUltra,
  isBiz,
  isMega,
  isPremium,
} from "../checkers/plan";

const normal_min_rl = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: async function (req: Request, res: Response) {
    const key = req.get("Authorization")! as string;
    if (await isNormal(key) && !await isPremium(key)) return 60;
    else if ((await isPro(key)) as any) return 120;
    else if ((await isUltra(key)) as any) return 150;
    else if ((await isBiz(key) )as any) return 84484848484848484848484848;
    else if ((await isMega(key)) as any) return 84484848484848484848484848;
    return 1;
  },
});

const normal_day_rl = rateLimit({
  windowMs: 24 * 3600 * 1000,
  max: async function (req: Request, res: Response) {
    const key = req.get("Authorization")! as string;
    if (await isNormal(key) && !await isPremium(key)) return 5000;
    else if (await isPro(key)) return 10000;
    else if ((await isUltra(key)) as any) return 15000;
    else if ((await isBiz(key)) as any) return 21000;
    else if ((await isMega(key)) as any) return 30000;
    return 1;
  },
});

export function normal_min() {
  return normal_min_rl;
}

export function normal_day() {
  return normal_day_rl;
}
*/