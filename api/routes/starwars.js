const starwarsObj = require("starwars-names");
const { map, keys, prop } = require("ramda");
const uuid = require("uuid");

const createNames = k => ({
  id: uuid.v4(),
  name: k
});

const starwarsNames = map(createNames, starwarsObj.all);

module.exports = app => {
  app.get("/starwars", (req, res) => {
    res.send(starwarsNames);
  });
};
