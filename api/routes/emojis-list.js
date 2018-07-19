const emojisObj = require("emojis-list");
const { map, keys, prop } = require("ramda");
const uuid = require("uuid");

const createEmoji = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, emojisObj)
});

const emojis = map(createEmoji, keys(emojisObj));

module.exports = app => {
  app.get("/emojis-list", (req, res) => {
    res.send(emojis);
  });
};
