/* eslint-disable no-unused-vars */
import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
  <div className="container-fluid fw-bold ">
    <img className='nav-img' src="https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003"/>
    <a className="navbar-brand ms-3" href="#">
      My Favorite Movies
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse   " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Latest Collection
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Premium
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            
          </a>
        </li>
      </ul>
      
      </div>
  </div>
</nav>

  )
}

export default Header