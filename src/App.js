//import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";

import { useSelector, useDispatch } from "react-redux";

import { ADD_FAV, NEXT, PREV } from "./store/actions";

function App() {
  //const [sira, setSira] = useState(0);
  //const favMovies = [];

  //const order = useSelector((state) => state.order);
  const { order, favMovies } = useSelector((state) => state);

  const dispatch = useDispatch();

  function sonrakiFilm() {
    //setSira(sira + 1);
    dispatch({ type: NEXT });
  }

  function oncekiFilm() {
    dispatch({ type: PREV });
  }

  function favoriyeEkle() {
    dispatch({ type: ADD_FAV });
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={order} />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={oncekiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki
            </button>
            <button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>

            <button
              onClick={favoriyeEkle}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
