const React = require('react');
// Default template page
const Def = require('../default')

//Create index page using default page
function index(data){
    //Uses places object in places.js
    let placesFormatted = data.places.map((place) => {
        return(
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
            </div>
        )
    })

    return(
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )
};

module.exports = index;