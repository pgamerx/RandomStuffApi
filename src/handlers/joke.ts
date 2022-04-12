/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

import jokeHandler from "../handlers/subHandlers/getJoke"
interface Joke {
    joke: string;
    tags: string[];
}


// Return a random joke
const getRandomJoke = async (req: Request, res: Response, next: NextFunction) => {
    // TODO: Implement API Keys and rate limit

    const exclude = req.query.exclude as string || ""
    const exclude_tags = exclude ? exclude.split(',') : [];

    const joke = await jokeHandler.getRandomJoke({
        exclude_tags: exclude_tags
    })

    return res.status(200).json(<Joke>{
        joke: joke.joke,
        tags: joke.tags
    })
};

const getJokeWithTag = async (req: Request, res: Response, next: NextFunction) => {
    // TODO: Implement API Keys and rate limit

    const tag = req.params.tag as string;
    const exclude = req.query.exclude as string || ""

    const exclude_tags = exclude ? exclude.split(',') : [];

    const joke = await jokeHandler.getRandomJokeWithTag(tag, {
        exclude_tags: exclude_tags
    });

    return res.status(200).json(<Joke>{
        joke: joke.joke,
        tags: joke.tags
    })
};

const getAllJokesTags = async (req: Request, res: Response, next: NextFunction) => {
    // TODO: Implement API Keys and rate limit

    const tags = await jokeHandler.getAllTagsFromAllJokes();

    const simplified_tags = tags.map(tag => {
        return tag.toLowerCase();
    });

    return res.status(200).json(simplified_tags);



}

export default {
    getRandomJoke,
    getJokeWithTag,
    getAllJokesTags
};
