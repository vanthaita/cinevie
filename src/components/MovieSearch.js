'use client'
import React, { useState, useRef, useEffect } from 'react';
import { SearchIcon } from 'lucide-react';
import movies from '@/constant/movie'; 
import Link from 'next/link';

const MovieSearch = () => {
  const [search, setSearch] = useState('');
  const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const searchBoxRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length > 0) {
      setIsOpenSearchBox(true);
      const results = movies.filter(movie => movie.Title.toLowerCase().includes(value.toLowerCase()));
      setSearchResults(results);
    } else {
      setIsOpenSearchBox(false);
      setSearchResults([]);
    }
  };

//   const handleClear = () => {
//     setSearch('');
//     setIsOpenSearchBox(false);
//     setSearchResults([]);
//   };

  const handleClickOutside = (event) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setIsOpenSearchBox(false);
      setSearch('');
      
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative space-y-2" ref={searchBoxRef}>
      <div className="relative flex items-center w-42">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          className="flex-1 p-2 pl-10 rounded-xl bg-gray-800 text-gray-300 focus:outline-none"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="w-[1.2rem] h-[1.2rem] text-gray-300" />
        </div>
      </div>
      {isOpenSearchBox && (
        <div className="absolute w-full rounded-lg bg-gray-800 z-50 p-4 mt-2">
          {searchResults.slice(0, 4).length > 0 ? (
            searchResults.slice(0, 4).map((movie) => (
              <div key={movie.id} className="text-gray-300 border-b-2 border-gray-500 mb-2 space-y-1">
                <Link href="/booking">
                  <h3 className="text-lg font-semibold cursor-pointer hover:underline text-white">{movie.Title}</h3>
                </Link>
                <p className=' font-medium text-sm text-white'>{movie.Director}</p>
                <p>{movie.Genre}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-300">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
