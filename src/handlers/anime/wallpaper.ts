import { Request, Response } from "express";

import { AnimeWallpaper } from "anime-wallpaper";
const wall = new AnimeWallpaper();

import auth from '../../models/auth'

const getAnimeImage = async (
    req: Request,
    res: Response,
) => {

    const key = req.get("Authorization");
    if (!key) {
        return res.status(401).json({
            message: "No Auth Token provided"
        });
    }
    const user = await auth.findOne({
        key: key
    })
    if (!user) {
        return res.status(400).json({
            message: `Could not find the account linked with ${key}, are you sure it exists?`
        });
    }


    const query = req.query.query! as string;
    if (!query) return res.status(400).json(
        {
            message: "No query provided"
        }
    )
    const channel = req.query.channel as string;
    if (!channel || ![1, 2, 3].includes(parseInt(channel)))
        return res.status(400).json({
            message: "No channel provided or channel is invalid"
        });

    // Make a switch statement for parseInt(channel) upto 3
    switch (parseInt(channel)) {
        case 1:
            const wallpaper = await wall.getAnimeWall1({ search: query, page: 1 });
            res.json(wallpaper);
            break;
        case 2:
            const wallpaper2 = await wall.getAnimeWall2(query);
            res.json(wallpaper2);
            break;
        case 3:
            const wallpaper3 = await wall.getAnimeWall4({
                title: query,
                type: "sfw",
                page: "1",
            });
            res.json(wallpaper3);
            break;
        default:
            break;
    }
};

// Export main so I can import it as { main }
export default { getAnimeImage };