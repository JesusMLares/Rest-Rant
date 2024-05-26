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
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})


// Delete
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


// Edit Place
router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

// NEW RANT
router.get("/:id/comment", (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then((place) => {
      res.render("comments/new", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.put("/:id/comment", async (req, res) => {
  // Get the place
  let place = await db.Place.findById(req.params.id)

  // Create comment using form data
  let comment = await db.Comment.create({
    author: req.body.author,
    rant: req.body.rant === 'true',
    stars: req.body.stars,
    content: req.body.content
  })

  // Add that comment to the place's comment array
  place.comments.push(comment.id)

  // Save the place
  await place.save()

  res.redirect(`/places/${req.params.id}`)
})

// DELETE
router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;
