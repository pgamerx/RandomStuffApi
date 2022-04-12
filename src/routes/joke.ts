/** source/routes/posts.ts */
import express from 'express';
import controller from "../handlers/joke"
const router = express.Router();

router.get("/random", controller.getRandomJoke);
router.get("/tags", controller.getAllJokesTags);
router.get("/:tag", controller.getJokeWithTag);


export = router;