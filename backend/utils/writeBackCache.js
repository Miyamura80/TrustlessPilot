const { DB, reviews, metadata } = require("../db/setUp");
const createKey = require("./createKey");

/**
 * Implementation of a poor man's writeback cache.
 * @param value a value to pass to the cache
 * @returns  key created
 */

const hashToCache = (value) => {
  //if not in cache read, parse, place in cache, return value from cache
  const key = createKey(value);
  reviews.insert({
    ...value,
    hash: key,
  });
  console.log(key, `:successfully cached ========> :`);
  return key;
};

const readFromCache = (key) => {
  console.log(key, `:========>successfully retrieved`);
  return reviews.findOne({ hash: key });
};

module.exports = { hashToCache, readFromCache };
