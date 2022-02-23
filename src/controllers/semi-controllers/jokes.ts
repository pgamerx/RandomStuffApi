/**
 * The initial jokes are taken from "faiyaz26" 's public collection, Thanks to them for making this joke collection
 */
const jokes = require("../../database/jokes.json");

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const exclude_tags_default = [""];

/**
 * @param {exclude_tags} options This is an array of tags to exclude from the joke
 * @returns A random joke with a random tag (excluding the exclude_tags)
 */
const getRandomJoke = async (
  options = {
    exclude_tags: exclude_tags_default,
  }
) => {
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
};

/**
 *
 * @param tag The tag you want to search for
 * @returns All jokes with the tag
 */
const getAllJokesWithTag = async (tag: any) => {
  var jokesWithTag: any[] = [];
  jokes.forEach(function (joke: { tags: string | any[] }) {
    if (joke.tags.indexOf(tag) != -1) {
      jokesWithTag.push(joke);
    }
  });

  return jokesWithTag;
};

/**
 *
 * @param tag The tag to search for
 * @param options Exclude tags
 * @returns The joke with the tags
 */
const getRandomJokeWithTag = async (
  tag: string,
  options = {
    exclude_tags: exclude_tags_default,
  }
) => {
  var jokesWithTag = await getAllJokesWithTag(tag);
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
};

/**
 *
 * @returns All the tags available in the database
 */
const getAllTagsFromAllJokes = async () => {
  let tags: string[] = [];
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
};

export default {
  getRandomJoke,
  getAllJokesWithTag,
  getRandomJokeWithTag,
  getAllTagsFromAllJokes,
};
