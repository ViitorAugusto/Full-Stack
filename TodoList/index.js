const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/routes");


const port = 3000;

app.use(routes)
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
