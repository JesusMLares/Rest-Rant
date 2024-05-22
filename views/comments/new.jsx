const React = require("react");
const Def = require("../default");

function new_Comment(data) {
  return (
    <Def>
      <main>
        <h1>Add a New Comment to: {data.place.name}</h1>
        <form
          method="POST"
          action={`/places/${data.place.id}/comment?_method=PUT`}
          style={{ height: "30vh" }}
        >
          <div className="form-columns">
            <label htmlFor="author">Author</label>
            <input id="author" name="author" />
          </div>
          <div className="form-columns">
            <label htmlFor="rant">Rant?</label>
            <input id="rant" name="rant" type="checkbox" value = 'true' />
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
