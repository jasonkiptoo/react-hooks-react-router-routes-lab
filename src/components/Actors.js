import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((actor, index) => {
    return (
      <div key={index}>
        <h2>Name: {actor.name}</h2>
        <h4>
          Movies:{" "}
          <ul>
            {actor.movies.map((movie, index) => {
              return <li key={index}>{movie}</li>;
            })}
          </ul>
        </h4>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}
export default Actors;
