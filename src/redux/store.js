import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './redux-slice/movieSlice'

export const store = configureStore({
    reducer: movieReducer       
})