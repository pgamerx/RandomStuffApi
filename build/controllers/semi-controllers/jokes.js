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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The initial jokes are taken from "faiyaz26" 's public collection, Thanks to them for making this joke collection
 */
const jokes = require("../../database/jokes.json");
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const exclude_tags_default = [""];
/**
 * @param {exclude_tags} options This is an array of tags to exclude from the joke
 * @returns A random joke with a random tag (excluding the exclude_tags)
 */
const getRandomJoke = (options = {
    exclude_tags: exclude_tags_default,
}) => __awaiter(void 0, void 0, void 0, function* () {
    const min = 0;
    const max = jokes.length - 1;
    const exclude_tags = options["exclude_tags"];
    while (true) {
        // Get a random integer between min and max
        const idx = getRandomInt(min, max);
        // Get a random Joke
        let joke = jokes[idx];
        // Declare flagged as a variable to be used in the loop
        let flagged = 0;
        for (let i = 0; i < exclude_tags.length; i++) {
            if (joke.tags.indexOf(exclude_tags[i]) > -1) {
                flagged = 1;
            }
        }
        if (flagged === 0) {
            return joke;
        }
    }
});
/**
 *
 * @param tag The tag you want to search for
 * @returns All jokes with the tag
 */
const getAllJokesWithTag = (tag) => __awaiter(void 0, void 0, void 0, function* () {
    var jokesWithTag = [];
    jokes.forEach(function (joke) {
        if (joke.tags.indexOf(tag) != -1) {
            jokesWithTag.push(joke);
        }
    });
    return jokesWithTag;
});
/**
 *
 * @param tag The tag to search for
 * @param options Exclude tags
 * @returns The joke with the tags
 */
const getRandomJokeWithTag = (tag, options = {
    exclude_tags: exclude_tags_default,
}) => __awaiter(void 0, void 0, void 0, function* () {
    var jokesWithTag = yield getAllJokesWithTag(tag);
    const exclude_tags = options["exclude_tags"];
    if (jokesWithTag.length == 0) {
        return {
            joke: "Invalid Type, We have changed the types in our API. Please contact us to know more, or checkout our github, or checkout our discord server, or checkout RapidApi",
            tags: [],
        };
    }
    const min = 0;
    const max = jokesWithTag.length - 1;
    while (true) {
        const idx = getRandomInt(min, max);
        let joke = jokesWithTag[idx];
        let flagged = 0;
        for (let i = 0; i < exclude_tags.length; i++) {
            if (joke.tags.indexOf(exclude_tags[i]) > -1) {
                flagged = 1;
            }
        }
        if (flagged === 0) {
            return joke;
        }
    }
});
/**
 *
 * @returns All the tags available in the database
 */
const getAllTagsFromAllJokes = () => __awaiter(void 0, void 0, void 0, function* () {
    let tags = [];
    for (let i = 0; i < jokes.length; i++) {
        const joke = jokes[i];
        const tag = joke.tags;
        for (let j = 0; j < tag.length; j++) {
            if (!tags.includes(tag[j])) {
                tags.push(tag[j]);
            }
        }
    }
    return tags;
});
exports.default = {
    getRandomJoke,
    getAllJokesWithTag,
    getRandomJokeWithTag,
    getAllTagsFromAllJokes,
};
