import React from "react";
import "./Home.css";
import img1 from "../../images/img1.avif";
import img2 from "../../images/img2.avif";
import img3 from "../../images/img3.avif";
import img4 from "../../images/img4.avif";
const Home = () => {
  return (
    <div className="">
      <div className="px-5 cont d-flex flex-row justify-content-between align-items-center">
        <ul className="d-flex list-unstyled flex-row align-self-center my-2">
          <li className="mx-2 ">Movies</li>
          <li className="mx-2 ">Stream</li>
          <li className="mx-2 ">Plays</li>
          <li className="mx-2 ">Eavnts</li>
          <li className="mx-2 ">Sports</li>
          <li className="mx-2 ">Activites</li>
        </ul>
        <ul className="d-flex list-unstyled flex-row align-self-center my-2">
          <li className="mx-2 ">ListYourShow</li>
          <li className="mx-2 ">Corporates</li>
          <li className="mx-2 ">Offers</li>
          <li className="mx-2 ">Gift Cards</li>
        </ul>
      </div>
      <div id="carouselExample" className="px-5 carousel slide shadow-sm p-2 mb-4 bg-body-tertiary carou">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 rounded" alt="img" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 rounded" alt="img" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 rounded" alt="img" />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100 rounded" alt="img" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
