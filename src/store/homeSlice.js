import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../apis/MovieApi";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const response = await axios.get('http://localhost:3001/xyzflix/listmovie');
    return response.data;
  }
)

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (search) => {
    console.log(search);
    const response = await MovieApi.get(`?apikey=1b2a0b1d&s=${search}`);
    return response.data;
  }
)

export const fetchAsyncItemById = createAsyncThunk(
  'movies/fetchAsyncItemById',
  async (id) => {
    const response = await MovieApi.get(`?apikey=1b2a0b1d&i=${id}&Plot=full`);
    return response.data;
  }
)

const initialState = {
  movies: [],
  shows: [],
  selectedItem: {},
  loading: false
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        return { ...state, movies: payload };
      })
      .addCase(fetchAsyncMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log('rejected');
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        return { ...state, shows: payload };
      })
      .addCase(fetchAsyncShows.rejected, () => {
        console.log('rejected');
      })
      .addCase(fetchAsyncItemById.fulfilled, (state, { payload }) => {
        return { ...state, loading: false, selectedItem: payload };
      })
  }
})

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieDetail = (state) => state.movies.selectedItem;
export default moviesSlice.reducer;