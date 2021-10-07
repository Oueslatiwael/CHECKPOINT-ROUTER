import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
export const MovieDesc = ({ match, moviesList }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(moviesList.find((el) => el.id === +match.params.movieId));
  });
  return (
    <div>
      <div>
        <span>{movie.name}</span>
        <span>{movie.description}</span>
        <div>
          <ReactPlayer url={movie.link} />
        </div>
      </div>
    </div>
  );
};
