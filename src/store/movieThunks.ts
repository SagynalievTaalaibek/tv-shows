import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { ApiMovie, ApiOneMovie, Movie } from '../types';

export const fetchMovies = createAsyncThunk<Movie[], string>(
  'movies/fetchAll',
  async (name) => {
    const responseMovies = await axiosApi.get<ApiMovie[]>(
      `/search/shows?q=${name}`,
    );
    const movies = responseMovies.data;

    return movies.map((movie) => {
      return {
        id: movie.show.id,
        name: movie.show.name,
        language: movie.show.language,
        image: movie.show.image.medium,
        summary: movie.show.summary,
      };
    });
  },
);

export const fetchOneMovie = createAsyncThunk<Movie, string>(
  'movie/fetchOne',
  async (id) => {
    const responseMovies = await axiosApi.get<ApiOneMovie>(`/shows/${id}`);
    const movie = responseMovies.data;
    return {
      id: movie.id,
      name: movie.name,
      language: movie.language,
      image: movie.image.medium,
      summary: movie.summary,
    };
  },
);
