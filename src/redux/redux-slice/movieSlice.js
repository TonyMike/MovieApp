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
      `?apikey=${MOVIE_API_KEY}&i=tt1201607&plot=full`
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
  selectedMoveOrShow: {}
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  //   reducers: {
  //     addMovies: (state, { payload }) => {
  //       state.movies = payload;
  //     }
  //   },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('pending')
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log('fetched movies successfully')
      return { ...state, movies: payload }
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('rejected')
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log('fetched shows successfully')
      return { ...state, shows: payload }
    },
    [MovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log('fetched movie or show successfully')
      console.log(payload)
      return { ...state, selectedMoveOrShow: payload }
    }
  }
})

// export const { addMovies } = movieSlice.actions
export const getAllMovies = state => state.movies
export const getAllShows = state => state.shows
export const getSelectedMovieOrShow = state => state.selectedMoveOrShow
export default movieSlice.reducer
