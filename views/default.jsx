const React = require("react");

// Creates default template for page
function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link rel="stylesheet" href="/style.css"/>
      </head>
      <body>{html.children}</body>
    </html>
  );
}

// See index.js
module.exports = Def;
