import React, { useRef } from 'react'
import { options } from '../utils/constant';
import { UseDispatch, useDispatch } from 'react-redux';
import { addGptMoviesResult } from '../utils/gptSlice';
// import openai from '../utils/openai';
const GptSearchBar = () => {
    const formData = useRef(null);
    const dispatch = useDispatch();
    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', options);
        const json = await data.json();
        console.log(json);
        return json.results


    }
    const handleClick = async () => {
        const SearchQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + formData.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example- Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"

        // const chatCompletion = await openai.chat.completions.create({
        //     messages: [{ role: 'user', SearchQuery }],
        //     model: 'gpt-3.5-turbo',
        //   });
        //   console.log(chatCompletion.choices)

        const gptMovies = "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan".split(",")
        const promisArray = gptMovies.map((movie) => searchMovieTMDB(movie))
        const tmdbResult = await Promise.all(promisArray);
        console.log(tmdbResult)
        dispatch(addGptMoviesResult({ gptMovieSearch: gptMovies, gptMovieResult: tmdbResult }))

    }

    return (
        <div className='mb-10'>

            <form class="flex items-center max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">

                    <input ref={formData} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search movies ..." required />
                </div>
                <button onClick={handleClick} type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only text-white">Search</span>
                </button>
            </form>

        </div>
    )
}

export default GptSearchBar