import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white ">
        <div className="container-fluid mx-5">
          <img height={30} src="https://res.cloudinary.com/admitad-gmbh/image/upload/h_0.5,f_auto/ixaa8tyj24yv45cmgysl.png" alt="img" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="w-100">
              <input className="form-control mx-4 w-50" placeholder="Search for Movies, Plays, Events, Sports and Activities" />
            </div>
            <form className="d-flex justify-content-end">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hyderabad
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div className="nav-list-items">
                      <li><a className="dropdown-item" href="/">Action</a></li>
                      <li><a className="dropdown-item" href="/">Another action</a></li>
                      <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </div>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/" tabindex="-1" aria-disabled="true"><i class="bi bi-person-circle"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/" tabindex="-1" aria-disabled="true">Hi,Gust</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
