import express from "express";
import controller from "../controllers/ai";
import controller2 from "../controllers/joke";
import controller3 from '../controllers/reddit'
import controller4 from '../controllers/animals'
import controller5 from '../controllers/anime'
import controller6 from '../controllers/canvas'
import controller7 from '../controllers/premium/facts'
import controller8 from '../controllers/premium/waifu'
import { normal_day, normal_min } from "../ratelimits/ratelimits";
const router = express.Router();

/** Main endpoints (Most used) */
router.get("/ai", controller.getAIResponse, normal_min, normal_day);
router.get("/joke", controller2.getJoke, normal_min, normal_day);

/** Reddit endpoints */
router.get("/reddit/RandomMeme", controller3.fetchRandomMeme, normal_min, normal_day);
router.get("/reddit/FetchSubredditPost", controller3.fetchImageFromSubReddit, normal_min, normal_day);
router.get("/reddit/fetchPostById", controller3.fetchPostById, normal_min, normal_day);
router.get("/reddit/FetchRandomPost", controller3.FetchRandomPost, normal_min, normal_day);
router.get("/reddit/FetchPost", controller3.FetchPost, normal_min, normal_day);

/** Images endpoints */
router.get("/animals/cat", controller4.getCatImage, normal_min, normal_day);
router.get("/animals/dog", controller4.getDogImage, normal_min, normal_day);
router.get("/animals/fox", controller4.getFoxImage, normal_min, normal_day);
router.get("/animals/wolf", controller4.getWolfImage, normal_min, normal_day);

/** Anime endpoints */
router.get("/anime/happy", controller5.getHappyAnime, normal_min, normal_day);
router.get("/anime/hi", controller5.getHiAnime, normal_min, normal_day);
router.get("/anime/hug", controller5.getHugAnime, normal_min, normal_day);
router.get("/anime/kiss", controller5.getKissAnime, normal_min, normal_day);
router.get("/anime/punch", controller5.getPunchAnime, normal_min, normal_day);
router.get("/anime/pat" , controller5.getPatAnime, normal_min, normal_day);
router.get("/anime/slap", controller5.getSlapAnime, normal_min, normal_day);
router.get("/anime/nervous", controller5.getNervousAnime, normal_min, normal_day);
router.get("/anime/run", controller5.getRunAnime, normal_min, normal_day);
router.get("/anime/cry", controller5.getCryAnime, normal_min, normal_day);

/** Canvas Endpoint */
router.get("/canvas/:method", controller6.canvasMethod, normal_min, normal_day);

/** Premium Endpoints */
/** Facts Endpoint (PREMIUM ONLY) */
router.get("/facts/:type", controller7.getFact, normal_min, normal_day);

/** Waifu Endpoint (PREMIUM ONLY) */
router.get("/waifu/sfw", controller8.SfwWaifu, normal_min, normal_day);
router.get("/waifu/nsfw", controller8.NsfwWaifu, normal_min, normal_day);
/** Export router */
export = router;
