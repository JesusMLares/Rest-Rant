const db = require('../models')

async function seed(){
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({name: 'H-Thai-ML'})

    // Create a fake comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    // Add that comment to the place's comment array
    place.comments.push(comment.id)

    // Save the place
    await place.save()

    // Exit the process
    process.exit()
}

seed()