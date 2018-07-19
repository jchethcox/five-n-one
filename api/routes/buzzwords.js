const buzzwordsObj = require("buzzwords");
const { map, keys, prop } = require("ramda");
const uuid = require("uuid");

const createBuzz = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, buzzwordsObj)
});

const buzzwords = map(createBuzz, keys(buzzwordsObj));

module.exports = app => {
  app.get("/buzzwords", (req, res) => {
    res.send(buzzwords);
  });
};
