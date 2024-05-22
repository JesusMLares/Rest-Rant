const React = require("react");
const Def = require("../default");

function new_Comment({place}) {
  return (
    <Def>
      <main>
        <h1>Add a New Comment</h1>
        <form action="/comments" method="post">
          <div className="form-columns">
            <label htmlFor="author">Author</label>
            <input id="author" name="author" />
          </div>
          <div className="form-columns">
            <label htmlFor="rant">Rant?</label>
            <input id="rant" name="rant" type="checkbox" />
          </div>
          <div className="form-columns">
            <label htmlFor="stars">Stars</label>
            <input id="stars" name="stars" type="number" required />
          </div>
          <div className="form-columns">
            <label htmlFor="content">Content</label>
            <input id="content" name="content" />
          </div>
          <input type="submit" value="Add Comment" className="btn" />
        </form>
      </main>
    </Def>
  );
}

module.exports = new_Comment;
