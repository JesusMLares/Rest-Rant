const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = (
    <h3>
      No comments yet!
    </h3>
  )
  if(data.place.comments.length){
    comments = data.place.comments.map((c, index) => {
      return (
        <div key={index} style={{ border: "1px solid white", padding: "10px" }}>
          <h2>{c.rant ? 'Rant! :(' : 'Rave! <3'}</h2>
          <h4>{c.content}</h4>
          <h3>
        <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }

  return (
    <Def>
      <main style={{ marginTop: "2em" }}>
        <div className="place-rows">
          <img src={data.place.pic} alt={data.place.name} />
          <div className="place-columns" style={{ textAlign: "center", marginLeft: "2em"}}>
            <h1>{data.place.name}</h1>
            <h2 style={{ textAlign: "center", color: "#89CFF0" }}>Rating</h2>
            <h3 style={{ textAlign: "center" }}>Not Rated</h3>
            <h2 style={{ textAlign: "center", color: "#89CFF0" }}>Description</h2>
            <h3 style={{ textAlign: "center" }}>{data.place.showEstablished()}</h3>
          </div>
        </div>
        <div>
        <p style={{ textAlign: "left" }}>
              Located in {data.place.city}, {data.place.state} and serving
              {data.place.cuisines}
            </p>
        </div>
        <section>
          <h2 style={{ color: "#89CFF0", marginTop: "4em" }}>Comments</h2>
          <p>{comments}</p>
        </section>
        <section>
          <div>
            <a href={`/places/${data.place.id}/comment`}>
              <button>Make Comment</button>
            </a>
            <a href={`/places/${data.place.id}/edit`}>
              <button className="edit-btn">Edit</button>
            </a>
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
              <button className="delete-btn"type="submit">
                Delete
              </button>
            </form>
          </div>
        </section>
      </main>
    </Def>
  );
}

module.exports = show;
