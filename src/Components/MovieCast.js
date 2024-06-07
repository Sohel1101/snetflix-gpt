import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import YouTube from 'react-youtube';
import { options } from '../utils/constant';

const Movie = () => {
  const [trailer, setTrailer] = useState([])
  const [cast, setCast] = useState([])
  const location = useLocation()
  const specificMovie = location.state.movie
  const navigate = useNavigate()

  const opts = {
    height: '400px',
    width: '100%',
  };

  const baseUrl = 'https://image.tmdb.org/t/p/original/'

  function fetchTrailer(id) {
    fetch(`http://api.themoviedb.org/3/movie/${id}/videos?`, options)
      .then(res => res.json())
      .then(d => setTrailer(d.results[0].key))
  }

  function fetchCast(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?`, options)
      .then(res => res.json())
      .then(d => setCast(d.cast))

  }
  useEffect(() => {
    fetchCast(specificMovie.id)
    fetchTrailer(specificMovie.id)
  }, [])

  return (
    <div className='Movie'>
      <div className='Banner' style={{
        backgroundImage: `Url(${baseUrl}${specificMovie.backdrop_path})`, height: "90vh",
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center-center', backgroundSize: 'cover'
      }}>
        <div className="banner_contents">
          <div className="banner_title">
            <h2>{specificMovie.name || specificMovie.original_name || specificMovie.original_title}</h2>
          </div>
          <h1 className='banner_description'>{specificMovie.overview}</h1>
        </div>
      </div>
      <h1 style={{ textAlign: 'center' }}>Cast</h1>
      <div className="cast" style={{ display: 'flex', gap: '10px', width: '80%', margin: 'auto', marginBottom: '20px', marginTop: '20px' }}>
        {cast.slice(0, 10).map((movie) => {
          return (
            <div key={movie.id}>
              <img src={`${baseUrl}${movie.profile_path}`} style={{ borderRadius: '50%' }} height={'90px'} width={'120px'} alt="" />

            </div>
          )
        })}
      </div>
      {trailer && <YouTube videoId={trailer} opts={opts} />}
    </div>
  )
}

export default Movie
