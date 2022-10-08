const NodeCache = require("node-cache");
const createKey = require("./createKey");

const cache = new NodeCache({ stdTTL: 0 });
/**
 * Implementation of a poor man's writeback cache.
 * @param value a value to pass to the cache
 * @returns  key created
 * @TODO GET APPRORIATE KEY TO PLACE IN CACHE
 */

const hashToCache = (value) => {
  //if not in cache read, parse, place in cache, return value from cache
  const key = createKey(value);
  const success = cache.set(key, value);
  console.log(key, `:successfully cached ========> :`, success);
  return key;
};

const readFromCache = (key) => {
  console.log(key, `:========>successfully retrieved`);
  return cache.get(key);
};

module.exports = hashToCache;
