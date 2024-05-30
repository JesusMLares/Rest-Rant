import React from "react";
import Def from "../default";

function edit_form(data) {
  return (
    <Def>
      <main>
        <h1>Edit this page</h1>
        <form
          method="POST"
          action={`/places/${data.place.id}?_method=PUT`}
          style={{ height: "30vh" }}
        >
          <div>
            <label htmlFor="name">Place Name</label>
            <input
              id="name"
              name="name"
              defaultValue={data.place.name}
              required
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input id="city" name="city" defaultValue={data.place.city} />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input id="state" name="state" defaultValue={data.place.state} />
          </div>
          <div>
            <label htmlFor="cuisines">Cuisines</label>
            <input
              id="cuisines"
              name="cuisines"
              defaultValue={data.place.cuisines}
              required
            />
          </div>
          <div>
            <label htmlFor="pic">Picture</label>
            <input id="pic" name="pic" defaultValue={data.place.pic} required />
          </div>
          <div>
            <label htmlFor="founded">Founded</label>
            <input
              id="founded"
              name="founded"
              defaultValue={data.place.founded}
              required
            />
          </div>
          <input type="submit" value="Edit Place" />
        </form>
      </main>
    </Def>
  );
}

export default edit_form;
