import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies)
  console.log("In MainConn")
  console.log(movies)
  if (!movies)
    return
  const mainMovie = movies[17];
  const { title, overview, id } = mainMovie;

  return (
    <div className='overflow-x-hidden'>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>

  )
}

export default MainContainer