import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice(
    {
      name:'gpt',
      initialState:{
        showGptSearch:false,
        gptMovieSearch:null,
        gptMovieResult:null,
    },
      reducers:{
        toggleGptSearchView(state)
        {
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMoviesResult(state, action)
        { 
          const {gptMovieSearch,gptMovieResult}=action.payload
          state.gptMovieSearch=gptMovieSearch;
          state.gptMovieResult=gptMovieResult;
        }
      }
    }
)
export const {toggleGptSearchView,addGptMoviesResult} = gptSlice.actions
export default gptSlice.reducer