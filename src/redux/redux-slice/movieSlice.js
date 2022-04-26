import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../apis/movieApi'
import { MOVIE_API_KEY } from './../../apis/api'
// import { fetchAsyncMovies } from "./movieSlice";

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const text = 'harry'
    const response = await movieApi.get(
      `?apikey=${MOVIE_API_KEY}&s=${text}&type=movie`
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
export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    const seriesText = 'friends'
    const response = await movieApi.get(
      `?apikey=${MOVIE_API_KEY}&s=${seriesText}&type=series`
    )
    return response.data.Search
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
      removeSelectedMovieOrShow: (state) => {
        state.selectedMovieOrShow = {}
      }
    },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('fetched movies successfully')
      return { ...state, movies: payload }
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('fetched shows successfully')
      return { ...state, shows: payload }
    },
    [MovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log('fetched movie or show successfully')
      return { ...state, selectedMovieOrShow: payload }
    }
  }
})

// export const { addMovies } = movieSlice.actions
export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies = state => state.movies
export const getAllShows = state => state.shows
export const getSelectedMovieOrShow = state => state.selectedMovieOrShow
export default movieSlice.reducer
