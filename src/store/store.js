import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './homeSlice'
export const store = configureStore({
  reducer: {
    movies: moviesReducer
  },
});
