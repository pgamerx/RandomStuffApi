
import express from 'express';
import controller from "../handlers/reddit"
const router = express.Router();


/** Reddit endpoints */
router.get("/reddit/RandomMeme", controller.fetchRandomMeme);
router.get("/reddit/FetchSubredditPost", controller.fetchImageFromSubReddit);
router.get("/reddit/fetchPostById", controller.fetchPostById);
router.get("/reddit/FetchRandomPost", controller.FetchRandomPost);
router.get("/reddit/FetchPost", controller.FetchPost);

export = router;