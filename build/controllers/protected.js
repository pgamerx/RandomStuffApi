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
const keys_1 = __importDefault(require("../db_models/keys"));
const randomstring = require("randomstring");
const getkey = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    if (email) {
        const info = yield keys_1.default.findOne({
            email: email,
        });
        if (!info) {
            return res.json(["failure"]);
        }
        else {
            return res.json([info.key]);
        }
    }
});
const genkey = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    if (email) {
        const key = randomstring.generate(12);
        const info = yield keys_1.default.findOne({
            email: email,
        });
        if (info) {
            yield keys_1.default.deleteOne({
                email: email,
            });
            const newData = new keys_1.default({
                email: email,
                key: key,
            });
            yield newData.save();
            return res.json([key]);
        }
        else {
            const newData = new keys_1.default({
                email: email,
                key: key,
            });
            yield newData.save();
            return res.json([key]);
        }
    }
});
const regenkey = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    if (email) {
        const key = randomstring.generate(12);
        const info = yield keys_1.default.findOne({
            email: email,
        });
        if (info) {
            yield keys_1.default.deleteOne({
                email: email,
            });
            const newData = new keys_1.default({
                email: email,
                key: key,
            });
            yield newData.save();
            return res.json([key]);
        }
        else {
            const newData = new keys_1.default({
                email: email,
                key: key,
            });
            yield newData.save();
            return res.json([key]);
        }
    }
});
exports.default = {
    getkey,
    genkey,
    regenkey
};
