const fortuneCookiesObj = require("fortune-cookie");
const { map, keys, prop } = require("ramda");
const uuid = require("uuid");

const createCookie = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, fortuneCookiesObj)
});

const cookies = map(createCookie, keys(fortuneCookiesObj));

module.exports = app => {
  app.get("/fortune-cookies", (req, res) => {
    res.send(cookies);
  });
};
