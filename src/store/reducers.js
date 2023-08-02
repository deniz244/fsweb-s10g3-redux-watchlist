import { NEXT, ADD_FAV, REM_FAV, PREV } from "./actions";

import { movies } from "../movies";

const initialState = {
  movies: movies,
  favMovies: [],
  order: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT:
      if (state.order === movies.length - 1) {
        return {
          ...state,
          order: 0,
        };
      }
      return {
        ...state,
        order: state.order + 1,
      };

    case PREV:
      if (state.order === 0) {
        return {
          ...state,
          order: state.movies.length - 1,
        };
      } else {
        return {
          ...state,
          order: state.order - 1,
        };
      }

    case ADD_FAV:
      const currentMovie = state.movies[state.order];
      return {
        ...state,
        favMovies: [...state.favMovies, currentMovie],
        movies: state.movies.filter((movie) => movie.id !== currentMovie.id),
        order: state.order - 1,
      };

    case REM_FAV:
      const currentFav = state.favMovies.find(
        (movie) => movie.id === action.payload
      );
      return {
        ...state,
        movies: [...state.movies, currentFav],
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== currentFav.id
        ),
      };

    default:
      return state;
  }
}
