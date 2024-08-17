// src/MovieModal.jsx
import React from 'react';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-full overflow-y-auto">
        <div className='flex flex-col md:flex-row p-4'>
          <div className='w-full md:w-1/3'>
            <img
              className="rounded-lg object-cover w-full max-h-full md:max-h-full"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{ aspectRatio: '2/3' }}
            />
          </div>
          <div className='md:w-2/3 md:ml-4 mt-4 md:mt-0'>
            <h2 className="text-3xl font-bold mb-4 font-cabin text-gray-800">{movie.title}</h2>
            <p className='mb-4 font-cabin'><strong className='text-gray-800'>Summary:</strong> {movie.overview}</p>
            <p className='mb-4 font-cabin'><strong className='text-gray-800'>Original Language:</strong> {movie.original_language}</p>
            <p className='mb-4 font-cabin'><strong className='text-gray-800'>Rating:</strong> {movie.vote_average.toFixed(1)}</p>
            <p className='mb-4 font-cabin'><strong className='text-gray-800'>Votes:</strong> {movie.vote_count}</p>
            <p className='mb-4 font-cabin'><strong className='text-gray-800'>Popularity:</strong> {movie.popularity}</p>
          </div>
        </div>

        <div className='flex justify-between'>
          <p className='font-cabin'><strong className='text-gray-800'>Release_Date:</strong> {movie.release_date}</p>
          <button
            onClick={onClose}
            className="font-cabinsimple bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;