const router = require("express").Router();
const db = require("../models");

router.get("/new", (req, res) => {
    res.render("comments/new")
});

module.exports = router;