const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require('./routes/articles');

const app = express();

console.log("testing mongoose start");
mongoose.connect("mongodb+srv://golden_user:S3fvsQOxIjsUV90P@cluster0.jayp3uh.mongodb.net/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })  
  .then(() => {
    console.log('Connected to MongoDB');

  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
console.log("testing mongoose end");

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    // const articles = await Article.find().sort({createdAt: 'desc'});
    res.render("articles/index");
})

app.use("/articles", articleRouter);

app.listen(5000);