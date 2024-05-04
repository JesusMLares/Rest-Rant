const React = require('react');
// ./default is a cue to look in the local file system to find the resource versus an npm dependency as it does when we require ('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          </main>
      </Def>
    )
  }
  

module.exports = home;