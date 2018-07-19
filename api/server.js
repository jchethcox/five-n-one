const express = require("express");
const cors = require("cors");
const colorRoutes = require("./routes/colors");
const starwarsRoutes = require("./routes/starwars");
const buzzwordsRoutes = require("./routes/buzzwords");
const fortuneCookiesRoutes = require("./routes/fortune-cookies");
const emojisRoutes = require("./routes/emojis-list");

const app = express();
app.use(cors({ credentials: true }));

colorRoutes(app);
starwarsRoutes(app);
buzzwordsRoutes(app);
fortuneCookiesRoutes(app);
emojisRoutes(app);

app.get("/", (req, res) => res.send("5in1 API Server"));

app.listen(5000);
console.log("Server listening at 5000");
