import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, SetMovies] = useState([])
  const FetchMovies = async () => {
    const response = await fetch('https://swapi.dev/api/films/')
    const data = await response.json();
      const transformedMovies = data.results.map(moviedata => {
        return {
          id: moviedata.episode_id,
          title: moviedata.title,
          openingText: moviedata.opening_crawl,
          releaseDate: moviedata.release_date
        };
      });
      SetMovies(transformedMovies);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={FetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
