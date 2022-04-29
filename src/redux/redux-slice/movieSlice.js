import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../apis/movieApi'
import { MOVIE_API_KEY } from './../../apis/api'
// import { fetchAsyncMovies } from "./movieSlice";

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async term => {
    const response = await movieApi.get(
      `?apikey=${MOVIE_API_KEY}&s=${term}&type=movie`
    )
    return response.data.Search
  }
)
export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async term => {
    const response = await movieApi.get(
      `?apikey=${MOVIE_API_KEY}&s=${term}&type=series`
    )
    return response.data.Search
  }
)
export const MovieOrShowDetail = createAsyncThunk(
  'movies/MovieOrShowDetail',
  async id => {
    const response = await movieApi.get(
      `?apikey=${MOVIE_API_KEY}&i=${id}&plot=full`
    )
    return response.data
  }
)
const initialState = {
  movies: [],
  shows: [],
  selectedMovieOrShow: {}
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: state => {
      state.selectedMovieOrShow = {}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload }
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload }
    },
    [MovieOrShowDetail.fulfilled]: (state, { payload }) => {
    
      return { ...state, selectedMovieOrShow: payload }
    }
  }
})

// export const { addMovies } = movieSlice.actions
export const { removeSelectedMovieOrShow } = movieSlice.actions
export const getAllMovies = state => state.movies
export const getAllShows = state => state.shows
export const getSelectedMovieOrShow = state => state.selectedMovieOrShow
export default movieSlice.reducer
