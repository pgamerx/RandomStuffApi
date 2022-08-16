
import express from 'express';
import controller from "../handlers/reddit"
const router = express.Router();


/** Reddit endpoints */
router.get("/RandomMeme", controller.fetchRandomMeme);
router.get("/FetchSubredditPost", controller.fetchImageFromSubReddit);
router.get("/fetchPostById", controller.fetchPostById);
router.get("/FetchRandomPost", controller.FetchRandomPost);
router.get("/FetchPost", controller.FetchPost);

export = router;