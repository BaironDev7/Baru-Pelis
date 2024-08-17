// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesList from './MoviesList';
import './index.css';

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className='text-4xl text-gray-800 font-bold font-cabin text-center p-4'>Popular Movies</h1>
      <MoviesList movies={movies} />
    </div>
    
  );
};

export default App;
