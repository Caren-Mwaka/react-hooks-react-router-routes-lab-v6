import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  // Assuming movies data is fetched and stored in the state
  const [movies, setMovies] = useState([]);

  // useEffect to fetch movies data 
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Example API call to fetch movies data
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
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
