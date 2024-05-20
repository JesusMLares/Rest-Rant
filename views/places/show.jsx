const React = require("react");
const Def = require("../default");

function show(data) {
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
          <p>No comments yet!</p>
        </section>
        <section>
          <div>
            <a href={`/places/${data.id}/edit`}>
              <button className="edit-btn">Edit</button>
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
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
