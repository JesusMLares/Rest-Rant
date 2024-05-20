const React = require('react');
// Default template page
const Def = require('../default')

//Create index page using default page
function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div key={place.id} className='places-columns'>
        <h2 >
          <a style={{ color: "#132B34"}} href={`/places/${place.id}`}>{place.name}</a>
        </h2>
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
            <div className='places-rows'>
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}

module.exports = index;
