const React = require("react");

// Creates default template for page
function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
      </head>
      <body>{html.children}</body>
    </html>
  );
}

// See index.js
module.exports = Def;
