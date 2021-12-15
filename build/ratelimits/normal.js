"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normal_day = exports.normal_min = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const plan_1 = require("../checkers/plan");
const normal_min_rl = (0, express_rate_limit_1.default)({
    windowMs: 1 * 60 * 1000,
    max: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = req.get("Authorization");
            if ((yield (0, plan_1.isNormal)(key)) && !(yield (0, plan_1.isPremium)(key)))
                return 60;
            else if ((yield (0, plan_1.isPro)(key)))
                return 120;
            else if ((yield (0, plan_1.isUltra)(key)))
                return 150;
            else if ((yield (0, plan_1.isBiz)(key)))
                return 84484848484848484848484848;
            else if ((yield (0, plan_1.isMega)(key)))
                return 84484848484848484848484848;
            return 1;
        });
    },
});
const normal_day_rl = (0, express_rate_limit_1.default)({
    windowMs: 24 * 3600 * 1000,
    max: function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = req.get("Authorization");
            if ((yield (0, plan_1.isNormal)(key)) && !(yield (0, plan_1.isPremium)(key)))
                return 2500;
            else if (yield (0, plan_1.isPro)(key))
                return 5000;
            else if ((yield (0, plan_1.isUltra)(key)))
                return 10000;
            else if ((yield (0, plan_1.isBiz)(key)))
                return 17000;
            else if ((yield (0, plan_1.isMega)(key)))
                return 27000;
            return 1;
        });
    },
});
function normal_min() {
    return normal_min_rl;
}
exports.normal_min = normal_min;
function normal_day() {
    return normal_day_rl;
}
exports.normal_day = normal_day;
