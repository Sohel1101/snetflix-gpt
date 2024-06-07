import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

const useMovieTrailer = (movieId) => {
    console.log(movieId)
    const dispatch=useDispatch();
    const getMovieVideo = async () =>{
        const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,options);
        const json= await data.json();
        // console.log(json)
        const filterData= json.results.filter((video)=>video.type==="Trailer")
        // console.log(filterData)
        const trailer= filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))
        // console.log(trailer.key)
      }
      useEffect(()=>
      {
        getMovieVideo();

      },[])
 
}
export default useMovieTrailer