

const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new', (req, res) => {
  res.render('places/new')
});

router.get('/', (req, res) => {
    res.render('places/index', { places })
});

// More code ...


router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'https://github.com/JesusMLares/Rest-Rant/blob/main/public/images/green.jpg?raw=true'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})







// See index.js
module.exports = router