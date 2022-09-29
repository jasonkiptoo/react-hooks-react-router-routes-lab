import { movies } from "../data";

function Movies() {
  // const [movies, setMovies] = useState(movies);

  const moviesList = movies.map((movie, index) => {
    return (
      <div key={index}>
        <h2>Name: {movie.title}</h2>
        <h3>Time: {movie.time}</h3>
        <h3>
          Genres:{" "}
          <ul>
            {movie.genres.map((genre, i) => {
              return <li key={i}>{genre}</li>;
            })}
          </ul>
        </h3>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
}

export default Movies;
