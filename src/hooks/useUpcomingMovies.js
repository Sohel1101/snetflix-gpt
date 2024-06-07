import React, { useState, useEffect } from 'react'
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {
  const dispatch=useDispatch();
 
  const addNowPlaingMovies= async () =>
  {
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const json = await data.json();
    console.log(json.results)
    dispatch(addUpcomingMovies(json.results))
  }
  useEffect(() => {
    addNowPlaingMovies();
  }, [])
 
}

export default useUpcomingMovies