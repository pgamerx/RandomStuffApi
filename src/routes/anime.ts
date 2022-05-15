import getAnimeImage from "../handlers/anime/wallpaper";
import getAnimeArt from "../handlers/anime/art";
import express from 'express';
const router = express.Router();

router.get("/wallpaper", getAnimeImage.getAnimeImage);
router.get("/art", getAnimeArt.GetAnimeart);

export = router;