import React from 'react';

function Cards(props) {
  return (
    <div className="row">
      {props.movies.map((element) => (
        <div className="col-3">
          <div className="card">
            <img
              className="card-img-top"
              alt="Card image cap"
              src={`https://image.tmdb.org/t/p/w342/${element.backdrop_path}`}
            />

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
      ))}
    </div>
  );
}

export default Cards;
