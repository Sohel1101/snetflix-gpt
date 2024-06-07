import React from 'react'
import MovieList from './MovieList'
import { UseSelector, useSelector } from 'react-redux'
const GptMovieSuggestions = () => {
  const { gptMovieSearch, gptMovieResult } = useSelector((store) => store.gpt)
  if (!gptMovieResult && !gptMovieSearch) return null
  console.log(gptMovieResult)

  return (
    <div>
      {
        gptMovieSearch.map((movieName, i) => {
          return (
            <MovieList key={movieName} title={movieName} movies={gptMovieResult[i]} />
          )
        })
      }
    </div>
  )
}

export default GptMovieSuggestions