import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, SetMovies] = useState([]);
  const [IsLoading, SetIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const FetchMovies = async () => {
    SetIsLoading(true);
    setError(null);
    try {
      // const response = await fetch('https://swapi.dev/api/film/');
      const response = await fetch('https://swapi.dev/api/films/');
      if(!response.ok){
        throw new Error('Something Went Wrong!');
      }
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
    } catch (error) {
        setError(error.message);
    }
    SetIsLoading(false);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={FetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!IsLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!IsLoading && movies.length === 0 && !error && <p>Found No Movies!</p>}
        {!IsLoading && error && <p>{error}</p>}
        {IsLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}
export default App;