import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryMainCon = () => {
  const movies = useSelector((store) => store.movies)
  console.log(movies)
  if (!movies)
    return

  console.log(movies)
  return (
    movies.nowPlayingMovies &&
    (<div className="bg-black">
      <div className="-mt-[70px] relative z-20">
        <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Up Coming Movies"} movies={movies?.upComingMovies} />
        <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
      </div>
    </div>)
  )
}

export default SecondaryMainCon