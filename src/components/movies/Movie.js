import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

function Movie() {
  const [movie, setMovie] = useState(null);
  const id_film = useParams().id;
  useEffect(() => {
    getMovieById(id_film);
  }, []);

  async function getMovieById(id) {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=e366d974f73ae203397850eadc7bce1f&append_to_response=videos`;

    const reponse = await fetch(URL);
    const data = await reponse.json();
    setMovie(data);
  }

  return (
    <div>
      <p>c'est le id {useParams().id}</p>
      <h1> title {movie && movie.original_title}</h1>
      <ul> {movie && movie.genres.map((el) => <li> {el.name}</li>)}</ul>
      <p> Overview : {movie && movie.overview}</p>
    </div>
  );
}

export default Movie;
