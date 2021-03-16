import React from 'react';

const backgroundSearch = {
  background: '#E0E0E0',
  marginTop: '30px',
};

const formStyle = {
  border: '1px solid black',
};

function Search() {
  return (
    <div
      className="d-flex p-2 justify-content-between"
      style={backgroundSearch}
    >
      <h4>Popular</h4>
      <form action="" style={formStyle}>
        <div class="input-group">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search for a movie ..."
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="btn btn-outline-primary">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
