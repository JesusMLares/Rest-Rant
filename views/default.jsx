const React = require("react");

// Creates default template for page
function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link rel="stylesheet" href="/style.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      </head>
      <body>{html.children}</body>
    </html>
  );
}

// See index.js
module.exports = Def;
