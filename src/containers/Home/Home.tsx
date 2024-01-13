import React, { useState } from 'react';

const Home = () => {
  const [movie, setMovie] = useState<string>('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  if (movie.length >= 3) {
    console.log('Show movie list!');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3 d-flex align-content-center">
          <h4 className="text-nowrap mt-2 me-3">Search for TW Shows:</h4>
          <div>
            <input
              type="text"
              className="form-control"
              id="movie"
              name="movie"
              value={movie}
              onChange={(event) => setMovie(event.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
