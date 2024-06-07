import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryMainCon from './SecondaryMainCon';
import { UseSelector, useSelector } from 'react-redux';

const Browse = () => {
  const gptButton = useSelector((store) => store.gpt.showGptSearch)
  console.log("gptbutton", gptButton)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header></Header>
      {
        gptButton ? <GptSearch /> : <><MainContainer />
          <SecondaryMainCon /></>

      }
      {/* <MainContainer />
      <SecondaryMainCon /> */}
    </div>
  )
}

export default Browse