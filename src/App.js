import Search from './components/Search';
import Cards from './components/Cards';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import Login from './components/Login';
import Movie from './components/movies/Movie';
const API_URL = 'https://api.themoviedb.org/3'; // ENDPOINT

function App() {
  /* 
      ! Etape 1
     todo: import le hooks useState()
     todo: creé une variable dans state de App appelé `films` qui contient 4 object
     todo: dans chaque objet on aura  ces proptrietés :  id , title, srcimage
  */

  /*
      ! Etape 2
      todo: passer une props appelé `movies` pour le comoposant `Cards`
      todo: la valeur du props `movies` est la variable `films` qui existe dans le  state de `App`
  */

  /* 
     ! Etape 3
     todo: garder qu'une seule carte dans le composant `Cards`
     todo: parcourir sur la props `movies` et retourner un paragraphe qui contient le titre 
  */

  /*
      !Etape 4
      todo : crée  un fonction asynchrone dans `App` appelé `getPopularMovies`
      todo: envoyer la requet http vers API_URL + `/movie/popular/` (fetch) 
      todo : retourner les données necessaires et les stockers dans `films`

      ? NB: faut enovyer le parametre api_key dans la requets
    */

  /*
        ! Etape 5
        todo : installer la bibliotheque react-router-dom
        todo : importer les composantes necessaires depuis la bilbiothéque dans `App.js`
  */

  /*
    ! Etape 6
    todo: rendre les images cliquable (import Link depuis la biblio react-router-dom)
    todo: crée un composant `componenets/movies/Movie.js`
    todo: crée une route `/movie/id` qui va retourner le composant `Movie`

  */
  const [films, setFilms] = useState([
    {
      id: 2,
      title: 'Hulk',
      srcimage:
        'https://image.tmdb.org/t/p/w342/qnngKqAcqfH2pBxDoKu5lxzSbTo.jpg',
    },
    {
      id: 3,
      title: 'الطريق الا كابول',
      srcimage:
        'https://image.tmdb.org/t/p/w342/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
    },
    {
      id: 4,
      title: 'titanic',
      srcimage:
        'https://image.tmdb.org/t/p/w342/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    },
  ]);

  useEffect(() => {
    // todo: changer le titre du premier object dans `films`
    getMovies().then((data) => setFilms(data.results));
  }, []);

  //
  // async function
  async function getMovies() {
    const reponse = await fetch(
      `${API_URL}/movie/popular?api_key=7e7346a600f3af0d821581f843c28779`
    );

    const data = await reponse.json();
    return data;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Search />
          <div className="container mt-5">
            <Cards movies={films} />
          </div>
        </Route>

        <Route exact path="/movie/:id">
          <Movie />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
