const loki = require("lokijs");
const DB = new loki("./Database", {
  autosave: true,
  autosaveInterval: 4000,
});

const reviews = DB.addCollection("reviews");
const metadata = DB.addCollection("metadata");

module.exports = {
  DB,
  reviews,
  metadata,
};
