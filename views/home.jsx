const React = require("react");
// Default template page
const Def = require("./default");

//Create home page using default page
function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
      </main>
    </Def>
  );
}

// See index.js
module.exports = home;
