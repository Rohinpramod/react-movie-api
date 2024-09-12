/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Movies from './Movies'
function MovieList({ movies}) {
  return (
    <div className="container">

    <div className="d-flex flex-wrap justify-content-around">
    {movies.map((movie, id) => (
      <Movies
        key={movie.id}
        title={movie.title}
        image={movie.image}
        rating={movie.rating}
        dateOfRelease={movie.dateOfRelease}
      />
    ))}
  </div>
    </div>
  )
}

export default MovieList