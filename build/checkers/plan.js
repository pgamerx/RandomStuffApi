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
exports.isMega = exports.isBiz = exports.isUltra = exports.isPro = exports.isPremium = exports.isNormal = void 0;
const premium_1 = __importDefault(require("../db_models/premium"));
const keys_1 = __importDefault(require("../db_models/keys"));
const isNormal = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield keys_1.default.findOne({
        key: key,
    });
    if (!info)
        return false;
    else
        return true;
});
exports.isNormal = isNormal;
const isPremium = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield premium_1.default.findOne({
        key: key,
    });
    if (!info)
        return false;
    else
        return true;
});
exports.isPremium = isPremium;
const isPro = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield premium_1.default.findOne({
        key: key,
    });
    if (!info) {
        return false;
    }
    if (info.type !== "pro") {
        return false;
    }
    return true;
});
exports.isPro = isPro;
const isUltra = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield premium_1.default.findOne({
        key: key,
    });
    if (!info) {
        return false;
    }
    if (info.type !== "ultra") {
        return false;
    }
    return true;
});
exports.isUltra = isUltra;
const isBiz = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield premium_1.default.findOne({
        key: key,
    });
    if (!info) {
        return false;
    }
    if (info.type !== "biz") {
        return false;
    }
    return true;
});
exports.isBiz = isBiz;
const isMega = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield premium_1.default.findOne({
        key: key,
    });
    if (!info) {
        return false;
    }
    if (info.type !== "mega") {
        return false;
    }
    return true;
});
exports.isMega = isMega;
