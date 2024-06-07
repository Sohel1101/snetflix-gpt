import React from 'react'
import { POSTER_IMG_URL } from '../utils/constant'
import { useNavigate } from "react-router-dom"
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  if (!movie) return null;
  return (
    <div className='w-[150px] p-2'>
      <img
        alt='Movies poster images'
        src={POSTER_IMG_URL + movie?.poster_path}
        onClick={() => navigate('/cast', { state: { movie } })}
      ></img>
    </div>
  )
}

export default MovieCard