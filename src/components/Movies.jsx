/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


function Movie({title,image,rating, dateOfRelease }) {
  return (
    <>
        <div className="card mb-4 pb-5 ms-1 fw-semibold " style={{ width:"18rem" }}>
    <img src={`http://image.tmdb.org/t/p/w500${image}`}alt={title} className="card-img-top rounded " />
    <div className="card-body">
    <h5 className="card-title ">{title}</h5>
        <p className="card-text text-body-secondary ">
        {`Rating: ${rating}`}</p>
        <p className='card-text'>
            {`Release Date : ${dateOfRelease}`}
        </p>
        <button type="button" className="btn btn-outline-warning  ">Watch Now</button>
    
        
    </div>
    </div> 
</>
  )
}

export default Movie
