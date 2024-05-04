const React = require("react");
// Default template page
const Def = require("./default");

//Create error page using default page
function error404() {
  return (
    <Def>
      <main>
        <h1>PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
      </main>
    </Def>
  );
}

// See index.js
module.exports = error404;
