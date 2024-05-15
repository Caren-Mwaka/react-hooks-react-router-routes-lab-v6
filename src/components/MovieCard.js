import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function MovieCard({ id, title, genres = [], duration }) {
  return (
    <article>
      <NavBar />
      <h2>{title}</h2>
      <p>Duration: {duration} minutes</p>
      <div>
        <span>Genres: </span>
        {genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
      <Link to={`/movie/${id}`}>View Details</Link>
    </article>
  );
}

export default MovieCard;
