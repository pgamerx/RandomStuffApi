"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const ai_1 = __importDefault(require("../controllers/ai"));
const joke_1 = __importDefault(require("../controllers/joke"));
const reddit_1 = __importDefault(require("../controllers/reddit"));
const animals_1 = __importDefault(require("../controllers/animals"));
const anime_1 = require("../controllers/anime");
const canvas_1 = require("../controllers/canvas");
const weather_1 = __importDefault(require("../controllers/weather"));
const redirects_1 = __importDefault(require("../controllers/redirects"));
const facts_1 = __importDefault(require("../controllers/premium/facts"));
const waifu_1 = __importDefault(require("../controllers/premium/waifu"));
const protected_1 = __importDefault(require("../controllers/protected"));
const router = express_1.default.Router();
/** Main endpoints (Most used) */
router.get("/ai", ai_1.default.getAIResponse);
router.get("/joke", joke_1.default.getJoke);
/** Reddit endpoints */
router.get("/reddit/RandomMeme", reddit_1.default.fetchRandomMeme);
router.get("/reddit/FetchSubredditPost", reddit_1.default.fetchImageFromSubReddit);
router.get("/reddit/fetchPostById", reddit_1.default.fetchPostById);
router.get("/reddit/FetchRandomPost", reddit_1.default.FetchRandomPost);
router.get("/reddit/FetchPost", reddit_1.default.FetchPost);
/** Images endpoints */
router.get("/animals/cat", animals_1.default.getCatImage);
router.get("/animals/dog", animals_1.default.getDogImage);
router.get("/animals/fox", animals_1.default.getFoxImage);
router.get("/animals/wolf", animals_1.default.getWolfImage);
/** Anime endpoints */
router.get("/anime/", anime_1.getAnimeImage);
/*
router.get("/anime/happy", controller5.getHappyAnime,  );
router.get("/anime/hi", controller5.getHiAnime,  );
router.get("/anime/hug", controller5.getHugAnime,  );
router.get("/anime/kiss", controller5.getKissAnime,  );
router.get("/anime/punch", controller5.getPunchAnime,  );
router.get("/anime/pat" , controller5.getPatAnime,  );
router.get("/anime/slap", controller5.getSlapAnime,  );
router.get("/anime/nervous", controller5.getNervousAnime,  );
router.get("/anime/run", controller5.getRunAnime,  );
router.get("/anime/cry", controller5.getCryAnime,  );
*/
/** Canvas Endpoint */
router.get("/canvas/:method", canvas_1.canvasMethod);
/** Weather and Covid Endpoints */
router.get("/weather", weather_1.default.GetWeather);
/** Premium Endpoints */
/** Facts Endpoint (PREMIUM ONLY) */
router.get("/facts/:type", facts_1.default.getFact);
/** Waifu Endpoint (PREMIUM ONLY) */
router.get("/waifu/sfw", waifu_1.default.SfwWaifu);
router.get("/waifu/nsfw", waifu_1.default.NsfwWaifu);
/** Protected Endpoints */
router.get("/protected/api/key/:email", protected_1.default.getkey);
router.get("/protected/api/generate/:email", protected_1.default.genkey);
router.get("/protected/api/regenerate/:email", protected_1.default.regenkey);
/** Redirects */
router.get("/v5/:file", redirects_1.default.Deprecated);
router.get("/v5/", redirects_1.default.Deprecated);
router.get("/v5", redirects_1.default.Deprecated);
router.get("/new", redirects_1.default.RapidApiRedirect);
router.get("/rapidapi", redirects_1.default.RapidApiRedirect);
router.get("/docs", redirects_1.default.DocsRedirect);
router.get("/", redirects_1.default.MainSiteRedirect);
router.get("/register", redirects_1.default.RegisterSiteRedirect);
module.exports = router;
