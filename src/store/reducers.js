import { NEXT, ADD_FAV } from "./actions";

import { movies } from "../movies";

const initialState = {
  movies: movies,
  favMovies: [],
  order: 1,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //case:
    default:
      return state;
  }
}
