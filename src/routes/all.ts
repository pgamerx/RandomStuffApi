import express from "express";
import controller from "../controllers/ai";
import controller2 from "../controllers/joke";
import controller3 from "../controllers/reddit";
import controller4 from "../controllers/animals";
import { getAnimeImage } from "../controllers/anime";
import { canvasMethod } from "../controllers/canvas";
import controller9 from "../controllers/weather";
import controller0 from "../controllers/redirects";
import controller7 from "../controllers/premium/facts";
import controller8 from "../controllers/premium/waifu";
import controller10 from "../controllers/protected";
const router = express.Router();

/** Main endpoints (Most used) */
router.get("/ai", controller.getAIResponse);
router.get("/joke", controller2.getJoke);

/** Reddit endpoints */
router.get("/reddit/RandomMeme", controller3.fetchRandomMeme);
router.get("/reddit/FetchSubredditPost", controller3.fetchImageFromSubReddit);
router.get("/reddit/fetchPostById", controller3.fetchPostById);
router.get("/reddit/FetchRandomPost", controller3.FetchRandomPost);
router.get("/reddit/FetchPost", controller3.FetchPost);

/** Images endpoints */
router.get("/animals/cat", controller4.getCatImage);
router.get("/animals/dog", controller4.getDogImage);
router.get("/animals/fox", controller4.getFoxImage);
router.get("/animals/wolf", controller4.getWolfImage);

/** Anime endpoints */
router.get("/anime/", getAnimeImage);
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
router.get("/canvas/:method", canvasMethod);

/** Weather and Covid Endpoints */
router.get("/weather", controller9.GetWeather);

/** Premium Endpoints */
/** Facts Endpoint (PREMIUM ONLY) */
router.get("/facts/:type", controller7.getFact);

/** Waifu Endpoint (PREMIUM ONLY) */
router.get("/waifu/sfw", controller8.SfwWaifu);
router.get("/waifu/nsfw", controller8.NsfwWaifu);

/** Protected Endpoints */
router.get("/protected/api/key/:email", controller10.getkey);
router.get("/protected/api/generate/:email", controller10.genkey);
router.get("/protected/api/regenerate/:email", controller10.regenkey);

/** Redirects */

router.get("/v5/:file", controller0.Deprecated);
router.get("/v5/", controller0.Deprecated);
router.get("/v5", controller0.Deprecated);

router.get("/new", controller0.RapidApiRedirect);
router.get("/rapidapi", controller0.RapidApiRedirect);

router.get("/docs", controller0.DocsRedirect);
router.get("/", controller0.MainSiteRedirect);

router.get("/register", controller0.RegisterSiteRedirect);

/** Export router */
export = router;
