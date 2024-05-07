const React = require("react");
// Default template page
const Def = require("./default");

//Create home page using default page
function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <img src="/images/pink.jpg" alt="pink beverage by Alex Lvrs" />
        <div>
          Photo by <a href="https://unsplash.com/photos/pink-beverage-on-glass-with-blackberries-and-pink-flower-on-top-sBDJADrnsbY">Alex Lvrs</a>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

// See index.js
module.exports = home;
