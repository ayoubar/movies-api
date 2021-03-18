import React from 'react';
import { Link } from 'react-router-dom';
function Card({ element, name }) {
  return (
    <div className="col-3">
      <div className="card">
        <Link to={`/movie/${element.id}`}>
          <img
            className="card-img-top"
            alt="Card image cap"
            src={`https://image.tmdb.org/t/p/w342/${element.backdrop_path}`}
          />
        </Link>
        <div className="card-body">
          <h4 className="card-title">
            <a>{element.title}</a>
          </h4>
          <i
            className="fa-star fa-sm text-primary fas active"
            title=""
            data-mdb-toggle="tooltip"
            data-mdb-original-title="Bad"
            aria-label="Bad"
          ></i>{' '}
          <i
            className="fa-star fa-sm text-primary fas active"
            title=""
            data-mdb-toggle="tooltip"
            data-mdb-original-title="Bad"
            aria-label="Bad"
          ></i>{' '}
          <i
            className="fa-star fa-sm text-primary fas active"
            title=""
            data-mdb-toggle="tooltip"
            data-mdb-original-title="Bad"
            aria-label="Bad"
          ></i>{' '}
          <i
            className="fa-star fa-sm text-primary fas active"
            title=""
            data-mdb-toggle="tooltip"
            data-mdb-original-title="Bad"
            aria-label="Bad"
          ></i>{' '}
          <i
            className="fa-star fa-sm text-primary fas active"
            title=""
            data-mdb-toggle="tooltip"
            data-mdb-original-title="Bad"
            aria-label="Bad"
          ></i>
        </div>
      </div>
    </div>
  );
}

function Cards(props) {
  return (
    <div className="row">
      {props.movies.map((element) => (
        <Card element={element} />
      ))}
    </div>
  );
}

export default Cards;
