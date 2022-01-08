import { combineReducers } from "redux";

import upcomingMoviesReducer from "./upcomingMoviesReducer";
import popularMoviesReducer from "./popularMoviesReducer";
import topRatedMoviesReducer from "./topRatedMoviesReducer";
import movieDetails from './movieDetails';
import movieCredits from './movieCredits';
import movieSearch from './movieSearch';


export default combineReducers({
  slideShow: popularMoviesReducer,
  upComing: upcomingMoviesReducer,
  topRated: topRatedMoviesReducer,
  movieDetails: movieDetails,
  movieCredits: movieCredits,
  movieSearch: movieSearch,
});