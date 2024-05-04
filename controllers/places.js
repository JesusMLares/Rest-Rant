const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://github.com/JesusMLares/Rest-Rant/blob/main/img/kitten1.jpg?raw=true'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://github.com/JesusMLares/Rest-Rant/blob/main/img/kitten2.jpg?raw=true'
      }]
      
      // Render index.jsx and passes 'places' objects
    res.render('places/index', {places})
})

// See index.js
module.exports = router