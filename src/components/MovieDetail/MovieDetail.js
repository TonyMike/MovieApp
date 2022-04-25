import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { MovieOrShowDetail } from '../../redux/redux-slice/movieSlice'
import { useParams } from 'react-router'

const MovieDetail = () => {
  const dispatch = useDispatch()
  const { imdbid } = useParams()
  useEffect(() => {
    dispatch(MovieOrShowDetail(imdbid))
  }, [dispatch, imdbid])
  return <div>MovieDetail</div>
}

export default MovieDetail
