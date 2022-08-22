import React, { useState } from "react";
import MovieCard from "./movieCard";

export default function MovieSearch() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);

  const searchMovies = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query.replace(/\s/g, "") === "") return;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Avengers, Incredibles, Ect"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      <div className="card-list">
        {movies
          .filter((movie: any) => movie.poster_path)
          .map((movie: any) => (
            <MovieCard
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          ))}
      </div>
    </>
  );
}
