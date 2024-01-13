import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFetchLoading, selectMovies } from '../../store/movieSlice';
import MovieList from '../../components/MovieList/MovieList';
import Spinner from '../../components/Spinner/Spinner';
import { fetchMovies } from '../../store/movieThunks';

const Home = () => {
  const dispatch = useAppDispatch();
  const [movie, setMovie] = useState<string>('');
  const movies = useAppSelector(selectMovies);
  const fetchMovieLoading = useAppSelector(selectFetchLoading);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const onChange = async (movie: string) => {
    if (movie.length >= 3) {
      await dispatch(fetchMovies(movie.toLowerCase()));
    }
    setMovie(movie);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3 d-flex align-content-center">
          <h4 className="text-nowrap mt-2 me-3">Search for TW Shows:</h4>
          <div>
            <input
              type="text"
              className="form-control"
              id="movie"
              name="movie"
              value={movie}
              onChange={(event) => onChange(event.target.value)}
            />
            {fetchMovieLoading ? (
              <Spinner />
            ) : (
              movies.map((movie) => (
                <MovieList id={movie.id} key={movie.id} name={movie.name} />
              ))
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
