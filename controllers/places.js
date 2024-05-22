const router = require("express").Router();
const db = require("../models");

// INDEX
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

// CREATE
router.post("/", (req, res) => {
  function remove(obj) {
    const result = {};
    for (const key in obj) {
      if (obj[key] !== "") {
        result[key] = obj[key];
      }
    }

    return result;
  }
  console.log(req.body);
  db.Place.create(remove(req.body))
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

// NEW PLACE PAGE
router.get("/new", (req, res) => {
  res.render("places/new");
});

// SHOW PLACE PAGE
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// EDIT
router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

// UPDATE
router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

//
router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

// RANT
router.get("/:id/comment", (req, res) => {
  console.log("req.params.id", req.params.id);
  res.render("comments/new")
});

// DELETE
router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;
