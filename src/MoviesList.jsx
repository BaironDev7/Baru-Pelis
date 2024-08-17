// src/MoviesList.jsx
import React, { useState } from 'react';
import MovieModal from './Moviemodal.jsx';

const MoviesList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMoreInfoClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {movies.map((movie) => {
          let ratingColor = '';
          const voteAverage = parseFloat(movie.vote_average);

          if (voteAverage < 4) {
            ratingColor = 'bg-red-500';
          } else if (voteAverage >= 4.1 && voteAverage <= 7.4) {
            ratingColor = 'bg-yellow-500';
          } else if (voteAverage >= 7.5) {
            ratingColor = 'bg-green-500';
          }

          return (
            <div key={movie.id} className="bg-white p-4 rounded shadow-md flex flex-col">
              <img
                className="mb-4"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h2 className="text-2xl font-bold text-gray-800 font-cabin mb-2">
                {movie.title}
              </h2>

              <div className='flex justify-between items-end mt-auto'>
                <p className='font-cabinsimple'>Release_Date: {movie.release_date}</p>
                <div className={`p-1 rounded-sm flex flex-col items-center ${ratingColor}`}>
                  <p className='font-cabin text-white'>Rating</p>
                  <p className={`font-bold text-white font-cabinsimple`}>
                    {voteAverage.toFixed(1)}
                  </p>
                </div>
              </div>
              <button
                className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600 font-cabinsimple"
                onClick={() => handleMoreInfoClick(movie)}
              >
                View More
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default MoviesList;
