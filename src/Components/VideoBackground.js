import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
import YoutubeBackground from 'react-youtube-background'
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
  useMovieTrailer(movieId);

  if (!trailerVideo)
    return

  return (
    <div className='w-screen overflow-x-hidden -mt-[70px]'>
      <iframe
        className='w-screen aspect-video overflow-x-hidden'
        src={"https://www.youtube.com/embed/" + trailerVideo.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        autoplay="1"
        muted="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

    </div>
  )
}

export default VideoBackground