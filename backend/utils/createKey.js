const keccak256 = require("keccak256");

const createKey = (obj) => {
  let inputString = "";
  Object.values(obj).forEach(
    (value) => (inputString = inputString.concat(value.toString()))
  );
  const key = keccak256(inputString);
  return key.toString("hex");
};

module.exports = createKey;
