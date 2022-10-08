const { promises } = require("fs");
const NodeCache = require("node-cache");
const path = require("path");

const errorHandle = (error) => {
  console.log(error);
  throw new Error(`cause: ${error}`);
};

const cache = new NodeCache({ stdTTL: 0 });
/**
 * Implementation of a poor man's writeback cache.
 * Function will check to see if a value exists in the cache, and return that value.
 * If not, read JSON file, parse, set in and return from cache
 *
 * @returns  A promise that resolves to an object
 * @TODO GET APPRORIATE KEY TO PLACE IN CACHE
 */

const writeBackCache = async (key) => {
  //if not in cache read, parse, place in cache, return value from cache
  if (!cache.get(key)) {
    let vals; //@TODO instatiate vals
    const success = cache.set(key, vals);
    console.log(vals, `:successfully cached ========> :`, success);
  }
  console.log(key, `:========>successfully retrieved`);
  return cache.get(key);
};
