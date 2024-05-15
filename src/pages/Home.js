import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
 
  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard id={movie.id} title={movie.title} />
              <a href={`http://localhost/movie/${movie.id}`}>View Info</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;
