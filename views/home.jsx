const React = require("react");
// Default template page
const Def = require("./default");

//Create home page using default page
function home() {
  return (
    <Def>
      <main>
        <h1>REST-rant</h1>
        <img src="/images/pink.jpg" alt="pink beverage by Alex Lvrs" style={{width: '50vw', height: '50vh'}}/>
        <div>
          Photo by <a href="https://unsplash.com/photos/pink-beverage-on-glass-with-blackberries-and-pink-flower-on-top-sBDJADrnsbY">Alex Lvrs</a>
        </div>
        <a href="/places">
          <button style={{borderRadius: '10%', backgroundColor: 'darkgrey', color: 'white'}}>Places Page</button>
        </a>
      </main>
    </Def>
  );
}

// See index.js
module.exports = home;
