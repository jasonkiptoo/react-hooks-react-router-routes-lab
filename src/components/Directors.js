import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map((director, index) => {
    return (
      <div key={index}>
        <h2>Name: {director.name}</h2>
        <h4>
          Movies:{" "}
          <ul>
            {director.movies.map((genre) => {
              return <li key={genre}>{genre}</li>;
            })}
          </ul>
        </h4>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors;
