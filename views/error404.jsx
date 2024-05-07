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
        <img src="/images/sadcat.jpg" alt="" />
        <div>
          Photo by <a href="https://unsplash.com/photos/short-hair-gray-cat-on-round-brown-wooden-table-PY3d9NScUP4">Raycan</a>
        </div>
        
      </main>
    </Def>
  );
}

// See index.js
module.exports = error404;
