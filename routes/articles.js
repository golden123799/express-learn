const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    res.render("articles/index");
})

router.get("/new", async (req, res) => {
    res.render("articles/new");
})

module.exports = router;