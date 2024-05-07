const React = require('react');
// Default template page
const Def = require('../default')

//Create index page using default page
function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-6">
            <h2>{place.name}</h2>
            <p>
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p>
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })
      
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="row">
                {placesFormatted}
              </div>
          </main>
      </Def>
    )
  }

module.exports = index;