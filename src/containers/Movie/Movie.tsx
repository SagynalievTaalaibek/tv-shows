import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchOneMovie } from '../../store/movieThunks';
import {
  selectFetchOneMovieLoading,
  selectMovie,
} from '../../store/movieSlice';
import Spinner from '../../components/Spinner/Spinner';

const Movie = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const fetchOneMovieLoading = useAppSelector(selectFetchOneMovieLoading);
  const movie = useAppSelector(selectMovie);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneMovie(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      {fetchOneMovieLoading ? (
        <Spinner />
      ) : (
        movie && (
          <>
            <div className="d-flex">
              <img src={movie.image} alt={movie.name} />
              <div className="ms-3">
                <h3>Name: {movie.name}</h3>
                <p>
                  Language: <strong>{movie.language}</strong>
                </p>
                <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Movie;
