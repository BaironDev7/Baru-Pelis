// src/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex'>
          <img className='w-5' src="src/assets/Popcorn.svg" alt="" />
        <h1 className="text-white text-2xl font-bold font-cabin">Baru Pelis</h1>
        </div>
        <div className='lg:flex lg:items-center lg:space-x-6'> 
          <a href="#" className="text-white font-cabinsimple hover:text-gray-300 mr-2">Home</a>
          <a href="#" className="text-white font-cabinsimple hover:text-gray-300 mr-2">Info</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
