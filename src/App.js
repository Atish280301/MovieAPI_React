import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, SetMovies] = useState([]);
  const [IsLoading, SetIsLoading] = useState(false);
  const FetchMovies = async () => {
    SetIsLoading(true);
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
      SetIsLoading(false);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={FetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!IsLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!IsLoading && movies.length === 0 && <p>Found No Movies!</p>}
        {IsLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
