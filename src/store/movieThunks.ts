import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { ApiMovie, Movie } from '../types';

export const fetchMovies = createAsyncThunk<Movie[], string>(
  'movies/fetchAll',
  async (name) => {
    const responseMovies = await axiosApi.get<ApiMovie[]>(
      `/search/shows?q=${name}`,
    );
    const movies = responseMovies.data;

    let newMovie: Movie[];

    newMovie = movies.map((movie) => {
      return {
        id: movie.show.id,
        name: movie.show.name,
        language: movie.show.language,
        image: movie.show.image.medium,
        summary: movie.show.summary,
      };
    });

    return newMovie;
  },
);

export const fetchOneMovie = createAsyncThunk<Movie, string>(
  'movie/fetchOne',
  async (id) => {
    const responseMovies = await axiosApi.get<ApiMovie>(`/shows/${id}`);
    const movie = responseMovies.data;
    return {
      id: movie.show.id,
      name: movie.show.name,
      language: movie.show.language,
      image: movie.show.image.medium,
      summary: movie.show.summary,
    };
  },
);
