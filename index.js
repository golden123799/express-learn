const express = require("express");
const articleRouter = require('./routes/articles');

const app = express();

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    // const articles = await Article.find().sort({createdAt: 'desc'});
    res.render("articles/index");
})

app.use("/articles", articleRouter);

app.listen(5000);