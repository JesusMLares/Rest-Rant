const router = require("express").Router();
const db = require("../models");

router.get("/new", (req, res) => {
    res.render("comments/new")
});

router.post('/', (req, res) => {
    function remove(obj) {
        const result = {};
        for (const key in obj) {
          if (obj[key] !== "") {
            result[key] = obj[key];
          }
        }
    
        return result;
      }

    db.Comment.create(remove(req.body))
    .then(() => {
        res.redirect('/places')
    })
})

module.exports = router;