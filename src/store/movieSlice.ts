import { Movie } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { fetchMovies, fetchOneMovie } from './movieThunks';

interface MovieState {
  moviesData: Movie[];
  movie: Movie | null;
  fetchLoading: boolean;
  fetchOneMovieLoading: boolean;
}

const initialState: MovieState = {
  moviesData: [],
  movie: null,
  fetchLoading: false,
  fetchOneMovieLoading: false,
};

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.moviesData = action.payload;
      state.fetchLoading = false;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.fetchLoading = false;
    });

    builder.addCase(fetchOneMovie.pending, (state) => {
      state.fetchOneMovieLoading = true;
    });
    builder.addCase(fetchOneMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.fetchOneMovieLoading = false;
    });
    builder.addCase(fetchOneMovie.rejected, (state) => {
      state.fetchOneMovieLoading = false;
    });
  },
});

export const movieReducer = moviesSlice.reducer;
export const selectMovies = (state: RootState) => state.movies.moviesData;
export const selectMovie = (state: RootState) => state.movies.movie;
export const selectFetchLoading = (state: RootState) =>
  state.movies.fetchLoading;
export const selectFetchOneMovieLoading = (state: RootState) =>
  state.movies.fetchOneMovieLoading;
