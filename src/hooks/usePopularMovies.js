import React, { useState, useEffect } from 'react'
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
  const dispatch=useDispatch();
  const [moviedata, setMovieData]=useState();
  const addNowPlaingMovies= async () =>
  {
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US', options)
    const json = await data.json();
    console.log(json.results)
    dispatch(addPopularMovies(json.results))
  }
  useEffect(() => {
    addNowPlaingMovies();
  }, [])
 
}

export default usePopularMovies