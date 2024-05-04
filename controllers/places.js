const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://github.com/JesusMLares/Rest-Rant/blob/main/img/kitten1.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://github.com/JesusMLares/Rest-Rant/blob/main/img/kitten2.jpg'
      }]
      
    res.render('places/index', {places})
})

module.exports = router